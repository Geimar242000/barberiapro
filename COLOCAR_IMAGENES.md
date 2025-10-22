# 📸 Instrucciones para Colocar las Imágenes en el Banner

## 🎯 Pasos para Agregar las Imágenes

### 1. Ubicación de las Imágenes

Debes colocar las 3 imágenes que me enviaste en la siguiente carpeta:

```
C:\Users\ADCArtesanias\Documents\Barberia\public\images\
```

### 2. Nombres de los Archivos

Renombra las imágenes exactamente con estos nombres:

1. **Primera imagen (Horario de Servicio - Abalvi Barber):**
   - Nombre del archivo: `horario-servicio.jpg`
   - Esta aparecerá en el slide: "Agenda tu Cita Ahora"

2. **Segunda imagen (Corte de Cabello Barbería Profesional):**
   - Nombre del archivo: `cortes-profesionales.jpg`
   - Esta aparecerá en el slide: "Cortes Profesionales"

3. **Tercera imagen (Interior de la Barbería):**
   - Nombre del archivo: `barberia-profesional.jpg`
   - Esta aparecerá en el slide: "Barbería Profesional"

### 3. Formato de las Imágenes

- **Formato aceptado:** JPG, JPEG, PNG
- **Tamaño recomendado:** 1920x1080px o similar (16:9)
- **Peso recomendado:** Menos de 500KB para carga rápida

### 4. Estructura Final

Después de colocar las imágenes, la estructura debe verse así:

```
Barberia/
├── public/
│   └── images/
│       ├── horario-servicio.jpg          (Imagen 1 - Horario)
│       ├── cortes-profesionales.jpg      (Imagen 2 - Cortes)
│       └── barberia-profesional.jpg      (Imagen 3 - Interior)
├── src/
└── ...
```

### 5. Verificar que Funcione

1. Guarda las imágenes con los nombres correctos en `public/images/`
2. Inicia el servidor: `npm run dev`
3. Abre el navegador en: `http://localhost:3000`
4. El banner debe mostrar las 3 imágenes rotando automáticamente

## 🎨 Orden de los Slides

El banner mostrará las imágenes en este orden:

1. **Slide 1:** Barbería Profesional (interior de la barbería)
2. **Slide 2:** Cortes Profesionales (ejemplos de cortes)
3. **Slide 3:** Agenda tu Cita (horario de servicio)

## 🔄 Características del Banner

- ✅ Rotación automática cada 5 segundos
- ✅ Botones de navegación (izquierda/derecha)
- ✅ Indicadores de puntos en la parte inferior
- ✅ Overlay oscuro para mejor legibilidad del texto
- ✅ Animaciones suaves entre slides
- ✅ Texto con sombra para destacar sobre la imagen

## ⚠️ Solución de Problemas

### Las imágenes no se muestran:
1. Verifica que los nombres de archivo sean exactos (incluyendo la extensión)
2. Asegúrate de que estén en la carpeta `public/images/`
3. Reinicia el servidor (`Ctrl+C` y luego `npm run dev`)
4. Limpia el caché del navegador (`Ctrl+Shift+R`)

### Las imágenes se ven muy oscuras:
- Puedes ajustar la opacidad del overlay en el archivo `Banner.jsx`
- Busca: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
- Cambia `0.5` a un valor menor (ej: `0.3`) para menos oscuridad

### Las imágenes se ven distorsionadas:
- Usa imágenes con proporción 16:9 (1920x1080, 1280x720, etc.)
- La propiedad `backgroundSize: 'cover'` ajustará automáticamente

## 📝 Notas Adicionales

- Las imágenes se cargan desde la carpeta `public/` que es accesible directamente
- El overlay oscuro (50% de opacidad) ayuda a que el texto blanco sea legible
- El texto tiene `drop-shadow` para mayor contraste
- Las imágenes mantienen su proporción y se centran automáticamente

---

**¡Listo! Una vez colocadas las imágenes con los nombres correctos, tu banner se verá profesional con tus propias imágenes! 🎉**
