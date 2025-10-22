# 📋 Instrucciones de Instalación y Uso

## ⚠️ Requisitos Previos

Antes de ejecutar la aplicación, necesitas tener instalado:

1. **Node.js** (versión 16 o superior)
   - Descarga desde: https://nodejs.org/
   - Esto incluye npm (Node Package Manager)

## 🚀 Pasos para Ejecutar la Aplicación

### 1. Verificar Instalación de Node.js

Abre PowerShell o CMD y ejecuta:
```bash
node --version
npm --version
```

Si ves las versiones, Node.js está instalado correctamente.

### 2. Instalar Dependencias

Navega a la carpeta del proyecto y ejecuta:
```bash
cd C:\Users\ADCArtesanias\Documents\Barberia
npm install
```

Este comando instalará todas las dependencias necesarias (React, Vite, Tailwind CSS, etc.)

### 3. Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias, ejecuta:
```bash
npm run dev
```

### 4. Abrir en el Navegador

El servidor se iniciará en: **http://localhost:3000**

La aplicación se abrirá automáticamente en tu navegador predeterminado.

## 🔐 Credenciales de Acceso

### Administrador
- **Usuario:** `admin`
- **Contraseña:** `admin123`
- **Permisos:** Ver citas, gestionar servicios, gestionar barberos

### Barbero 1 (Carlos Pérez)
- **Usuario:** `barbero1`
- **Contraseña:** `barber123`
- **Permisos:** Ver sus citas, ver servicios

### Barbero 2 (Miguel Rodríguez)
- **Usuario:** `barbero2`
- **Contraseña:** `barber123`
- **Permisos:** Ver sus citas, ver servicios

## 📱 Navegación de la Aplicación

### Para Clientes (Sin Login)
1. **Inicio** - Ver información de la barbería
2. **Servicios** - Ver todos los servicios disponibles con precios
3. **Agendar Cita** - Reservar una cita:
   - Ingresar nombre y teléfono
   - Seleccionar barbero
   - Seleccionar servicio
   - Elegir fecha y hora
   - Confirmar cita

### Para Administrador (Después de Login)
1. **Dashboard** - Acceso al panel de administración
2. **Citas Agendadas** - Ver todas las citas de todos los barberos
3. **Servicios** - Agregar, editar o eliminar servicios
4. **Barberos** - Agregar, editar o eliminar barberos

### Para Barberos (Después de Login)
1. **Dashboard** - Acceso al panel de barbero
2. **Mis Citas** - Ver solo las citas asignadas a ese barbero
3. **Servicios** - Consultar servicios disponibles

## 🎨 Características Principales

### ✅ Banner Animado
- 3 slides con información de la barbería
- Navegación automática cada 5 segundos
- Botones de navegación manual

### ✅ Sistema de Citas
- Formulario completo de reserva
- Validación de campos
- Mensaje de confirmación visual
- Almacenamiento en LocalStorage

### ✅ Panel de Administración
- Gestión completa de servicios (CRUD)
- Gestión completa de barberos (CRUD)
- Vista de todas las citas
- Interfaz con tabs para organización

### ✅ Panel de Barbero
- Vista filtrada de citas propias
- Consulta de servicios
- Interfaz simplificada

### ✅ Diseño Profesional
- Colores elegantes (negro, dorado, marrón)
- Animaciones suaves
- Responsive (adaptable a móviles)
- Iconos modernos con Lucide React

## 💾 Almacenamiento de Datos

Los datos se guardan en el **LocalStorage** del navegador:
- Servicios disponibles
- Barberos registrados
- Citas agendadas
- Sesión de usuario

**Nota:** Los datos persisten mientras no borres el caché del navegador.

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔧 Solución de Problemas

### Error: "npm no se reconoce"
- **Solución:** Instala Node.js desde https://nodejs.org/

### Error: "Puerto 3000 en uso"
- **Solución:** El puerto se puede cambiar en `vite.config.js`

### La página no carga
- **Solución:** Verifica que el servidor esté corriendo con `npm run dev`

### Los datos no se guardan
- **Solución:** Verifica que el navegador permita LocalStorage

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa el archivo README.md
2. Verifica que Node.js esté instalado correctamente
3. Asegúrate de estar en la carpeta correcta del proyecto

## 🎯 Próximos Pasos Recomendados

1. **Personalizar Datos:**
   - Edita los servicios desde el panel de administrador
   - Agrega o modifica barberos
   - Personaliza los colores en `tailwind.config.js`

2. **Agregar Funcionalidades:**
   - Integrar base de datos real
   - Agregar notificaciones por email
   - Implementar sistema de pagos

3. **Deploy en Producción:**
   - Netlify
   - Vercel
   - GitHub Pages

---

**¡Disfruta tu nueva aplicación de barbería! 💈✂️**
