# Barbería Elite - Sistema de Gestión de Citas

Una aplicación web profesional para gestionar citas de barbería con panel de administración, panel de barberos y sistema de reservas para clientes.

## 🚀 Características

### Para Clientes
- ✅ Página de inicio con banner animado
- ✅ Visualización de servicios disponibles
- ✅ Sistema de reserva de citas con:
  - Selección de barbero
  - Selección de servicio
  - Selección de fecha y hora
  - Confirmación visual de cita agendada
  - **NUEVO:** Notificación SMS automática al agendar cita

### Para Administradores
- ✅ Ver todas las citas agendadas
- ✅ Gestión completa de servicios (crear, editar, eliminar)
- ✅ Gestión completa de barberos (crear, editar, eliminar)
- ✅ **NUEVO:** Gestión completa del banner (agregar, editar, eliminar slides)
- ✅ Subir imágenes desde la computadora o usar URLs
- ✅ Panel de control intuitivo con vista previa de imágenes

### Para Barberos
- ✅ Ver sus citas agendadas
- ✅ Consultar servicios disponibles
- ✅ Panel personalizado
- ✅ **NUEVO:** Notificación SMS cuando un cliente agenda cita

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework de UI
- **React Router DOM** - Navegación
- **Tailwind CSS** - Estilos modernos
- **Lucide React** - Iconos
- **Vite** - Build tool
- **LocalStorage** - Persistencia de datos

### Backend
- **Express** - Servidor backend
- **Twilio** - Envío de SMS
- **Node.js** - Runtime de JavaScript
- **CORS** - Manejo de peticiones cross-origin

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar Twilio (opcional, para SMS):
   - Copia `.env.example` a `.env`
   - Agrega tus credenciales de Twilio
   - Ver guía completa en `CONFIGURAR_TWILIO.md`

3. Iniciar la aplicación:

**Opción A: Con SMS (Frontend + Backend)**
```bash
npm run dev:all
```

**Opción B: Solo Frontend (sin SMS)**
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 🔐 Credenciales de Acceso

### Administrador
- **Usuario:** admin
- **Contraseña:** admin123

### Barbero 1 - Geimar Mena Lopez
- **Usuario:** barbero1
- **Contraseña:** barber123
- **Teléfono:** +573138058022

### Barbero 2 - Gesnny Mena Moreno
- **Usuario:** barbero2
- **Contraseña:** barber123
- **Teléfono:** +573202024815

## 📱 Estructura del Proyecto

```
Barberia/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación
│   │   └── Banner.jsx          # Banner animado
│   ├── context/
│   │   ├── AuthContext.jsx     # Contexto de autenticación
│   │   └── DataContext.jsx     # Contexto de datos
│   ├── pages/
│   │   ├── Home.jsx            # Página de inicio
│   │   ├── Services.jsx        # Página de servicios
│   │   ├── BookAppointment.jsx # Página de reservas
│   │   ├── Login.jsx           # Página de login
│   │   ├── AdminDashboard.jsx  # Panel de administrador
│   │   └── BarberDashboard.jsx # Panel de barbero
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Diseño

El diseño utiliza una paleta de colores profesional:
- **Primary:** Negro (#1a1a1a)
- **Secondary:** Dorado (#d4af37)
- **Accent:** Marrón (#8b7355)

## 📝 Funcionalidades Detalladas

### Sistema de Citas
- Los clientes pueden agendar citas sin necesidad de login
- Selección de barbero preferido
- Selección de servicio con precios visibles
- Calendario para selección de fecha
- Horarios disponibles de 9:00 AM a 6:00 PM
- Confirmación visual al agendar

### Panel de Administración
- Vista completa de todas las citas
- CRUD completo de servicios
- CRUD completo de barberos
- Interfaz intuitiva con tabs
- Modales para edición

### Panel de Barbero
- Vista filtrada de citas propias
- Consulta de servicios disponibles
- Interfaz simplificada

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 💾 Persistencia de Datos

Los datos se almacenan en LocalStorage del navegador:
- Servicios
- Barberos
- Citas agendadas
- Sesión de usuario

## 🔄 Próximas Mejoras

- [ ] Backend con base de datos
- [ ] Notificaciones por email/SMS
- [ ] Sistema de pagos en línea
- [ ] Historial de citas
- [ ] Calificaciones y reseñas
- [ ] Galería de trabajos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollador

Desarrollado con ❤️ para Barbería Elite
