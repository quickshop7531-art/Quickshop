// =================== PRODUCT DATA ===================
const products = [
    { id: 1, name: "Premium Wireless Headphones", description: "Noise-cancelling wireless headphones with premium sound quality and 35-hour battery life.", price: 999, rating: 4.7, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Smart Watch Series 8", description: "Latest smartwatch with advanced health monitoring and always-on retina display.", price: 2999, rating: 4.8, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Premium Leather Backpack", description: "Genuine leather backpack with multiple compartments and water-resistant design.", price: 599, rating: 4.5, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Sony Alpha Camera", description: "Professional mirrorless camera with 4K video and 24.2MP sensor.", price: 8999, rating: 4.9, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Fitness Tracker Pro", description: "Advanced fitness tracker with GPS, heart rate monitoring, and sleep tracking.", price: 999, rating: 4.6, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Portable Bluetooth Speaker", description: "Waterproof speaker with powerful bass and 20-hour battery life.", price: 499, rating: 4.4, image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4e91d6eb/1_JBL_FLIP6_HERO_BLACK_29391_x2.png?sw=1605&sh=1605" },
    { id: 7, name: "iPhone 14 Pro", description: "Latest iPhone with dynamic island and pro camera system.", price: 12999, rating: 4.9, image: "data:image/jpeg;base64,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" },
    { id: 8, name: "MacBook Air M2", description: "Ultra-thin laptop with M2 chip and 18-hour battery life.", price: 14999, rating: 4.8, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "Samsung Galaxy Tab S8", description: "Premium Android tablet with S Pen and 120Hz display.", price: 5499, rating: 4.7, image: "https://m.media-amazon.com/images/I/81Vs371KLML._SX522_.jpg" },
    { id: 10, name: "Nike Air Max 270", description: "Comfortable running shoes with Air Max cushioning.", price: 1199, rating: 4.6, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 11, name: "Ray-Ban Aviator Sunglasses", description: "Classic aviator sunglasses with UV protection.", price: 899, rating: 4.7, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 12, name: "KitchenAid Stand Mixer", description: "Professional stand mixer with 10-speed settings.", price: 3499, rating: 4.9, image: "data:image/jpeg;base64,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" }
];

// =================== RAZORPAY CONFIG ===================
const RAZORPAY_KEY = "rzp_test_SmOFnWICiUg85x";

// =================== GLOBAL STATE ===================
let user = null;
let cart = [];
let purchases = [];
let generatedOTP = null;
let sessionTimer = null;
let sessionWarningTimer = null;
let sessionExpiryTime = null;
let sessionCheckInterval = null;

// Cookie Names
const COOKIE_NAMES = {
    CONSENT: 'quickshop_cookie_consent',
    USER_SESSION: 'quickshop_user_session',
    CART: 'quickshop_cart',
    PURCHASES: 'quickshop_purchases'
};

const SESSION_TIMEOUT_MINUTES = 30;
const SESSION_WARNING_MINUTES = 5;
const REMEMBER_ME_DAYS = 7;

// DOM Elements
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');
const cartPage = document.getElementById('cart-page');
const paymentPage = document.getElementById('payment-page');
const purchasesPage = document.getElementById('purchases-page');
const loggedInUserSpan = document.getElementById('loggedInUser');
const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.getElementById('cartCount');
const navCartCount = document.getElementById('navCartCount');
const cartActions = document.getElementById('cartActions');
const purchasesList = document.getElementById('purchasesList');
const sendOtpBtn = document.getElementById('send-otp-btn');
const sendOtpText = document.getElementById('send-otp-text');
const otpSpinner = document.getElementById('otp-spinner');
const loginBtn = document.getElementById('login-btn');
const otpField = document.getElementById('otp-field');
const otpInput = document.getElementById('otp');
const otpDisplay = document.getElementById('otp-display');
const generatedOtpSpan = document.getElementById('generated-otp');
const paymentTotalElement = document.getElementById('paymentTotal');
const orderSummaryItems = document.getElementById('orderSummaryItems');
const paymentSuccess = document.getElementById('payment-success');
const orderNumberElement = document.getElementById('order-number');
const trackingNumberElement = document.getElementById('tracking-number');

// =================== HELPER FUNCTIONS ===================
function formatINR(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// =================== PASSWORD VALIDATION ===================
function checkPasswordStrength(password) {
    let score = 0;
    let feedback = [];
    
    if (password.length === 0) {
        return { score: 0, strength: 'none', feedback: 'Enter a password' };
    }
    
    // Length check
    if (password.length >= 8) {
        score++;
    } else {
        feedback.push('• At least 8 characters');
    }
    
    // Lowercase check
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push('• One lowercase letter');
    }
    
    // Uppercase check
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push('• One uppercase letter');
    }
    
    // Number check
    if (/[0-9]/.test(password)) {
        score++;
    } else {
        feedback.push('• One number');
    }
    
    // Special character check
    if (/[$@$!%*#?&]/.test(password)) {
        score++;
    } else {
        feedback.push('• One special character ($@$!%*#?&)');
    }
    
    let strength = '';
    let colorClass = '';
    
    if (score <= 2) {
        strength = 'weak';
        colorClass = 'weak';
    } else if (score <= 3) {
        strength = 'medium';
        colorClass = 'medium';
    } else if (score <= 4) {
        strength = 'strong';
        colorClass = 'strong';
    } else {
        strength = 'very-strong';
        colorClass = 'very-strong';
    }
    
    return {
        score: score,
        strength: strength,
        colorClass: colorClass,
        feedback: feedback,
        isValid: score >= 4
    };
}

function updatePasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
    const passwordHint = document.getElementById('passwordHint');
    
    if (!passwordInput || !strengthBar || !passwordHint) return;
    
    const password = passwordInput.value;
    const result = checkPasswordStrength(password);
    
    // Update strength bar
    strengthBar.className = 'strength-bar ' + result.colorClass;
    
    // Update hint text and color
    if (password.length === 0) {
        passwordHint.innerHTML = 'Use 8+ characters with uppercase, lowercase, number & special character';
        passwordHint.className = 'password-hint';
    } else if (!result.isValid) {
        passwordHint.innerHTML = '❌ Password needs: <br>' + result.feedback.join('<br>');
        passwordHint.className = 'password-hint ' + result.colorClass;
    } else {
        passwordHint.innerHTML = '✅ Strong password!';
        passwordHint.className = 'password-hint ' + result.colorClass;
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    notification.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

function checkCookieConsent() {
    return getCookie(COOKIE_NAMES.CONSENT) === 'accepted';
}

function acceptCookies() {
    setCookie(COOKIE_NAMES.CONSENT, 'accepted', 365);
    document.getElementById('cookieConsent').style.display = 'none';
    showNotification('Cookie preferences saved!');
    if (user) saveUserSession(user, true);
    saveCart();
    if (purchases.length) setCookie(COOKIE_NAMES.PURCHASES, JSON.stringify(purchases), 365);
}

function declineCookies() {
    setCookie(COOKIE_NAMES.CONSENT, 'declined', 365);
    document.getElementById('cookieConsent').style.display = 'none';
    deleteCookie(COOKIE_NAMES.USER_SESSION);
    deleteCookie(COOKIE_NAMES.CART);
    deleteCookie(COOKIE_NAMES.PURCHASES);
    showNotification('Cookie preferences saved.', 'info');
}

function showCookiePolicy() {
    alert("🍪 Cookie Policy\n\nWe use cookies to:\n• Remember your login session\n• Save your shopping cart\n• Store your preferences\n\nYou can manage cookies in your browser settings.");
}

// =================== SESSION MANAGEMENT ===================
function saveUserSession(userData, rememberMe = false) {
    user = userData;
    const expiryTime = rememberMe ? Date.now() + (REMEMBER_ME_DAYS * 24 * 60 * 60 * 1000) : Date.now() + (SESSION_TIMEOUT_MINUTES * 60 * 1000);
    const sessionData = { user: userData, expiry: expiryTime, created: Date.now() };
    localStorage.setItem('quickShopUser', JSON.stringify(sessionData));
    if (checkCookieConsent()) setCookie(COOKIE_NAMES.USER_SESSION, JSON.stringify(sessionData), rememberMe ? REMEMBER_ME_DAYS : null);
    loggedInUserSpan.textContent = userData.name;
    updateNavigation();
    startSessionTimer(expiryTime);
}

function startSessionTimer(expiryTime) {
    sessionExpiryTime = expiryTime;
    if (sessionTimer) clearTimeout(sessionTimer);
    if (sessionWarningTimer) clearTimeout(sessionWarningTimer);
    if (sessionCheckInterval) clearInterval(sessionCheckInterval);
    const timeRemaining = expiryTime - Date.now();
    if (timeRemaining <= 0) { logout(); return; }
    const warningTime = timeRemaining - (SESSION_WARNING_MINUTES * 60 * 1000);
    if (warningTime > 0) sessionWarningTimer = setTimeout(showSessionWarning, warningTime);
    else showSessionWarning();
    sessionTimer = setTimeout(logout, timeRemaining);
    sessionCheckInterval = setInterval(() => { if (user && getCookie(COOKIE_NAMES.USER_SESSION) && JSON.parse(getCookie(COOKIE_NAMES.USER_SESSION)).expiry <= Date.now()) logout(); }, 60000);
}

function showSessionWarning() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('sessionTimeout').style.display = 'block';
    let timeLeft = Math.floor((sessionExpiryTime - Date.now()) / 1000);
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) { clearInterval(timerInterval); logout(); return; }
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('sessionTimer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
    }, 1000);
}

function extendSession() {
    if (!user) return;
    const newExpiryTime = Date.now() + (SESSION_TIMEOUT_MINUTES * 60 * 1000);
    const sessionData = { user: user, expiry: newExpiryTime, created: Date.now() };
    localStorage.setItem('quickShopUser', JSON.stringify(sessionData));
    if (checkCookieConsent()) setCookie(COOKIE_NAMES.USER_SESSION, JSON.stringify(sessionData));
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('sessionTimeout').style.display = 'none';
    startSessionTimer(newExpiryTime);
    showNotification('Session extended!');
}

function logout() {
    user = null;
    localStorage.removeItem('quickShopUser');
    deleteCookie(COOKIE_NAMES.USER_SESSION);
    if (sessionTimer) clearTimeout(sessionTimer);
    if (sessionWarningTimer) clearTimeout(sessionWarningTimer);
    if (sessionCheckInterval) clearInterval(sessionCheckInterval);
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('sessionTimeout').style.display = 'none';
    loggedInUserSpan.textContent = 'Guest';
    updateNavigation();
    showPage('login');
    showNotification('Logged out successfully.', 'info');
}

function updateNavigation() {
    const navLogin = document.getElementById('nav-login');
    const navLogout = document.getElementById('nav-logout');
    if (user) {
        if (navLogin) navLogin.style.display = 'none';
        if (navLogout) navLogout.style.display = 'block';
    } else {
        if (navLogin) navLogin.style.display = 'block';
        if (navLogout) navLogout.style.display = 'none';
    }
}

// =================== PAGE MANAGEMENT ===================
function showPage(pageId) {
    const protectedPages = ['dashboard', 'cart', 'payment', 'purchases'];
    if (protectedPages.includes(pageId) && !user) {
        showNotification('Please login to access this page.', 'error');
        pageId = 'login';
    }
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`${pageId}-page`).classList.add('active');
    if (pageId === 'dashboard') renderProducts();
    else if (pageId === 'cart') renderCart();
    else if (pageId === 'payment') renderPaymentPage();
    else if (pageId === 'purchases') renderPurchases();
}

// =================== PRODUCTS ===================
function renderProducts() {
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;
        const starsHtml = Array(5).fill().map((_, i) => i < Math.floor(product.rating) ? '<i class="fas fa-star"></i>' : (i === Math.floor(product.rating) && product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : '<i class="far fa-star"></i>')).join('');
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">${starsHtml} <span>(${product.rating})</span></div>
                <div class="product-price">${formatINR(product.price)}</div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i> ${quantityInCart > 0 ? `In Cart (${quantityInCart})` : 'Add to Cart'}</button>
                    <button class="btn-buy" onclick="buyNow(${product.id})">Buy Now</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

function searchProducts() {
    const term = document.getElementById('searchProducts').value.toLowerCase();
    if (!term) return renderProducts();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
    productsContainer.innerHTML = '';
    if (!filtered.length) {
        productsContainer.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><h3>No products found</h3></div>';
        return;
    }
    filtered.forEach(p => {
        const cartItem = cart.find(item => item.id === p.id);
        const starsHtml = Array(5).fill().map((_, i) => i < Math.floor(p.rating) ? '<i class="fas fa-star"></i>' : (i === Math.floor(p.rating) && p.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : '<i class="far fa-star"></i>')).join('');
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<div class="product-img"><img src="${p.image}" alt="${p.name}"></div><div class="product-content"><h3 class="product-title">${p.name}</h3><p class="product-description">${p.description}</p><div class="product-rating">${starsHtml}</div><div class="product-price">${formatINR(p.price)}</div><div class="product-actions"><button class="btn-cart" onclick="addToCart(${p.id})"><i class="fas fa-shopping-cart"></i> ${cartItem ? `In Cart (${cartItem.quantity})` : 'Add to Cart'}</button><button class="btn-buy" onclick="buyNow(${p.id})">Buy Now</button></div></div>`;
        productsContainer.appendChild(card);
    });
}

// =================== CART ===================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity++;
    else cart.push({ id: productId, quantity: 1 });
    updateCartCount();
    saveCart();
    showNotification(`${product.name} added to cart!`);
    if (dashboardPage.classList.contains('active')) renderProducts();
    if (cartPage.classList.contains('active')) renderCart();
}

function buyNow(productId) {
    addToCart(productId);
    proceedToPayment();
}

function updateQuantity(productId, newQty) {
    if (newQty < 1) { removeFromCart(productId); return; }
    const item = cart.find(i => i.id === productId);
    if (item) { item.quantity = newQty; updateCartCount(); saveCart(); renderCart(); if (dashboardPage.classList.contains('active')) renderProducts(); }
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartCount();
    saveCart();
    renderCart();
    if (dashboardPage.classList.contains('active')) renderProducts();
    showNotification('Item removed from cart', 'info');
}

function clearCart() {
    if (!cart.length) return;
    if (confirm('Clear entire cart?')) { cart = []; updateCartCount(); saveCart(); renderCart(); if (dashboardPage.classList.contains('active')) renderProducts(); showNotification('Cart cleared', 'info'); }
}

function updateCartCount() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    if (cartCountElement) cartCountElement.textContent = count;
    if (navCartCount) navCartCount.textContent = count;
}

function saveCart() {
    localStorage.setItem('quickShopCart', JSON.stringify(cart));
    if (checkCookieConsent()) setCookie(COOKIE_NAMES.CART, JSON.stringify(cart), 30);
}

function renderCart() {
    if (!cartItemsContainer) return;
    if (!cart.length) {
        cartItemsContainer.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart fa-4x"></i><h3>Your cart is empty</h3><button class="btn" onclick="showPage('dashboard')" style="width:auto;margin-top:20px;">Continue Shopping</button></div>`;
        if (cartActions) cartActions.style.display = 'none';
        return;
    }
    let total = 0, itemsHtml = '';
    cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (p) {
            const itemTotal = p.price * item.quantity;
            total += itemTotal;
            itemsHtml += `<div class="cart-item"><div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div><div class="cart-item-details"><h3 class="cart-item-title">${p.name}</h3><div class="cart-item-price">${formatINR(p.price)} each</div></div><div class="cart-item-actions"><div class="quantity-control"><button class="quantity-btn" onclick="updateQuantity(${p.id}, ${item.quantity - 1})">-</button><span class="quantity">${item.quantity}</span><button class="quantity-btn" onclick="updateQuantity(${p.id}, ${item.quantity + 1})">+</button></div><div class="item-total">${formatINR(itemTotal)}</div><button class="btn-remove" onclick="removeFromCart(${p.id})"><i class="fas fa-trash-alt"></i> Remove</button></div></div>`;
        }
    });
    const shipping = total > 10000 ? 0 : 499;
    const tax = Math.round(total * 0.18);
    const grandTotal = total + shipping + tax;
    itemsHtml += `<div class="cart-summary"><div class="summary-row"><span>Subtotal:</span><span>${formatINR(total)}</span></div><div class="summary-row"><span>Shipping:</span><span>${shipping === 0 ? 'Free' : formatINR(shipping)}</span></div><div class="summary-row"><span>GST (18%):</span><span>${formatINR(tax)}</span></div><div class="summary-row total"><span>Total:</span><span>${formatINR(grandTotal)}</span></div></div>`;
    cartItemsContainer.innerHTML = itemsHtml;
    if (cartTotalElement) cartTotalElement.textContent = `Total: ${formatINR(grandTotal)}`;
    if (cartActions) cartActions.style.display = 'flex';
}

function proceedToPayment() {
    if (!cart.length) { showNotification('Cart is empty', 'error'); return; }
    if (!user) { showPage('login'); showNotification('Please login first', 'error'); return; }
    showPage('payment');
}

// =================== PAYMENT (RAZORPAY) ===================
function renderPaymentPage() {
    if (!cart.length) { showPage('cart'); return; }
    let total = 0, orderHtml = '';
    cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (p) {
            const itemTotal = p.price * item.quantity;
            total += itemTotal;
            orderHtml += `<div class="order-summary-item"><span>${p.name} x${item.quantity}</span><span>${formatINR(itemTotal)}</span></div>`;
        }
    });
    const shipping = total > 10000 ? 0 : 499;
    const tax = Math.round(total * 0.18);
    const grandTotal = total + shipping + tax;
    orderHtml += `<div class="order-summary-item"><span>Shipping</span><span>${shipping === 0 ? 'Free' : formatINR(shipping)}</span></div><div class="order-summary-item"><span>GST (18%)</span><span>${formatINR(tax)}</span></div>`;
    if (orderSummaryItems) orderSummaryItems.innerHTML = orderHtml;
    if (paymentTotalElement) paymentTotalElement.textContent = formatINR(grandTotal);
    paymentSuccess.style.display = 'none';
    const codBtn = document.getElementById('cod-btn');
    if (codBtn) codBtn.style.display = 'block';
    window.razorpayAmount = grandTotal;
}

// =================== CASH ON DELIVERY ===================
function openCOD() {
    if (!cart.length) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    if (confirm('📦 Confirm Cash on Delivery Order?\n\nYou will pay ₹' + window.razorpayAmount.toLocaleString('en-IN') + ' when the product is delivered to your address.\n\nClick OK to place your COD order.')) {
        completeCODPayment();
    }
}

function completeCODPayment() {
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `QS-TRACK-${Math.floor(100000 + Math.random() * 900000)}`;
    
    if (orderNumberElement) orderNumberElement.textContent = orderId;
    if (trackingNumberElement) trackingNumberElement.textContent = trackingId.split('-')[2];
    
    cart.forEach(item => {
        purchases.push({
            productId: item.id,
            quantity: item.quantity,
            date: new Date().toISOString(),
            orderId: orderId,
            trackingId: trackingId,
            paymentMethod: 'Cash on Delivery',
            paymentId: 'COD-' + Date.now(),
            status: 'confirmed'
        });
    });
    
    localStorage.setItem('quickShopPurchases', JSON.stringify(purchases));
    if (checkCookieConsent()) setCookie(COOKIE_NAMES.PURCHASES, JSON.stringify(purchases), 365);
    
    cart = [];
    updateCartCount();
    saveCart();
    
    document.querySelector('.order-summary').style.display = 'none';
    document.getElementById('pay-now-btn').style.display = 'none';
    document.getElementById('cod-btn').style.display = 'none';
    document.querySelector('.payment-container button.btn-secondary').style.display = 'none';
    
    const orDiv = document.querySelector('.payment-container div[style*="text-align: center"]');
    if (orDiv) orDiv.style.display = 'none';
    
    paymentSuccess.style.display = 'block';
    showNotification(`✅ COD Order placed! Order #${orderId} confirmed. Pay ₹${window.razorpayAmount.toLocaleString('en-IN')} on delivery.`);
}

function openRazorpay() {
    const amount = window.razorpayAmount;
    if (!amount || amount <= 0) { showNotification('Invalid amount', 'error'); return; }
    const options = {
        key: RAZORPAY_KEY,
        amount: Math.round(amount * 100),
        currency: "INR",
        name: "QuickShop",
        description: "Order Payment",
        image: "https://img.icons8.com/color/48/shopping-cart--v1.png",
        handler: function(response) {
            if (response.razorpay_payment_id) {
                completePayment(response.razorpay_payment_id);
            } else {
                showNotification('Payment failed', 'error');
            }
        },
        prefill: { name: user?.name || '', email: user?.email || '' },
        theme: { color: "#2575fc" }
    };
    const rzp = new Razorpay(options);
    rzp.open();
}

function completePayment(paymentId) {
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `QS-TRACK-${Math.floor(100000 + Math.random() * 900000)}`;
    if (orderNumberElement) orderNumberElement.textContent = orderId;
    if (trackingNumberElement) trackingNumberElement.textContent = trackingId.split('-')[2];
    
    cart.forEach(item => {
        purchases.push({
            productId: item.id,
            quantity: item.quantity,
            date: new Date().toISOString(),
            orderId: orderId,
            trackingId: trackingId,
            paymentMethod: 'Razorpay',
            paymentId: paymentId,
            status: 'confirmed'
        });
    });
    
    localStorage.setItem('quickShopPurchases', JSON.stringify(purchases));
    if (checkCookieConsent()) setCookie(COOKIE_NAMES.PURCHASES, JSON.stringify(purchases), 365);
    
    cart = [];
    updateCartCount();
    saveCart();
    
    document.querySelector('.order-summary').style.display = 'none';
    document.getElementById('pay-now-btn').style.display = 'none';
    const codBtnExist = document.getElementById('cod-btn');
    if (codBtnExist) codBtnExist.style.display = 'none';
    document.querySelector('.payment-container button.btn-secondary').style.display = 'none';
    paymentSuccess.style.display = 'block';
    showNotification(`✅ Payment successful! Order #${orderId} confirmed. You can track your order in Purchases.`);
}

// =================== PURCHASES WITH REALISTIC TRACKING ===================
function renderPurchases() {
    if (!purchasesList) return;
    if (!purchases.length) {
        purchasesList.innerHTML = `<div class="empty-purchases"><i class="fas fa-box-open fa-4x"></i><h3>No purchases yet</h3><button class="btn" onclick="showPage('dashboard')" style="width:auto;">Start Shopping</button></div>`;
        return;
    }
    let html = '';
    purchases.slice().reverse().forEach(p => {
        const product = products.find(pr => pr.id === p.productId);
        if (product) {
            const status = getOrderStatus(p.date);
            const statusClass = status.toLowerCase().replace(' ', '');
            const trackingDetails = getTrackingDetails(p.orderId, p.date);
            
            html += `<div class="purchase-card">
                <div class="purchase-header">
                    <span class="order-id">Order #QS-${p.orderId}</span>
                    <span>${new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div class="purchase-body">
                    <img src="${product.image}" class="purchase-img">
                    <div class="purchase-details">
                        <h3>${product.name}</h3>
                        <p>Quantity: ${p.quantity}</p>
                        <p class="purchase-price">${formatINR(product.price * p.quantity)}</p>
                        <p>Payment: ${p.paymentMethod}</p>
                        <div class="purchase-status status-${statusClass}">${status}</div>
                    </div>
                </div>
                <div class="tracking-info">
                    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                        <div><i class="fas fa-truck"></i> <strong>Courier:</strong> ${trackingDetails.courier}</div>
                        <div><i class="fas fa-barcode"></i> <strong>AWB No:</strong> ${trackingDetails.awb}</div>
                        <div><i class="fas fa-calendar-alt"></i> <strong>Est. Delivery:</strong> ${trackingDetails.estimatedDelivery}</div>
                    </div>
                    <div style="margin-top: 12px;">
                        <i class="fas fa-map-marker-alt"></i> <strong>Current Location:</strong> ${trackingDetails.location}
                    </div>
                    <div style="margin-top: 12px;">
                        <i class="fas fa-clock"></i> <strong>Last Updated:</strong> ${trackingDetails.lastUpdated}
                    </div>
                    <div style="margin-top: 15px;">
                        <button class="btn-track" onclick="trackOrder('${p.trackingId}')"><i class="fas fa-map-marker-alt"></i> Track Order</button>
                    </div>
                </div>
            </div>`;
        }
    });
    purchasesList.innerHTML = html;
}

function getOrderStatus(purchaseDate) {
    const daysSince = Math.floor((Date.now() - new Date(purchaseDate)) / (1000 * 60 * 60 * 24));
    
    if (daysSince >= 7) return "Delivered";
    if (daysSince >= 5) return "Out for Delivery";
    if (daysSince >= 3) return "Shipped";
    if (daysSince >= 1) return "Processing";
    return "Confirmed";
}

function getTrackingDetails(orderId, purchaseDate) {
    const couriers = ['BlueDart', 'Delhivery', 'DTDC', 'Amazon Logistics', 'Ekart', 'Xpressbees'];
    const locations = [
        'Mumbai Sortation Center',
        'Delhi Logistics Hub', 
        'Bangalore Fulfillment Center',
        'Chennai Distribution Point',
        'Kolkata Warehouse',
        'Hyderabad Processing Center'
    ];
    
    const daysSince = Math.floor((Date.now() - new Date(purchaseDate)) / (1000 * 60 * 60 * 24));
    const courierIndex = orderId % couriers.length;
    const locationIndex = (orderId + daysSince) % locations.length;
    
    let location = locations[locationIndex];
    let lastUpdated = '';
    
    if (daysSince >= 7) {
        location = 'Delivered to your address';
        lastUpdated = 'Today, 10:30 AM';
    } else if (daysSince >= 5) {
        location = 'Out for delivery from local hub';
        lastUpdated = 'Today, 8:00 AM';
    } else if (daysSince >= 3) {
        location = locations[locationIndex] + ' - In Transit';
        lastUpdated = 'Yesterday, 6:00 PM';
    } else if (daysSince >= 1) {
        location = 'Order processed at ' + locations[locationIndex];
        lastUpdated = 'Today, 2:00 AM';
    } else {
        location = 'Awaiting pickup by courier';
        lastUpdated = 'Just now';
    }
    
    const estimatedDays = 7 - daysSince;
    const estDate = new Date();
    estDate.setDate(estDate.getDate() + estimatedDays);
    
    return {
        courier: couriers[courierIndex],
        awb: 'QS' + orderId + Math.floor(Math.random() * 10000),
        location: location,
        lastUpdated: lastUpdated,
        estimatedDelivery: estDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };
}

function trackOrder(trackingId) {
    const order = purchases.find(p => p.trackingId === trackingId);
    if (order) {
        const daysSince = Math.floor((Date.now() - new Date(order.date)) / (1000 * 60 * 60 * 24));
        let message = '';
        
        if (daysSince >= 7) {
            message = `✅ Order ${trackingId} has been DELIVERED! Thank you for shopping with us.`;
        } else if (daysSince >= 5) {
            message = `🚚 Order ${trackingId} is OUT FOR DELIVERY today! Please keep your phone handy.`;
        } else if (daysSince >= 3) {
            message = `📦 Order ${trackingId} has been SHIPPED! Track your package at our courier partner.`;
        } else if (daysSince >= 1) {
            message = `⚙️ Order ${trackingId} is being PROCESSED. You'll receive tracking updates soon.`;
        } else {
            message = `✅ Order ${trackingId} has been CONFIRMED! We'll notify you once it ships.`;
        }
        
        showNotification(message, 'info');
    } else {
        showNotification(`Tracking ID ${trackingId} not found. Please check and try again.`, 'error');
    }
}

function generateTrackingId() {
    return 'QS-TRACK-' + Math.floor(100000 + Math.random() * 900000);
}

// =================== OTP LOGIN ===================
function generateOTP() { return Math.floor(100000 + Math.random() * 900000).toString(); }

async function sendOTPviaEmail(email, name, otp) {
    try {
        const response = await emailjs.send('service_zzd14ki', 'template_x48w6vl', { to_email: email, to_name: name, otp_code: otp });
        return response.status === 200;
    } catch (error) { console.error('EmailJS error:', error); return false; }
}

if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', async function() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // ===== EMAIL VALIDATION =====
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address (e.g., name@example.com)', 'error');
            return;
        }
        
        if (email.includes(' ')) {
            showNotification('Email cannot contain spaces', 'error');
            return;
        }
        // ===== END EMAIL VALIDATION =====
        
        if (!name || !email || !mobile || !password) { 
            showNotification('Please fill all fields', 'error'); 
            return; 
        }
        
        if (!/^\d{10}$/.test(mobile)) { 
            showNotification('Enter valid 10-digit mobile', 'error'); 
            return; 
        }
        
        const passwordValidation = checkPasswordStrength(password);
        if (!passwordValidation.isValid) {
            showNotification('Password is weak! ' + passwordValidation.feedback.join(', '), 'error');
            return;
        }
        
        sendOtpText.style.display = 'none';
        otpSpinner.style.display = 'block';
        sendOtpBtn.disabled = true;
        generatedOTP = generateOTP();
        const emailSent = await sendOTPviaEmail(email, name, generatedOTP);
        otpField.style.display = 'block';
        loginBtn.style.display = 'block';
        sendOtpBtn.style.display = 'none';
        showNotification(emailSent ? `OTP sent to ${email}` : 'Demo Mode: Using test OTP', emailSent ? 'success' : 'info');
        sendOtpText.style.display = 'block';
        otpSpinner.style.display = 'none';
        sendOtpBtn.disabled = false;
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        if (otpInput.value === generatedOTP) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const rememberMe = document.getElementById('rememberMe').checked;
            saveUserSession({ name: name, email: email, loginTime: new Date().toISOString() }, rememberMe);
            showPage('dashboard');
            showNotification(`Welcome ${name}!`);
            generatedOTP = null;
            otpInput.value = '';
            otpField.style.display = 'none';
            loginBtn.style.display = 'none';
            sendOtpBtn.style.display = 'block';
            otpDisplay.style.display = 'none';
        } else {
            showNotification('Invalid OTP', 'error');
        }
    });
}

// =================== CHATBOT ===================
function toggleChatbot() {
    const container = document.getElementById('chatbotContainer');
    if (container) container.classList.toggle('active');
}

function handleChatbotKeypress(event) { if (event.key === 'Enter') sendChatbotMessage(); }

function sendChatbotMessage() {
    const input = document.getElementById('chatbotInput');
    if (!input) return;
    const msg = input.value.trim();
    if (!msg) return;
    addChatbotMessage(msg, 'user');
    input.value = '';
    showChatbotTyping(true);
    setTimeout(() => {
        showChatbotTyping(false);
        const response = getChatbotResponse(msg);
        addChatbotMessage(response, 'bot');
    }, 800);
}

function addChatbotMessage(message, sender) {
    const container = document.getElementById('chatbotMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `message ${sender}-message`;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    div.innerHTML = `<div class="message-content"><p>${message.replace(/\n/g, '<br>')}</p></div><span class="message-time">${time}</span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showChatbotTyping(show) {
    const typing = document.getElementById('chatbotTyping');
    if (typing) typing.style.display = show ? 'flex' : 'none';
}

function getChatbotResponse(message) {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.match(/\b(hi|hello|hey|namaste)\b/)) return "Hello! 👋 Welcome to QuickShop. How can I help you today?";
    if (lowerMsg.match(/\b(product|item|shop|buy)\b/)) {
        if (lowerMsg.includes('headphone') || lowerMsg.includes('earphone')) return "We have Premium Wireless Headphones for ₹9,999. They have noise cancellation and 35-hour battery life!";
        if (lowerMsg.includes('watch') || lowerMsg.includes('smartwatch')) return "Smart Watch Series 8 is available for ₹29,999 with health monitoring features.";
        if (lowerMsg.includes('camera')) return "Sony Alpha Camera is ₹89,999 - perfect for professional photography!";
        if (lowerMsg.includes('iphone')) return "iPhone 14 Pro is ₹1,29,999 with pro camera system and dynamic island.";
        if (lowerMsg.includes('macbook') || lowerMsg.includes('laptop')) return "MacBook Air M2 is ₹1,14,999 with ultra-thin design and 18-hour battery.";
        return "We have amazing products! 🛍️\n• Headphones (₹999)\n• Smart Watch (₹2,999)\n• Camera (₹8,999)\n• iPhone (₹12,999)\n• MacBook (₹14,999)\n• And many more! Which category interests you?";
    }
    if (lowerMsg.match(/\b(price|cost|rate)\b/)) {
        const productMatch = products.find(p => lowerMsg.includes(p.name.toLowerCase()) || lowerMsg.includes(p.name.toLowerCase().split(' ')[0]));
        if (productMatch) return `${productMatch.name} costs ${formatINR(productMatch.price)}. Want to add it to your cart?`;
        return "Here are our product prices:\n• Headphones: ₹9,999\n• Smart Watch: ₹29,999\n• Camera: ₹89,999\n• iPhone: ₹1,29,999\n• MacBook: ₹1,14,999\n• Backpack: ₹5,999\n• Speaker: ₹4,999\nWhich one interests you?";
    }
    if (lowerMsg.match(/\b(track|order|delivery)\b/)) return "To track your order, go to the Purchases page in your account. You'll find all your orders with tracking IDs there.";
    if (lowerMsg.match(/\b(pay|payment|razorpay)\b/)) return "We use Razorpay for secure payments. You can pay using Credit/Debit cards, UPI, Net Banking, or Wallets. Click 'Proceed to Payment' to checkout.";
    if (lowerMsg.match(/\b(offer|discount|coupon)\b/)) return "🎉 Current Offers:\n• Free shipping on orders above ₹10,000\n• Use code 'WELCOME10' for 10% off your first order!";
    if (lowerMsg.match(/\b(return|refund)\b/)) return "We have a 30-day return policy. Items must be unused and in original packaging. Contact support to initiate a return.";
    if (lowerMsg.match(/\b(contact|support|help)\b/)) return "You can reach our support team:\n• WhatsApp: Click the green WhatsApp button\n• Email: support@quickshop.com\n• Phone: 1800-QUICKSHOP";
    if (lowerMsg.match(/\b(thank|thanks)\b/)) return "You're welcome! 😊 Is there anything else I can help you with?";
    if (lowerMsg.match(/\b(bye|goodbye)\b/)) return "Goodbye! 👋 Thanks for chatting. Come back anytime you need help!";
    return "I'm your QuickShop assistant! I can help you with:\n• Product information and prices\n• Order tracking\n• Payment methods\n• Offers and discounts\n• Returns and support\nWhat would you like to know?";
}

function quickChatbotAction(action) {
    let response = '';
    if (action === 'products') response = getChatbotResponse('products');
    else if (action === 'prices') response = getChatbotResponse('prices');
    else if (action === 'help') response = getChatbotResponse('help');
    else if (action === 'offers') response = getChatbotResponse('offers');
    addChatbotMessage(response, 'bot');
}

// =================== INITIALIZATION ===================
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("wWjmSwS3kLIqXLMzo");
    // Password strength checker
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
    passwordInput.addEventListener('keyup', updatePasswordStrength);
    passwordInput.addEventListener('input', updatePasswordStrength);
    }
    document.getElementById('cookieConsent').style.display = getCookie(COOKIE_NAMES.CONSENT) ? 'none' : 'block';
    const savedUser = localStorage.getItem('quickShopUser');
    if (savedUser) {
        try {
            const data = JSON.parse(savedUser);
            if (data.expiry > Date.now()) {
                user = data.user;
                loggedInUserSpan.textContent = user.name;
                updateNavigation();
                startSessionTimer(data.expiry);
                showPage('dashboard');
            }
        } catch(e) {}
    }
    const savedCart = localStorage.getItem('quickShopCart');
    if (savedCart) { cart = JSON.parse(savedCart); updateCartCount(); }
    const savedPurchases = localStorage.getItem('quickShopPurchases');
    if (savedPurchases) purchases = JSON.parse(savedPurchases);
    renderProducts();
    if (!user) showPage('login');
});
