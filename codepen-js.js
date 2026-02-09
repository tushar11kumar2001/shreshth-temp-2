// Product Data
        const products = [
            {
                id: 1,
                name: "Oatmeal & Honey Soothing Shampoo",
                category: "shampoo",
                price: 499,
                originalPrice: 699,
                rating: 4.8,
                reviews: 324,
                image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80",
                badge: "bestseller"
            },
            {
                id: 2,
                name: "Silk & Shine Conditioner",
                category: "conditioner",
                price: 549,
                originalPrice: 749,
                rating: 4.9,
                reviews: 256,
                image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
                badge: "new"
            },
            {
                id: 3,
                name: "Professional Slicker Brush",
                category: "tools",
                price: 799,
                originalPrice: 999,
                rating: 4.7,
                reviews: 189,
                image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80",
                badge: null
            },
            {
                id: 4,
                name: "Gentle Electric Nail Grinder",
                category: "tools",
                price: 1299,
                originalPrice: 1799,
                rating: 4.6,
                reviews: 142,
                image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
                badge: "sale"
            },
            {
                id: 5,
                name: "Ear Cleaning Solution",
                category: "care",
                price: 349,
                originalPrice: 449,
                rating: 4.8,
                reviews: 98,
                image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80",
                badge: null
            },
            {
                id: 6,
                name: "Complete Dental Care Kit",
                category: "care",
                price: 599,
                originalPrice: 799,
                rating: 4.5,
                reviews: 76,
                image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
                badge: null
            },
            {
                id: 7,
                name: "Whitening Shampoo for White Coats",
                category: "shampoo",
                price: 599,
                originalPrice: 799,
                rating: 4.7,
                reviews: 156,
                image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=400&q=80",
                badge: null
            },
            {
                id: 8,
                name: "Luxury Grooming Gift Box",
                category: "kits",
                price: 1999,
                originalPrice: 2999,
                rating: 4.9,
                reviews: 87,
                image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&q=80",
                badge: "bestseller"
            }
        ];

        // Cart State
        let cart = [];

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Hide loader after 1.5 seconds
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1500);

            // Render products
            renderProducts('all');

            // Scroll animations
            initScrollAnimations();
        });

        // Render Products
        function renderProducts(filter) {
            const grid = document.getElementById('productsGrid');
            let filteredProducts = products;

            if (filter !== 'all') {
                filteredProducts = products.filter(p => p.category === filter || 
                    (filter === 'tools' && (p.category === 'brushes' || p.category === 'nail')) ||
                    (filter === 'care' && (p.category === 'ear' || p.category === 'dental'))
                );
            }

            grid.innerHTML = filteredProducts.map(product => `
                <div class="product-card" data-category="${product.category}">
                    ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-actions">
                            <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                                <i class="fas fa-shopping-bag"></i>
                            </button>
                            <button class="action-btn" title="Quick View">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="action-btn" title="Add to Wishlist">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-rating">
                            <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">
                            <span class="current-price">₹${product.price}</span>
                            <span class="original-price">₹${product.originalPrice}</span>
                            <span class="discount">${Math.round((1 - product.price/product.originalPrice) * 100)}% off</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Switch Tab
        function switchTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderProducts(tab);
        }

        // Filter Products by Category
        function filterProducts(category) {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            renderProducts(category);
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
            showToast(`${product.name} added to cart!`);
        }

        // Add Bundle to Cart
        function addBundleToCart(bundleType) {
            const bundles = {
                puppy: { name: 'Puppy Starter Kit', price: 1299 },
                complete: { name: 'Complete Grooming Set', price: 2999 },
                luxury: { name: 'Luxury Spa Kit', price: 1899 }
            };

            const bundle = bundles[bundleType];
            cart.push({
                id: `bundle-${bundleType}`,
                name: bundle.name,
                price: bundle.price,
                quantity: 1,
                isBundle: true
            });

            updateCart();
            showToast(`${bundle.name} added to cart!`);
        }

        // Update Cart
        function updateCart() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartFooter = document.getElementById('cartFooter');
            const cartTotal = document.getElementById('cartTotal');

            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                cartFooter.style.display = 'none';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&q=80'}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-name">${item.name}</h4>
                            <p class="cart-item-price">₹${item.price}</p>
                            <div class="cart-item-quantity">
                                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                            </div>
                            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                `).join('');

                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                cartTotal.textContent = `₹${total.toLocaleString()}`;
                cartFooter.style.display = 'block';
            }
        }

        // Update Quantity
        function updateQuantity(itemId, change) {
            const item = cart.find(i => i.id == itemId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(itemId);
                } else {
                    updateCart();
                }
            }
        }

        // Remove from Cart
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id != itemId);
            updateCart();
        }

        // Toggle Cart
        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('active');
            document.getElementById('cartOverlay').classList.toggle('active');
        }

        // Toggle Mobile Menu
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
        }

        // Show Toast
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }

        // Checkout
        function checkout() {
            if (cart.length > 0) {
                alert('Thank you for your order! This is a demo checkout.');
                cart = [];
                updateCart();
                toggleCart();
            }
        }

        // Newsletter Subscribe
        function subscribeNewsletter(e) {
            e.preventDefault();
            showToast('Thank you for subscribing!');
            e.target.reset();
        }

        // Scroll Animations
        function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.product-card, .bundle-card, .testimonial-card, .category-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }

        // Close mobile menu when clicking a link
        document.querySelectorAll('.mobile-menu-links a').forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu();
            });
        });