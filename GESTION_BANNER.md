# 🎨 Gestión del Banner - Panel de Administración

## ✅ Nueva Funcionalidad Implementada

Ahora el **administrador** puede gestionar completamente las imágenes y contenido del banner desde el panel de administración.

## 🔐 Acceso

1. Inicia sesión como administrador:
   - **Usuario:** `admin`
   - **Contraseña:** `admin123`

2. En el panel de administración, verás un nuevo tab llamado **"Banner"**

## 📋 Funcionalidades Disponibles

### ✅ Ver Slides del Banner
- Visualiza todos los slides actuales del banner
- Cada slide muestra:
  - Vista previa de la imagen
  - Título
  - Subtítulo
  - Descripción

### ✅ Agregar Nuevo Slide
1. Haz clic en el botón **"Agregar Slide"**
2. Completa el formulario:
   - **Título:** Título principal del slide
   - **Subtítulo:** Texto secundario (aparece en color dorado)
   - **Descripción:** Texto descriptivo
   - **Imagen:** Tienes 2 opciones:
     - **Opción 1:** Subir una imagen desde tu computadora
     - **Opción 2:** Ingresar la URL de una imagen (ej: `/images/mi-imagen.jpg`)
3. Haz clic en **"Agregar"**

### ✅ Editar Slide Existente
1. Haz clic en el botón **"Editar"** del slide que deseas modificar
2. Modifica los campos que necesites
3. Puedes cambiar la imagen:
   - Subiendo una nueva imagen
   - O ingresando una nueva URL
4. Haz clic en **"Actualizar"**

### ✅ Eliminar Slide
1. Haz clic en el botón **"Eliminar"** del slide que deseas quitar
2. El slide se eliminará inmediatamente del banner

## 🖼️ Cómo Subir Imágenes

### Método 1: Subir desde tu computadora
1. En el formulario, haz clic en **"Elegir archivo"**
2. Selecciona la imagen de tu computadora
3. La imagen se convertirá automáticamente y se guardará
4. Verás una vista previa de la imagen

### Método 2: Usar URL de imagen
1. Primero, coloca tu imagen en la carpeta: `public/images/`
2. En el campo de URL, ingresa: `/images/nombre-de-tu-imagen.jpg`
3. O usa una URL externa: `https://ejemplo.com/imagen.jpg`

## 💡 Recomendaciones

### Tamaño de Imágenes
- **Resolución recomendada:** 1920x1080px (16:9)
- **Peso máximo:** Menos de 500KB para carga rápida
- **Formato:** JPG, PNG, WEBP

### Textos
- **Título:** Corto y llamativo (máximo 50 caracteres)
- **Subtítulo:** Complementa el título (máximo 70 caracteres)
- **Descripción:** Breve y descriptiva (máximo 100 caracteres)

### Cantidad de Slides
- **Mínimo:** 1 slide
- **Recomendado:** 3-5 slides
- **Máximo:** Sin límite, pero 3-5 es ideal para no saturar

## 🔄 Cómo Funciona

1. **Almacenamiento:** Los slides se guardan en el navegador (LocalStorage)
2. **Actualización en tiempo real:** Los cambios se reflejan inmediatamente en el banner
3. **Persistencia:** Los slides se mantienen aunque cierres el navegador
4. **Rotación automática:** El banner cambia de slide cada 5 segundos

## 📱 Ejemplo de Uso

### Caso 1: Agregar promoción especial
```
Título: ¡Promoción de Verano!
Subtítulo: 20% de descuento en todos los servicios
Descripción: Válido hasta fin de mes
Imagen: /images/promocion-verano.jpg
```

### Caso 2: Mostrar horarios
```
Título: Horario de Servicio
Subtítulo: Lunes a Sábado
Descripción: 8AM - 9PM | Domingos 10AM - 8PM
Imagen: /images/horario-servicio.jpg
```

### Caso 3: Destacar servicios
```
Título: Cortes Profesionales
Subtítulo: Barberos expertos a tu servicio
Descripción: Técnicas modernas y clásicas
Imagen: /images/cortes-profesionales.jpg
```

## 🎯 Flujo Completo

1. **Login como admin** → Panel de Administración
2. **Click en tab "Banner"** → Ver slides actuales
3. **Click "Agregar Slide"** → Formulario
4. **Subir imagen** → Desde computadora o URL
5. **Completar textos** → Título, subtítulo, descripción
6. **Click "Agregar"** → Slide creado
7. **Ver en página principal** → El nuevo slide aparece en el banner

## 🔧 Solución de Problemas

### La imagen no se muestra
- Verifica que la URL sea correcta
- Si usas archivo local, asegúrate de que esté en `public/images/`
- Revisa que el formato sea JPG, PNG o WEBP

### Los cambios no se reflejan
- Recarga la página (F5)
- Limpia el caché del navegador (Ctrl+Shift+R)
- Verifica que hayas hecho clic en "Agregar" o "Actualizar"

### La imagen se ve distorsionada
- Usa imágenes con proporción 16:9
- Recomendado: 1920x1080px o similar

## 📊 Ventajas de esta Funcionalidad

✅ **Sin código:** No necesitas editar archivos para cambiar el banner
✅ **Tiempo real:** Los cambios se ven inmediatamente
✅ **Fácil de usar:** Interfaz intuitiva y visual
✅ **Flexible:** Agrega, edita o elimina slides cuando quieras
✅ **Vista previa:** Ves cómo quedará antes de guardar
✅ **Múltiples opciones:** Sube archivos o usa URLs

## 🎨 Personalización Avanzada

Si quieres personalizar más el banner:

1. **Cambiar tiempo de rotación:** Edita `Banner.jsx` línea 22 (5000 = 5 segundos)
2. **Cambiar overlay oscuro:** Edita `Banner.jsx` línea 52 (0.5 = 50% opacidad)
3. **Cambiar altura del banner:** Edita `Banner.jsx` línea 44 (500px)

---

**¡Ahora tienes control total sobre el banner de tu barbería! 🎉**
