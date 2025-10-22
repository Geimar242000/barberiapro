# 📱 Configuración de Twilio para Notificaciones SMS

## ✅ Funcionalidad Implementada

Ahora cuando un cliente agenda una cita, se envían **SMS automáticos**:

1. **Al Cliente:** "¡Tu cita fue agendada exitosamente! Te esperamos en Barbería Elite el [fecha] a las [hora]. ¡No faltes!"

2. **Al Barbero:** "¡Tienes una cita pendiente! Cliente: [nombre], Servicio: [servicio], Fecha: [fecha], Hora: [hora]"

## 🚀 Pasos para Configurar Twilio

### Paso 1: Crear Cuenta en Twilio

1. Ve a: https://www.twilio.com/
2. Haz clic en **"Sign Up"** (Registrarse)
3. Completa el formulario de registro
4. Verifica tu email y número de teléfono

### Paso 2: Obtener Credenciales

Una vez dentro de tu cuenta de Twilio:

1. Ve al **Dashboard** (Panel de Control)
2. Encontrarás estas credenciales:
   - **Account SID** (Identificador de cuenta)
   - **Auth Token** (Token de autenticación)
3. **Guarda estas credenciales**, las necesitarás

### Paso 3: Obtener un Número de Teléfono

1. En el Dashboard de Twilio, ve a **Phone Numbers** → **Manage** → **Buy a number**
2. Selecciona tu país
3. Marca la opción **"SMS"**
4. Haz clic en **"Search"**
5. Elige un número y haz clic en **"Buy"**
6. **Guarda este número** (formato: +1234567890)

### Paso 4: Configurar Variables de Entorno

1. En la carpeta del proyecto, crea un archivo llamado **`.env`**
2. Copia el contenido de `.env.example`
3. Reemplaza los valores con tus credenciales de Twilio:

```env
# Configuración de Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=tu_auth_token_real
TWILIO_PHONE_NUMBER=+1234567890
PORT=3001
```

**IMPORTANTE:** 
- El número de teléfono debe estar en formato internacional: `+[código país][número]`
- Ejemplo México: `+525512345678`
- Ejemplo USA: `+15551234567`

### Paso 5: Instalar Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará:
- `express` - Servidor backend
- `cors` - Permitir peticiones desde el frontend
- `twilio` - SDK de Twilio para enviar SMS
- `dotenv` - Cargar variables de entorno
- `concurrently` - Ejecutar frontend y backend simultáneamente

### Paso 6: Iniciar la Aplicación

Tienes 3 opciones:

**Opción 1: Iniciar todo junto (Recomendado)**
```bash
npm run dev:all
```
Esto inicia el frontend (puerto 3000) y el backend (puerto 3001) simultáneamente.

**Opción 2: Iniciar por separado**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

**Opción 3: Solo frontend (sin SMS)**
```bash
npm run dev
```
Los SMS se simularán en consola pero no se enviarán realmente.

## 📱 Formato de Números de Teléfono

### Para Clientes
Los clientes deben ingresar su número en formato internacional:
- **México:** `+52` + 10 dígitos (ej: `+525512345678`)
- **USA:** `+1` + 10 dígitos (ej: `+15551234567`)
- **Colombia:** `+57` + 10 dígitos (ej: `+573001234567`)

### Para Barberos
El administrador debe agregar el teléfono del barbero en formato internacional cuando lo registra.

## 🔧 Verificar que Funciona

### 1. Verificar el Servidor Backend

Abre en tu navegador:
```
http://localhost:3001/api/health
```

Deberías ver:
```json
{
  "status": "ok",
  "twilioConfigured": true,
  "message": "Servidor funcionando con Twilio configurado"
}
```

### 2. Probar Envío de SMS

1. Inicia la aplicación con `npm run dev:all`
2. Ve a la página de **Agendar Cita**
3. Completa el formulario con:
   - Tu nombre
   - Tu número de teléfono (formato internacional)
   - Selecciona un barbero
   - Selecciona un servicio
   - Elige fecha y hora
4. Haz clic en **"Agendar Cita"**
5. Deberías recibir un SMS en tu teléfono
6. El barbero también recibirá un SMS

### 3. Ver Logs en Consola

En la terminal del servidor verás:
```
✅ SMS enviado exitosamente: SM...
```

## 💰 Costos de Twilio

### Cuenta de Prueba (Trial)
- **Gratis:** $15 USD de crédito
- **Limitación:** Solo puedes enviar SMS a números verificados
- **Perfecto para:** Desarrollo y pruebas

### Cuenta de Producción
- **Costo por SMS:** ~$0.0075 USD por mensaje (varía por país)
- **Sin limitaciones:** Puedes enviar a cualquier número
- **Recomendado para:** Aplicación en producción

## 🔒 Seguridad

### Proteger tus Credenciales

1. **NUNCA** subas el archivo `.env` a GitHub
2. El archivo `.gitignore` ya está configurado para ignorar `.env`
3. Comparte `.env.example` pero NO `.env`
4. Regenera tus credenciales si las expones accidentalmente

### Buenas Prácticas

- Mantén tu Auth Token secreto
- No compartas tu Account SID públicamente
- Usa variables de entorno en producción
- Monitorea el uso en el Dashboard de Twilio

## 🐛 Solución de Problemas

### Error: "Twilio no configurado"
**Solución:** 
- Verifica que el archivo `.env` existe
- Verifica que las credenciales son correctas
- Reinicia el servidor backend

### Error: "Unable to create record"
**Solución:**
- Verifica que el número de teléfono esté en formato internacional
- Si usas cuenta de prueba, verifica el número en Twilio Console
- Asegúrate de tener crédito en tu cuenta

### Error: "Connection refused"
**Solución:**
- Verifica que el servidor backend esté corriendo en puerto 3001
- Ejecuta `npm run server` en una terminal separada
- O usa `npm run dev:all` para iniciar todo

### Los SMS no llegan
**Solución:**
- Verifica que el número esté en formato correcto (+código país + número)
- Revisa los logs del servidor para ver errores
- Verifica tu saldo en Twilio Dashboard
- Si es cuenta de prueba, verifica el número en Twilio

### Error: "CORS"
**Solución:**
- El servidor ya tiene CORS configurado
- Verifica que el frontend esté en puerto 3000
- Verifica que el backend esté en puerto 3001

## 📊 Monitoreo

### Ver SMS Enviados

1. Ve a Twilio Dashboard
2. Click en **Monitor** → **Logs** → **Messaging**
3. Verás todos los SMS enviados con su estado

### Estados de SMS

- ✅ **Delivered:** SMS entregado exitosamente
- ⏳ **Sent:** SMS enviado, esperando confirmación
- ❌ **Failed:** SMS falló (número inválido, sin crédito, etc.)
- 📱 **Queued:** SMS en cola para envío

## 🚀 Modo Desarrollo vs Producción

### Modo Desarrollo (Sin Twilio)
Si no configuras Twilio, la aplicación funcionará normalmente pero:
- Los SMS se simularán en consola
- No se enviarán SMS reales
- Verás los mensajes en los logs del servidor

### Modo Producción (Con Twilio)
Una vez configurado Twilio:
- Los SMS se enviarán realmente
- Los clientes y barberos recibirán notificaciones
- Se consumirá crédito de Twilio

## 📝 Ejemplo de Flujo Completo

1. **Cliente agenda cita:**
   - Nombre: Juan Pérez
   - Teléfono: +525512345678
   - Barbero: Carlos Pérez
   - Servicio: Corte Clásico
   - Fecha: 2024-01-15
   - Hora: 10:00

2. **SMS al Cliente (+525512345678):**
   ```
   ¡Tu cita fue agendada exitosamente! 
   Te esperamos en Barbería Elite el 2024-01-15 a las 10:00. 
   ¡No faltes!
   ```

3. **SMS al Barbero (+1234567890):**
   ```
   ¡Tienes una cita pendiente! 
   Cliente: Juan Pérez
   Servicio: Corte Clásico
   Fecha: 2024-01-15
   Hora: 10:00
   ```

## 🎯 Próximos Pasos

Una vez configurado Twilio:

1. ✅ Prueba con tu propio número
2. ✅ Agrega números de teléfono reales a los barberos
3. ✅ Monitorea el uso en Twilio Dashboard
4. ✅ Considera actualizar a cuenta de producción
5. ✅ Personaliza los mensajes según tus necesidades

## 📞 Soporte

Si tienes problemas:
- Revisa la documentación de Twilio: https://www.twilio.com/docs
- Verifica los logs del servidor
- Asegúrate de tener crédito en tu cuenta
- Contacta al soporte de Twilio si es necesario

---

**¡Listo! Ahora tu barbería tiene notificaciones SMS automáticas! 📱✨**
