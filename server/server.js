import express from 'express'
import cors from 'cors'
import twilio from 'twilio'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Configuración de Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

let twilioClient = null

// Inicializar cliente de Twilio solo si las credenciales están configuradas
if (accountSid && authToken && twilioPhoneNumber) {
  twilioClient = twilio(accountSid, authToken)
  console.log('✅ Twilio configurado correctamente')
} else {
  console.log('⚠️ Twilio no configurado - Las notificaciones SMS estarán deshabilitadas')
  console.log('   Configura las variables de entorno en el archivo .env')
}

// Endpoint para enviar mensaje (WhatsApp o SMS)
app.post('/api/send-sms', async (req, res) => {
  try {
    const { to, message } = req.body

    // Validar datos
    if (!to || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Faltan parámetros: to y message son requeridos' 
      })
    }

    // Si Twilio no está configurado, simular envío exitoso
    if (!twilioClient) {
      console.log('📱 Mensaje simulado (Twilio no configurado):')
      console.log(`   Para: ${to}`)
      console.log(`   Mensaje: ${message}`)
      return res.json({ 
        success: true, 
        message: 'Mensaje simulado (Twilio no configurado)',
        simulated: true,
        method: 'simulated'
      })
    }

    // Intentar enviar por WhatsApp primero
    try {
      console.log(`📱 Intentando enviar por WhatsApp a: ${to}`)
      const whatsappResult = await twilioClient.messages.create({
        body: message,
        from: `whatsapp:${twilioPhoneNumber}`,
        to: `whatsapp:${to}`
      })

      console.log('✅ WhatsApp enviado exitosamente:', whatsappResult.sid)
      
      return res.json({ 
        success: true, 
        message: 'Mensaje enviado por WhatsApp',
        sid: whatsappResult.sid,
        method: 'whatsapp',
        simulated: false
      })

    } catch (whatsappError) {
      // Si WhatsApp falla, intentar con SMS tradicional
      console.log('⚠️ WhatsApp no disponible, intentando SMS tradicional...')
      
      try {
        const smsResult = await twilioClient.messages.create({
          body: message,
          from: twilioPhoneNumber,
          to: to
        })

        console.log('✅ SMS enviado exitosamente:', smsResult.sid)
        
        return res.json({ 
          success: true, 
          message: 'Mensaje enviado por SMS',
          sid: smsResult.sid,
          method: 'sms',
          simulated: false
        })
      } catch (smsError) {
        // Si es cuenta Trial y el número no está verificado, simular envío
        if (smsError.code === 21608) {
          console.log('⚠️ Número no verificado (Cuenta Trial). Simulando envío...')
          console.log(`📱 SMS simulado para: ${to}`)
          console.log(`📄 Mensaje: ${message}`)
          
          return res.json({ 
            success: true, 
            message: 'SMS simulado (número no verificado en cuenta Trial)',
            method: 'sms-simulated',
            simulated: true,
            note: 'Actualiza a cuenta de producción para enviar SMS reales a cualquier número'
          })
        }
        
        // Si es otro error, lanzarlo
        throw smsError
      }
    }

  } catch (error) {
    console.error('❌ Error al enviar mensaje:', error.message)
    
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: 'Verifica tus credenciales de Twilio y que el número de destino sea válido'
    })
  }
})

// Endpoint para enviar múltiples SMS
app.post('/api/send-multiple-sms', async (req, res) => {
  try {
    const { messages } = req.body // Array de { to, message }

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Se requiere un array de mensajes' 
      })
    }

    const results = []

    for (const msg of messages) {
      try {
        if (!twilioClient) {
          console.log('📱 SMS simulado:')
          console.log(`   Para: ${msg.to}`)
          console.log(`   Mensaje: ${msg.message}`)
          results.push({ 
            to: msg.to, 
            success: true, 
            simulated: true 
          })
        } else {
          const result = await twilioClient.messages.create({
            body: msg.message,
            from: twilioPhoneNumber,
            to: msg.to
          })
          results.push({ 
            to: msg.to, 
            success: true, 
            sid: result.sid,
            simulated: false
          })
        }
      } catch (error) {
        results.push({ 
          to: msg.to, 
          success: false, 
          error: error.message 
        })
      }
    }

    res.json({ 
      success: true, 
      results: results,
      total: messages.length,
      sent: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    })

  } catch (error) {
    console.error('❌ Error al enviar SMS múltiples:', error.message)
    res.status(500).json({ 
      success: false, 
      error: error.message 
    })
  }
})

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    twilioConfigured: !!twilioClient,
    message: twilioClient 
      ? 'Servidor funcionando con Twilio configurado' 
      : 'Servidor funcionando - Twilio no configurado'
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`)
  console.log(`📡 Endpoint SMS: http://localhost:${PORT}/api/send-sms`)
  if (!twilioClient) {
    console.log('\n⚠️  IMPORTANTE: Configura Twilio en el archivo .env para habilitar SMS reales')
  }
})
