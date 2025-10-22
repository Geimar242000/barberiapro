# 🚀 Inicio Rápido - Barbería Elite

## ⚡ Instalación en 3 Pasos

### 1️⃣ Instalar Dependencias
```bash
cd C:\Users\ADCArtesanias\Documents\Barberia
npm install
```

### 2️⃣ Iniciar la Aplicación

**Sin SMS (Más rápido para probar):**
```bash
npm run dev
```

**Con SMS (Requiere configurar Twilio):**
```bash
npm run dev:all
```

### 3️⃣ Abrir en el Navegador
```
http://localhost:3000
```

## 🔐 Credenciales de Acceso

### Administrador
- Usuario: `admin`
- Contraseña: `admin123`

### Barbero 1 - Geimar Mena Lopez
- Usuario: `barbero1`
- Contraseña: `barber123`
- Teléfono: `+573138058022`

### Barbero 2 - Gesnny Mena Moreno
- Usuario: `barbero2`
- Contraseña: `barber123`
- Teléfono: `+573202024815`

## 📱 Configurar SMS (Opcional)

Si quieres que se envíen SMS reales:

1. Crea cuenta en [Twilio](https://www.twilio.com/)
2. Copia `.env.example` a `.env`
3. Agrega tus credenciales de Twilio
4. Ejecuta `npm run dev:all`

Ver guía completa: `CONFIGURAR_TWILIO.md`

## 📚 Documentación Completa

- **README.md** - Documentación general
- **CONFIGURAR_TWILIO.md** - Guía de SMS con Twilio
- **GESTION_BANNER.md** - Cómo gestionar el banner
- **COLOCAR_IMAGENES.md** - Cómo agregar imágenes al banner
- **INSTRUCCIONES.md** - Guía detallada de uso

## ✨ Funcionalidades Principales

### Para Clientes
✅ Ver servicios y precios
✅ Agendar citas online
✅ Recibir SMS de confirmación

### Para Administrador
✅ Ver todas las citas
✅ Gestionar servicios
✅ Gestionar barberos
✅ Gestionar banner (imágenes y textos)

### Para Barberos
✅ Ver sus citas
✅ Recibir SMS de nuevas citas
✅ Consultar servicios

## 🎯 Flujo Típico

1. **Cliente** entra a la página
2. Ve el **banner** con anuncios
3. Navega a **"Servicios"** para ver precios
4. Va a **"Agendar Cita"**
5. Completa el formulario
6. Recibe **SMS de confirmación**
7. **Barbero** recibe **SMS de nueva cita**

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Solo frontend (puerto 3000)
npm run dev

# Solo backend (puerto 3001)
npm run server

# Frontend + Backend juntos
npm run dev:all

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔧 Puertos

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001
- **API SMS:** http://localhost:3001/api/send-sms

## ⚠️ Solución Rápida de Problemas

### "npm no se reconoce"
→ Instala Node.js desde https://nodejs.org/

### "Puerto 3000 en uso"
→ Cierra otras aplicaciones que usen ese puerto

### "SMS no se envían"
→ Verifica que el servidor backend esté corriendo
→ Revisa el archivo `.env` con tus credenciales de Twilio

### "Las imágenes del banner no se ven"
→ Coloca las imágenes en `public/images/`
→ O gestiónelas desde el panel de administrador

## 📞 Necesitas Ayuda?

1. Lee la documentación en los archivos `.md`
2. Revisa la consola del navegador (F12)
3. Revisa los logs del servidor en la terminal

---

**¡Listo para empezar! 🎉**
