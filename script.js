/**
 * ========================================
 * HAPPY PAWS - CATÁLOGO VIRTUAL
 * ========================================
 * 
 * Archivo JavaScript principal para la tienda virtual Happy Paws
 * Desarrollado por estudiantes de Ingeniería de Software
 * Politécnico Grancolombiano
 * 
 * Funcionalidades implementadas:
 * - Sistema de autenticación (login/registro)
 * - Catálogo de productos con 22+ artículos
 * - Búsqueda básica y avanzada
 * - Filtrado por categorías
 * - Carrito de compras funcional
 * - Modal de detalles de productos
 * - Persistencia de datos en localStorage
 * - Diseño responsive y animaciones
 * 
 * Equipo de desarrollo:
 * - JEISSON FERNEY CARDENAS ORJUELA
 * - JONATHAN PERDOMO ROZO
 * - CARLOS ALFONSO PÉREZ GARZÓN
 * - JOSÉ RODRÍGUEZ CORTÉS
 * - CARLOS IVAN SANCHEZ GIRALDO
 * ========================================
 */

/**
 * ========================================
 * BASE DE DATOS DE PRODUCTOS
 * ========================================
 * Array que contiene todos los productos del catálogo
 * Cada producto incluye: id, nombre, precio, imagen, categoría,
 * descripción, stock, marca, características específicas
 */
const products = [
    {
        id: 1,
        name: "Comida Premium para Perros",
        price: 119960,
        image: "🐕",
        category: "Alimentación",
        description: "Comida premium con proteínas de alta calidad para perros adultos",
        stock: 45,
        brand: "HappyPaws Premium",
        weight: "5kg",
        age: "Adulto",
        features: ["Alta proteína", "Sin granos", "Omega 3", "Vitaminas A, D, E"]
    },
    {
        id: 2,
        name: "Comida Premium para Gatos",
        price: 99960,
        image: "🐱",
        category: "Alimentación",
        description: "Nutrición balanceada para gatos adultos con taurina",
        stock: 32,
        brand: "HappyPaws Premium",
        weight: "3kg",
        age: "Adulto",
        features: ["Taurina", "Proteína animal", "Sin colorantes", "Fácil digestión"]
    },
    {
        id: 3,
        name: "Juguete Interactivo para Perros",
        price: 63960,
        image: "🎾",
        category: "Juguetes",
        description: "Juguete resistente para perros activos, ideal para masticar",
        stock: 28,
        brand: "PlayTime",
        material: "Goma natural",
        size: "Mediano",
        features: ["Resistente", "Dental", "No tóxico", "Lavable"]
    },
    {
        id: 4,
        name: "Sudadera para Perros Pequeños",
        price: 79960,
        image: "👕",
        category: "Ropa",
        description: "Sudadera cómoda y abrigada para perros pequeños",
        stock: 15,
        brand: "PetFashion",
        size: "S-M",
        material: "Algodón",
        features: ["Abrigada", "Fácil de poner", "Lavable", "Diseño moderno"]
    },
    {
        id: 5,
        name: "Collar con Placa Personalizada",
        price: 51960,
        image: "🦮",
        category: "Accesorios",
        description: "Collar ajustable con placa personalizada para identificación",
        stock: 22,
        brand: "SafePet",
        material: "Nylon",
        size: "Ajustable",
        features: ["Placa incluida", "Ajustable", "Resistente", "Reflectivo"]
    },
    {
        id: 6,
        name: "Shampoo para Mascotas",
        price: 35960,
        image: "🧴",
        category: "Higiene",
        description: "Shampoo suave con pH balanceado para piel sensible",
        stock: 38,
        brand: "CleanPet",
        volume: "500ml",
        type: "Hipoalergénico",
        features: ["pH balanceado", "Hipoalergénico", "Sin parabenos", "Aroma suave"]
    },
    {
        id: 7,
        name: "Cama Ortopédica para Perros",
        price: 159960,
        image: "🛏️",
        category: "Accesorios",
        description: "Cama ortopédica para perros medianos con memoria",
        stock: 12,
        brand: "ComfortPet",
        size: "Mediano",
        material: "Espuma memoria",
        features: ["Ortopédica", "Memoria", "Lavable", "Antibacteriana"]
    },
    {
        id: 8,
        name: "Comida para Aves Domésticas",
        price: 59960,
        image: "🦜",
        category: "Alimentación",
        description: "Mezcla de semillas nutritivas para aves domésticas",
        stock: 25,
        brand: "BirdLife",
        weight: "1kg",
        type: "Mezcla premium",
        features: ["Semillas selectas", "Vitaminas", "Minerales", "Sin conservantes"]
    },
    {
        id: 9,
        name: "Rascador para Gatos",
        price: 89960,
        image: "🐾",
        category: "Accesorios",
        description: "Rascador de sisal natural con múltiples niveles",
        stock: 18,
        brand: "CatPlay",
        material: "Sisal natural",
        size: "Grande",
        features: ["Sisal natural", "Múltiples niveles", "Estable", "Lavable"]
    },
    {
        id: 10,
        name: "Juguete de Peluche para Gatos",
        price: 42960,
        image: "🧸",
        category: "Juguetes",
        description: "Peluche suave con catnip para estimular el juego",
        stock: 30,
        brand: "CatPlay",
        material: "Peluche",
        size: "Pequeño",
        features: ["Con catnip", "Suave", "Lavable", "No tóxico"]
    },
    {
        id: 11,
        name: "Comida Húmeda para Perros",
        price: 15960,
        image: "🥫",
        category: "Alimentación",
        description: "Comida húmeda premium con carne real",
        stock: 50,
        brand: "HappyPaws Premium",
        weight: "400g",
        type: "Húmeda",
        features: ["Carne real", "Sin granos", "Vitaminas", "Minerales"]
    },
    {
        id: 12,
        name: "Cepillo para Mascotas",
        price: 29960,
        image: "🪮",
        category: "Higiene",
        description: "Cepillo suave para el cuidado del pelaje",
        stock: 35,
        brand: "CleanPet",
        material: "Cerdas suaves",
        size: "Mediano",
        features: ["Cerdas suaves", "Ergonómico", "Lavable", "Para todo tipo de pelo"]
    },
    {
        id: 13,
        name: "Arnés para Perros",
        price: 69960,
        image: "🦮",
        category: "Accesorios",
        description: "Arnés cómodo y seguro para paseos",
        stock: 20,
        brand: "SafePet",
        material: "Nylon",
        size: "Ajustable",
        features: ["Ajustable", "Seguro", "Cómodo", "Reflectivo"]
    },
    {
        id: 14,
        name: "Comida para Cachorros",
        price: 129960,
        image: "🐕‍🦺",
        category: "Alimentación",
        description: "Comida especializada para cachorros en crecimiento",
        stock: 28,
        brand: "HappyPaws Premium",
        weight: "4kg",
        age: "Cachorro",
        features: ["DHA", "Proteína alta", "Calcio", "Vitaminas"]
    },
    {
        id: 15,
        name: "Juguete de Cuerda",
        price: 25960,
        image: "🪢",
        category: "Juguetes",
        description: "Juguete de cuerda resistente para perros",
        stock: 40,
        brand: "PlayTime",
        material: "Cuerda natural",
        size: "Mediano",
        features: ["Cuerda natural", "Resistente", "Dental", "Lavable"]
    },
    {
        id: 16,
        name: "Chaleco para Perros",
        price: 89960,
        image: "🧥",
        category: "Ropa",
        description: "Chaleco abrigado para perros en climas fríos",
        stock: 16,
        brand: "PetFashion",
        material: "Polar",
        size: "M-L",
        features: ["Abrigado", "Ligero", "Fácil de poner", "Lavable"]
    },
    {
        id: 17,
        name: "Comida para Gatos Senior",
        price: 109960,
        image: "🐈",
        category: "Alimentación",
        description: "Comida especializada para gatos mayores de 7 años",
        stock: 22,
        brand: "HappyPaws Premium",
        weight: "2.5kg",
        age: "Senior",
        features: ["Bajo en calorías", "Glucosamina", "Omega 3", "Fácil digestión"]
    },
    {
        id: 18,
        name: "Cepillo Dental para Mascotas",
        price: 19960,
        image: "🪥",
        category: "Higiene",
        description: "Cepillo dental suave con pasta incluida",
        stock: 45,
        brand: "CleanPet",
        material: "Cerdas suaves",
        size: "Pequeño",
        features: ["Cerdas suaves", "Pasta incluida", "Ergonómico", "Lavable"]
    },
    {
        id: 19,
        name: "Juguete de Inteligencia",
        price: 75960,
        image: "🧩",
        category: "Juguetes",
        description: "Juguete de inteligencia para estimular la mente",
        stock: 15,
        brand: "SmartPet",
        material: "Plástico seguro",
        size: "Mediano",
        features: ["Estimula inteligencia", "Reutilizable", "Lavable", "No tóxico"]
    },
    {
        id: 20,
        name: "Comida para Aves Exóticas",
        price: 79960,
        image: "🦚",
        category: "Alimentación",
        description: "Comida especializada para aves exóticas y loros",
        stock: 18,
        brand: "BirdLife",
        weight: "800g",
        type: "Especializada",
        features: ["Frutas secas", "Nueces", "Vitaminas", "Minerales"]
    },
    {
        id: 21,
        name: "Cama para Gatos",
        price: 89960,
        image: "🛋️",
        category: "Accesorios",
        description: "Cama suave y cómoda para gatos",
        stock: 25,
        brand: "ComfortPet",
        material: "Peluche",
        size: "Mediano",
        features: ["Suave", "Cómoda", "Lavable", "Antibacteriana"]
    },
    {
        id: 22,
        name: "Comida para Peces Tropicales",
        price: 39960,
        image: "🐠",
        category: "Alimentación",
        description: "Comida flotante para peces tropicales",
        stock: 30,
        brand: "AquaLife",
        weight: "100g",
        type: "Flotante",
        features: ["Flotante", "Nutritiva", "Color intenso", "Fácil digestión"]
    }
];

/**
 * ========================================
 * VARIABLES DE ESTADO GLOBAL
 * ========================================
 */

// Estado del carrito de compras
let cart = [];

// Estado de autenticación del usuario
let currentUser = null;

/**
 * ========================================
 * ELEMENTOS DEL DOM - NAVEGACIÓN Y CARRITO
 * ========================================
 */
const productsGrid = document.getElementById('products-grid');      // Grid de productos
const cartModal = document.getElementById('cart-modal');            // Modal del carrito
const cartItems = document.getElementById('cart-items');            // Lista de items del carrito
const cartCount = document.getElementById('cart-count');            // Contador del carrito
const cartTotal = document.getElementById('cart-total');            // Total del carrito
const cartIcon = document.getElementById('cart-icon');              // Icono del carrito
const closeCart = document.getElementById('close-cart');            // Botón cerrar carrito
const checkoutBtn = document.getElementById('checkout-btn');        // Botón finalizar compra
const hamburger = document.querySelector('.hamburger');            // Menú hamburguesa
const navMenu = document.querySelector('.nav-menu');               // Menú de navegación

/**
 * ========================================
 * ELEMENTOS DEL DOM - AUTENTICACIÓN
 * ========================================
 */
const authModal = document.getElementById('auth-modal');            // Modal de autenticación
const loginBtn = document.getElementById('login-btn');              // Botón de login
const closeAuth = document.getElementById('close-auth');            // Botón cerrar auth
const authTabs = document.querySelectorAll('.auth-tab');           // Tabs de auth
const loginForm = document.getElementById('login-form');            // Formulario de login
const registerForm = document.getElementById('register-form');      // Formulario de registro
const userName = document.getElementById('user-name');              // Nombre del usuario

/**
 * ========================================
 * ELEMENTOS DEL DOM - BÚSQUEDA
 * ========================================
 */
const searchInput = document.getElementById('search-input');        // Input de búsqueda básica
const searchBtn = document.getElementById('search-btn');            // Botón de búsqueda
const categoryFilter = document.getElementById('category-filter');  // Filtro de categoría
const priceMin = document.getElementById('price-min');              // Precio mínimo
const priceMax = document.getElementById('price-max');              // Precio máximo
const stockFilter = document.getElementById('stock-filter');        // Filtro de stock
const advancedSearchBtn = document.getElementById('advanced-search-btn'); // Búsqueda avanzada
const clearFiltersBtn = document.getElementById('clear-filters-btn');     // Limpiar filtros

/**
 * ========================================
 * INICIALIZACIÓN DE LA APLICACIÓN
 * ========================================
 * Función principal que se ejecuta cuando el DOM está listo
 * Configura todos los event listeners y carga datos iniciales
 */
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();                      // Cargar productos en el grid
    setupEventListeners();               // Configurar event listeners
    loadCartFromStorage();               // Cargar carrito desde localStorage
    loadUserFromStorage();               // Cargar usuario desde localStorage
    initializeTestUsers();               // Crear usuarios de prueba
    updateCartDisplay();                 // Actualizar display del carrito
    initializeActiveCategory();          // Marcar categoría "Todos" como activa
    updateUserDisplay();                 // Actualizar display del usuario
});

/**
 * ========================================
 * CONFIGURACIÓN DE EVENT LISTENERS
 * ========================================
 * Configura todos los event listeners necesarios para la funcionalidad
 * de la aplicación: carrito, autenticación, búsqueda, navegación
 */
function setupEventListeners() {
    // ===== EVENT LISTENERS DEL CARRITO =====
    cartIcon.addEventListener('click', toggleCart);           // Abrir/cerrar carrito
    closeCart.addEventListener('click', toggleCart);          // Cerrar carrito
    checkoutBtn.addEventListener('click', checkout);          // Finalizar compra
    
    // ===== EVENT LISTENERS DE AUTENTICACIÓN =====
    loginBtn.addEventListener('click', toggleAuth);           // Abrir modal de auth
    closeAuth.addEventListener('click', toggleAuth);          // Cerrar modal de auth
    authTabs.forEach(tab => {
        tab.addEventListener('click', switchAuthTab);         // Cambiar entre login/registro
    });
    loginForm.addEventListener('submit', handleLogin);        // Manejar login
    registerForm.addEventListener('submit', handleRegister);  // Manejar registro
    
    // ===== EVENT LISTENERS DE BÚSQUEDA =====
    searchBtn.addEventListener('click', performBasicSearch);  // Búsqueda básica
    searchInput.addEventListener('keypress', function(e) {    // Búsqueda con Enter
        if (e.key === 'Enter') {
            performBasicSearch();
        }
    });
    advancedSearchBtn.addEventListener('click', performAdvancedSearch); // Búsqueda avanzada
    clearFiltersBtn.addEventListener('click', clearFilters);  // Limpiar filtros
    
    // ===== EVENT LISTENERS DE NAVEGACIÓN =====
    hamburger.addEventListener('click', toggleMobileMenu);    // Menú móvil
    
    // ===== EVENT LISTENERS DE CATEGORÍAS =====
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);                         // Filtrar por categoría
            
            // Actualizar estado activo de las categorías
            categoryCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll suave a la sección de productos
            const productsSection = document.getElementById('productos');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== EVENT LISTENERS PARA CERRAR MODALES =====
    document.addEventListener('click', function(e) {
        // Cerrar carrito al hacer clic fuera
        if (!cartModal.contains(e.target) && !cartIcon.contains(e.target)) {
            cartModal.classList.remove('active');
        }
        // Cerrar modal de auth al hacer clic fuera
        if (!authModal.contains(e.target) && !loginBtn.contains(e.target)) {
            authModal.classList.remove('active');
        }
    });
    
    // ===== SMOOTH SCROLLING PARA NAVEGACIÓN =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Cargar productos
function loadProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stockStatus = product.stock > 10 ? 'En stock' : product.stock > 0 ? 'Stock bajo' : 'Agotado';
    const stockClass = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
    
    card.innerHTML = `
        <div class="product-image" onclick="showProductDetail(${product.id})">
            <span>${product.image}</span>
            <div class="product-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-details">
                <span class="product-brand">${product.brand}</span>
                <span class="stock-status ${stockClass}">${stockStatus}</span>
            </div>
            <div class="product-price">$${product.price.toLocaleString('es-CO')} COP</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock <= 0 ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> 
                ${product.stock <= 0 ? 'Agotado' : 'Agregar al Carrito'}
            </button>
        </div>
    `;
    
    // Animación de entrada
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    return card;
}

// Agregar al carrito
function addToCart(productId) {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para agregar productos al carrito', 'error');
        toggleAuth();
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.stock <= 0) {
        showNotification('Este producto está agotado', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Animación de confirmación
    showAddToCartAnimation();
    
    updateCartDisplay();
    saveCartToStorage();
}

// Mostrar animación de agregado al carrito
function showAddToCartAnimation() {
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check"></i>
        <span>Producto agregado al carrito</span>
    `;
    
    // Estilos para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Actualizar display del carrito
function updateCartDisplay() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar items del carrito
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0 COP';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItems.appendChild(cartItem);
    });
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toLocaleString('es-CO')} COP`;
}

// Crear item del carrito
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <span>${item.image}</span>
        </div>
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${item.price.toLocaleString('es-CO')} COP</div>
        </div>
        <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
    `;
    return cartItem;
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCartDisplay();
    saveCartToStorage();
}

// Toggle carrito
function toggleCart() {
    cartModal.classList.toggle('active');
}

// Toggle menú móvil
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Checkout
function checkout() {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para realizar una compra', 'error');
        toggleAuth();
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`¡Gracias por tu compra, ${currentUser.name}!\nTotal: $${total.toLocaleString('es-CO')} COP\n\nEsta es una demostración. En una aplicación real, aquí se procesaría el pago.`, 'success');
    
    // Limpiar carrito
    cart = [];
    updateCartDisplay();
    saveCartToStorage();
    toggleCart();
}

// Guardar carrito en localStorage
function saveCartToStorage() {
    localStorage.setItem('happypaws-cart', JSON.stringify(cart));
}

// Cargar carrito desde localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('happypaws-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Animaciones de scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card, .category-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Inicializar animaciones de scroll
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateOnScroll, 500);
});

// Efectos hover adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de brillo en productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de pulso en botones
    const buttons = document.querySelectorAll('.btn, .add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Función para filtrar productos por categoría
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    // Actualizar título de la sección
    const sectionTitle = document.querySelector('.products .section-title');
    if (sectionTitle) {
        if (category === 'all') {
            sectionTitle.textContent = 'Productos Destacados';
        } else {
            sectionTitle.textContent = `Productos - ${category}`;
        }
    }
    
    // Limpiar grid y agregar productos filtrados
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No se encontraron productos en esta categoría</h3>
                <p>Intenta con otra categoría o vuelve a "Todos"</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Reinicializar efectos hover para los nuevos productos
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }, 100);
}

// Función para buscar productos (extensión futura)
function searchProducts(query) {
    const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    productsGrid.innerHTML = '';
    searchResults.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Exportar funciones para uso global
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;
window.showProductDetail = showProductDetail;
window.toggleAuth = toggleAuth;
window.logout = logout;

// Inicializar categoría activa por defecto
function initializeActiveCategory() {
    const categoryCards = document.querySelectorAll('.category-card');
    const allCategoryCard = document.querySelector('.category-card[data-category="all"]');
    
    if (allCategoryCard) {
        allCategoryCard.classList.add('active');
    }
}

// Funciones de autenticación
function toggleAuth() {
    authModal.classList.toggle('active');
}

function switchAuthTab(e) {
    e.preventDefault();
    const tab = e.target.getAttribute('data-tab');
    
    // Actualizar tabs activos
    authTabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    
    // Mostrar formulario correspondiente
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => form.classList.remove('active'));
    
    if (tab === 'login') {
        document.getElementById('login-form').classList.add('active');
        document.getElementById('auth-title').textContent = 'Iniciar Sesión';
    } else {
        document.getElementById('register-form').classList.add('active');
        document.getElementById('auth-title').textContent = 'Registrarse';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simular validación (en un proyecto real, esto sería una API)
    const users = JSON.parse(localStorage.getItem('happypaws-users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        saveUserToStorage();
        updateUserDisplay();
        toggleAuth();
        // Limpiar formulario
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
        showNotification('¡Bienvenido de vuelta, ' + user.name + '!', 'success');
    } else {
        showNotification('Email o contraseña incorrectos', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    if (password !== confirm) {
        showNotification('Las contraseñas no coinciden', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }
    
    // Simular registro (en un proyecto real, esto sería una API)
    const users = JSON.parse(localStorage.getItem('happypaws-users') || '[]');
    
    if (users.find(u => u.email === email)) {
        showNotification('Este email ya está registrado', 'error');
        return;
    }
    
    const newUser = { name, email, password, id: Date.now() };
    users.push(newUser);
    localStorage.setItem('happypaws-users', JSON.stringify(users));
    
    currentUser = newUser;
    saveUserToStorage();
    updateUserDisplay();
    toggleAuth();
    
    // Limpiar formulario
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm').value = '';
    
    showNotification('¡Registro exitoso! Bienvenido a Happy Paws', 'success');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('happypaws-current-user');
    updateUserDisplay();
    showNotification('Sesión cerrada exitosamente', 'info');
}

function saveUserToStorage() {
    if (currentUser) {
        localStorage.setItem('happypaws-current-user', JSON.stringify(currentUser));
    }
}

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('happypaws-current-user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function updateUserDisplay() {
    if (currentUser) {
        // Usuario logueado
        loginBtn.innerHTML = `
            <i class="fas fa-user"></i>
            <span>${currentUser.name}</span>
        `;
        // Cambiar el comportamiento del botón para cerrar sesión
        loginBtn.removeEventListener('click', toggleAuth);
        loginBtn.addEventListener('click', logout);
    } else {
        // Usuario no logueado
        loginBtn.innerHTML = `
            <i class="fas fa-user"></i>
            <span>Iniciar Sesión</span>
        `;
        // Cambiar el comportamiento del botón para abrir modal de login
        loginBtn.removeEventListener('click', logout);
        loginBtn.addEventListener('click', toggleAuth);
    }
}

// Funciones de búsqueda
function performBasicSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        loadProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );
    
    displayFilteredProducts(filteredProducts, `Resultados para: "${query}"`);
}

function performAdvancedSearch() {
    const category = categoryFilter.value;
    const minPrice = parseInt(priceMin.value) || 0;
    const maxPrice = parseInt(priceMax.value) || Infinity;
    const stock = stockFilter.value;
    
    let filteredProducts = products.filter(product => {
        // Filtro por categoría
        if (category && product.category !== category) return false;
        
        // Filtro por precio
        if (product.price < minPrice || product.price > maxPrice) return false;
        
        // Filtro por stock
        if (stock === 'available' && product.stock <= 0) return false;
        if (stock === 'low' && product.stock > 10) return false;
        
        return true;
    });
    
    const filters = [];
    if (category) filters.push(`Categoría: ${category}`);
    if (minPrice > 0) filters.push(`Precio mínimo: $${minPrice.toLocaleString('es-CO')}`);
    if (maxPrice < Infinity) filters.push(`Precio máximo: $${maxPrice.toLocaleString('es-CO')}`);
    if (stock) filters.push(`Stock: ${stock === 'available' ? 'En stock' : 'Stock bajo'}`);
    
    const filterText = filters.length > 0 ? `Filtros: ${filters.join(', ')}` : 'Todos los productos';
    displayFilteredProducts(filteredProducts, filterText);
}

function clearFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    priceMin.value = '';
    priceMax.value = '';
    stockFilter.value = '';
    loadProducts();
}

function displayFilteredProducts(filteredProducts, title) {
    const sectionTitle = document.querySelector('.products .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = title;
    }
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>No se encontraron productos</h3>
                <p>Intenta con otros criterios de búsqueda</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Mostrar detalle del producto
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'product-detail-modal';
    modal.innerHTML = `
        <div class="product-detail-content">
            <div class="product-detail-header">
                <h2>${product.name}</h2>
                <button class="close-detail" onclick="this.closest('.product-detail-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="product-detail-body">
                <div class="product-detail-image">
                    <span>${product.image}</span>
                </div>
                <div class="product-detail-info">
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-specs">
                        <div class="spec-item">
                            <strong>Marca:</strong> ${product.brand}
                        </div>
                        <div class="spec-item">
                            <strong>Categoría:</strong> ${product.category}
                        </div>
                        <div class="spec-item">
                            <strong>Stock:</strong> ${product.stock} unidades
                        </div>
                        ${product.weight ? `<div class="spec-item"><strong>Peso:</strong> ${product.weight}</div>` : ''}
                        ${product.size ? `<div class="spec-item"><strong>Tamaño:</strong> ${product.size}</div>` : ''}
                        ${product.material ? `<div class="spec-item"><strong>Material:</strong> ${product.material}</div>` : ''}
                        ${product.age ? `<div class="spec-item"><strong>Edad:</strong> ${product.age}</div>` : ''}
                    </div>
                    <div class="product-detail-features">
                        <h4>Características:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-detail-price">
                        <span class="price">$${product.price.toLocaleString('es-CO')} COP</span>
                    </div>
                    <button class="btn btn-primary add-to-cart-detail" onclick="addToCart(${product.id}); this.closest('.product-detail-modal').remove();" ${product.stock <= 0 ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i> 
                        ${product.stock <= 0 ? 'Agotado' : 'Agregar al Carrito'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Inicializar usuarios de prueba
function initializeTestUsers() {
    const existingUsers = localStorage.getItem('happypaws-users');
    if (!existingUsers) {
        const testUsers = [
            {
                id: 1,
                name: "Juan Pérez",
                email: "juan@test.com",
                password: "123456"
            },
            {
                id: 2,
                name: "María García",
                email: "maria@test.com",
                password: "123456"
            },
            {
                id: 3,
                name: "Carlos López",
                email: "carlos@test.com",
                password: "123456"
            }
        ];
        localStorage.setItem('happypaws-users', JSON.stringify(testUsers));
        
        // Mostrar información de usuarios de prueba en consola
        console.log('🔐 Usuarios de prueba creados:');
        testUsers.forEach(user => {
            console.log(`📧 Email: ${user.email} | 🔑 Contraseña: ${user.password} | 👤 Nombre: ${user.name}`);
        });
        console.log('💡 Puedes usar cualquiera de estos usuarios para probar el sistema de login');
    }
}

// Función para debugging - mostrar estado del usuario
function showUserStatus() {
    console.log('🔍 Estado actual del usuario:');
    if (currentUser) {
        console.log(`✅ Usuario logueado: ${currentUser.name} (${currentUser.email})`);
    } else {
        console.log('❌ No hay usuario logueado');
    }
    
    const users = JSON.parse(localStorage.getItem('happypaws-users') || '[]');
    console.log(`📊 Total de usuarios registrados: ${users.length}`);
}

// Agregar función al objeto window para debugging
window.showUserStatus = showUserStatus; 