# 🐾 Happy Paws - Catálogo Virtual

## 📋 Descripción del Proyecto

**Happy Paws** es un catálogo virtual completo desarrollado como proyecto académico para la asignatura de Ingeniería de Software. El sistema implementa todas las funcionalidades requeridas para un e-commerce moderno, incluyendo autenticación de usuarios, búsqueda avanzada, gestión de productos y carrito de compras.

## 🎯 Objetivos del Proyecto

Este proyecto fue desarrollado para cumplir con los siguientes módulos requeridos:

- ✅ **Módulo de registro**: Sistema de autenticación completo
- ✅ **Módulo de búsqueda básica**: Búsqueda por nombre de productos
- ✅ **Módulo de búsqueda avanzada**: Filtros múltiples
- ✅ **Módulo de artículos y características**: Catálogo detallado
- ✅ **Módulo de compra por artículo**: Agregar productos individuales
- ✅ **Módulo carro de compras**: Gestión completa del carrito
- ✅ **Catálogo con 20+ artículos**: 22 productos implementados

## 👥 Equipo de Desarrollo

**Estudiantes de Ingeniería de Software**  
**Politécnico Grancolombiano**

- **JEISSON FERNEY CARDENAS ORJUELA**
- **JONATHAN PERDOMO ROZO**
- **CARLOS ALFONSO PÉREZ GARZÓN**
- **JOSÉ RODRÍGUEZ CORTÉS**
- **CARLOS IVAN SANCHEZ GIRALDO**

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva y dinámica
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Poppins

### Características Técnicas
- **Responsive Design**: Adaptable a todos los dispositivos
- **localStorage**: Persistencia de datos del cliente
- **Modular Architecture**: Código organizado y mantenible
- **Progressive Enhancement**: Funcionalidad mejorada progresivamente

## 📁 Estructura del Proyecto

```
happy-paws/
├── index.html              # Página principal con estructura HTML
├── styles.css              # Estilos CSS completos
├── script.js               # Lógica JavaScript principal
├── README.md               # Documentación del proyecto
└── tienda.code-workspace   # Configuración de VS Code
```

## 🛍️ Funcionalidades Implementadas

### 1. Sistema de Autenticación
- **Registro de usuarios** con validación completa
- **Inicio de sesión** con persistencia
- **Cerrar sesión** funcional
- **Validación de formularios** en tiempo real
- **Usuarios de prueba** predefinidos

#### Usuarios de Prueba
```
Email: juan@test.com     | Contraseña: 123456
Email: maria@test.com    | Contraseña: 123456
Email: carlos@test.com   | Contraseña: 123456
```

### 2. Catálogo de Productos
- **22 productos** distribuidos en 5 categorías
- **Información detallada** de cada producto
- **Estado de stock** en tiempo real
- **Características específicas** por producto
- **Imágenes clickeables** con modal de detalles

#### Categorías Implementadas
- 🍖 **Alimentación** (6 productos)
- 🎾 **Juguetes** (4 productos)
- 👕 **Ropa** (2 productos)
- 🦮 **Accesorios** (5 productos)
- 🧴 **Higiene** (3 productos)
- 🐠 **Otros** (2 productos)

### 3. Sistema de Búsqueda

#### Búsqueda Básica
- Búsqueda por **nombre de producto**
- Búsqueda por **descripción**
- Búsqueda por **marca**
- Búsqueda con **tecla Enter**

#### Búsqueda Avanzada
- **Filtro por categoría**
- **Rango de precios** (mínimo y máximo)
- **Filtro por estado de stock**
- **Combinación de múltiples filtros**
- **Botón para limpiar filtros**

### 4. Carrito de Compras
- **Agregar productos** con validación de stock
- **Modificar cantidades** en tiempo real
- **Eliminar productos** del carrito
- **Cálculo automático** del total
- **Persistencia** en localStorage
- **Validación de autenticación** para compras

### 5. Interfaz de Usuario
- **Diseño responsive** para todos los dispositivos
- **Animaciones suaves** y transiciones
- **Notificaciones visuales** para feedback
- **Estados visuales** para stock y categorías
- **Navegación intuitiva** con smooth scrolling

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: `#4f46e5` (Azul índigo)
- **Secundario**: `#f59e0b` (Ámbar)
- **Acento**: `#10b981` (Verde esmeralda)
- **Texto Oscuro**: `#1f2937` (Gris oscuro)
- **Texto Claro**: `#6b7280` (Gris medio)

### Características de Diseño
- **Tipografía**: Poppins para mejor legibilidad
- **Iconografía**: Font Awesome para consistencia
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Adaptable a desktop, tablet y móvil

## 🔧 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor web (funciona localmente)

### Instalación
1. **Clona o descarga** el proyecto
2. **Abre** `index.html` en tu navegador
3. **¡Listo!** La aplicación está funcionando

### Uso
1. **Regístrate** o usa un usuario de prueba
2. **Explora** las categorías de productos
3. **Busca** productos usando los filtros
4. **Agrega** productos al carrito
5. **Finaliza** tu compra

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

### Características Responsive
- **Menú hamburguesa** en dispositivos móviles
- **Grid adaptativo** para productos
- **Modales optimizados** para pantallas pequeñas
- **Tipografía escalable** según el dispositivo

## 🔐 Seguridad y Validación

### Autenticación
- **Validación de formularios** en frontend
- **Verificación de contraseñas** coincidentes
- **Validación de email** único
- **Longitud mínima** de contraseña (6 caracteres)

### Carrito de Compras
- **Verificación de stock** antes de agregar
- **Validación de autenticación** para compras
- **Persistencia segura** en localStorage

## 📊 Base de Datos de Productos

### Estructura de Producto
```javascript
{
    id: Number,              // ID único del producto
    name: String,            // Nombre del producto
    price: Number,           // Precio en pesos colombianos
    image: String,           // Emoji o imagen del producto
    category: String,        // Categoría del producto
    description: String,     // Descripción detallada
    stock: Number,           // Cantidad en stock
    brand: String,           // Marca del producto
    weight: String,          // Peso del producto
    size: String,            // Tamaño del producto
    material: String,        // Material del producto
    age: String,             // Edad objetivo (cachorro, adulto, senior)
    features: Array          // Array de características
}
```

### Productos por Categoría
- **Alimentación**: 6 productos (comida para perros, gatos, aves, peces)
- **Juguetes**: 4 productos (interactivos, peluches, cuerdas, inteligencia)
- **Ropa**: 2 productos (sudaderas, chalecos)
- **Accesorios**: 5 productos (collares, arneses, camas, rascadores)
- **Higiene**: 3 productos (shampoo, cepillos, pasta dental)
- **Otros**: 2 productos (comida especializada)

## 🎯 Funcionalidades Destacadas

### 1. Filtrado Inteligente
- **Categorías clickeables** con estado visual activo
- **Filtrado instantáneo** de productos
- **Mensaje informativo** cuando no hay productos
- **Combinación de filtros** múltiples

### 2. Carrito Persistente
- **Productos se mantienen** al recargar la página
- **Contador visual** en tiempo real
- **Modal elegante** para gestión del carrito
- **Cálculo automático** de totales

### 3. Experiencia de Usuario
- **Navegación suave** entre secciones
- **Animaciones de entrada** para productos
- **Efectos hover** en botones y tarjetas
- **Diseño intuitivo** y fácil de usar

### 4. Sistema de Notificaciones
- **Feedback visual** para todas las acciones
- **Diferentes tipos**: success, error, info
- **Animaciones suaves** de entrada y salida
- **Posicionamiento inteligente**

## 🔍 Funciones de Debugging

### Consola del Navegador
```javascript
// Mostrar estado del usuario
showUserStatus()

// Ver usuarios registrados
console.log(JSON.parse(localStorage.getItem('happypaws-users')))

// Ver carrito actual
console.log(JSON.parse(localStorage.getItem('happypaws-cart')))
```

## 📈 Métricas del Proyecto

- **Líneas de código**: ~1,500 líneas
- **Productos**: 22 artículos
- **Categorías**: 5 categorías principales
- **Funciones JavaScript**: 25+ funciones
- **Estilos CSS**: 700+ líneas
- **Elementos HTML**: 200+ elementos

## 🚀 Próximas Mejoras

### Funcionalidades Futuras
- [ ] **Sistema de reseñas** de productos
- [ ] **Galería de imágenes** para productos
- [ ] **Sistema de wishlist** (lista de deseos)
- [ ] **Comparador de productos**
- [ ] **Integración con pasarela de pagos**
- [ ] **Sistema de cupones** y descuentos
- [ ] **Historial de compras**
- [ ] **Notificaciones push**

### Mejoras Técnicas
- [ ] **Backend con Node.js** y Express
- [ ] **Base de datos MongoDB**
- [ ] **Autenticación JWT**
- [ ] **API RESTful**
- [ ] **PWA (Progressive Web App)**
- [ ] **Testing automatizado**

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

- **Email**: info@happypaws.com
- **Teléfono**: +1 234 567 890
- **Dirección**: Calle Principal 123, Ciudad

## 🎓 Información Académica

**Proyecto desarrollado para:**  
**Ingeniería de Software**  
**Politécnico Grancolombiano**  
**2025**

---

**Happy Paws** - Haciendo felices a las mascotas desde 2025 🐕🐱🦜

*Desarrollado con ❤️ por estudiantes de Ingeniería de Software* 