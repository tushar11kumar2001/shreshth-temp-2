# CodePen Setup Guide for PawPerfect

## Quick Steps

### 1. Go to CodePen
- Visit: https://codepen.io/pen/

### 2. Copy Each Section

---

## 📋 HTML Section (Copy everything between the lines)

```html
<!-- Loader -->
<div class="loader" id="loader">
    <div class="loader-content">
        <i class="fas fa-paw paw-loader"></i>
        <p class="loader-text">PawPerfect</p>
    </div>
</div>

<!-- Announcement Bar -->
<div class="announcement-bar">
    🐾 Free shipping on orders above ₹999 | Use code: PAWSOME
</div>

<!-- Header -->
<header>
    <nav>
        <a href="#" class="logo">
            <div class="logo-icon">
                <i class="fas fa-paw"></i>
            </div>
            <span class="logo-text">Paw<span>Perfect</span></span>
        </a>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#bundles">Bundles</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#testimonials">Reviews</a></li>
        </ul>

        <div class="nav-actions">
            <button class="nav-btn"><i class="fas fa-search"></i></button>
            <button class="nav-btn"><i class="fas fa-user"></i></button>
            <button class="nav-btn" onclick="toggleCart()">
                <i class="fas fa-shopping-bag"></i>
                <span class="cart-count" id="cartCount">0</span>
            </button>
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-header">
        <a href="#" class="logo">
            <div class="logo-icon"><i class="fas fa-paw"></i></div>
            <span class="logo-text">Paw<span>Perfect</span></span>
        </a>
        <button class="close-cart" onclick="toggleMobileMenu()">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <ul class="mobile-menu-links">
        <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="#products"><i class="fas fa-box"></i> Products</a></li>
        <li><a href="#bundles"><i class="fas fa-gift"></i> Bundles</a></li>
        <li><a href="#categories"><i class="fas fa-th-large"></i> Categories</a></li>
        <li><a href="#testimonials"><i class="fas fa-star"></i> Reviews</a></li>
    </ul>
</div>

<!-- Hero Section -->
<section class="hero" id="home">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <i class="fas fa-sparkles"></i>
                Premium Pet Care Collection 2026
            </div>
            <h1 class="hero-title">
                Pamper Your <span class="highlight">Furry Friend</span> With Love
            </h1>
            <p class="hero-description">
                Discover our premium range of dog grooming essentials crafted with natural ingredients. 
                From luxurious shampoos to professional grooming tools, give your pet the care they deserve.
            </p>
            <div class="hero-buttons">
                <a href="#products" class="btn btn-primary">
                    Shop Now <i class="fas fa-arrow-right"></i>
                </a>
                <a href="#bundles" class="btn btn-secondary">
                    View Bundles
                </a>
            </div>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">50K+</span>
                    <span class="stat-label">Happy Pets</span>
                </div>
                <div class="stat">
                    <span class="stat-number">200+</span>
                    <span class="stat-label">Products</span>
                </div>
                <div class="stat">
                    <span class="stat-number">4.9</span>
                    <span class="stat-label">Rating</span>
                </div>
            </div>
        </div>
        <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80" alt="Happy dog being groomed">
            <div class="floating-card card-1">
                <div class="floating-icon"><i class="fas fa-leaf"></i></div>
                <div class="floating-text">
                    <h4>100% Natural</h4>
                    <p>Organic Ingredients</p>
                </div>
            </div>
            <div class="floating-card card-2">
                <div class="floating-icon"><i class="fas fa-award"></i></div>
                <div class="floating-text">
                    <h4>Vet Approved</h4>
                    <p>Safe for All Breeds</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Categories Section -->
<section class="categories" id="categories">
    <div class="section-header">
        <h2 class="section-title">Shop by Category</h2>
        <p class="section-subtitle">Find the perfect products for your pet's needs</p>
    </div>
    <div class="categories-grid">
        <div class="category-card" onclick="filterProducts('shampoo')">
            <div class="category-icon"><i class="fas fa-pump-soap"></i></div>
            <span class="category-name">Shampoos</span>
        </div>
        <div class="category-card" onclick="filterProducts('conditioner')">
            <div class="category-icon"><i class="fas fa-flask"></i></div>
            <span class="category-name">Conditioners</span>
        </div>
        <div class="category-card" onclick="filterProducts('brushes')">
            <div class="category-icon"><i class="fas fa-brush"></i></div>
            <span class="category-name">Brushes</span>
        </div>
        <div class="category-card" onclick="filterProducts('nail')">
            <div class="category-icon"><i class="fas fa-cut"></i></div>
            <span class="category-name">Nail Care</span>
        </div>
        <div class="category-card" onclick="filterProducts('ear')">
            <div class="category-icon"><i class="fas fa-ear-listen"></i></div>
            <span class="category-name">Ear & Eye</span>
        </div>
        <div class="category-card" onclick="filterProducts('dental')">
            <div class="category-icon"><i class="fas fa-tooth"></i></div>
            <span class="category-name">Dental Care</span>
        </div>
        <div class="category-card" onclick="filterProducts('kits')">
            <div class="category-icon"><i class="fas fa-box-open"></i></div>
            <span class="category-name">Grooming Kits</span>
        </div>
    </div>
</section>

<!-- Products Section -->
<section class="products" id="products">
    <div class="products-container">
        <div class="section-header">
            <h2 class="section-title">Best Sellers</h2>
            <p class="section-subtitle">Our most loved products by pet parents</p>
        </div>

        <div class="products-tabs">
            <button class="tab-btn active" onclick="switchTab('all')">All Products</button>
            <button class="tab-btn" onclick="switchTab('shampoo')">Shampoos</button>
            <button class="tab-btn" onclick="switchTab('tools')">Tools</button>
            <button class="tab-btn" onclick="switchTab('care')">Care</button>
        </div>

        <div class="products-grid" id="productsGrid">
            <!-- Products will be dynamically inserted here -->
        </div>
    </div>
</section>

<!-- Bundles Section -->
<section class="bundles" id="bundles">
    <div class="section-header">
        <h2 class="section-title">Grooming Bundles</h2>
        <p class="section-subtitle">Save more with our curated bundles</p>
    </div>
    <div class="bundles-grid">
        <div class="bundle-card">
            <div class="bundle-tag"><i class="fas fa-bolt"></i> Most Popular</div>
            <h3 class="bundle-name">Puppy Starter Kit</h3>
            <ul class="bundle-items">
                <li><i class="fas fa-check"></i> Gentle Puppy Shampoo (250ml)</li>
                <li><i class="fas fa-check"></i> Soft Bristle Brush</li>
                <li><i class="fas fa-check"></i> Nail Clippers</li>
                <li><i class="fas fa-check"></i> Ear Cleaning Wipes</li>
                <li><i class="fas fa-check"></i> Dental Chew Toy</li>
            </ul>
            <div class="bundle-price">
                <span class="current">₹1,299</span>
                <span class="original">₹2,499</span>
                <span class="save">SAVE 48%</span>
            </div>
            <button class="bundle-btn" onclick="addBundleToCart('puppy')">
                Add to Cart <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <div class="bundle-card">
            <div class="bundle-tag"><i class="fas fa-crown"></i> Premium</div>
            <h3 class="bundle-name">Complete Grooming Set</h3>
            <ul class="bundle-items">
                <li><i class="fas fa-check"></i> Oatmeal Shampoo (500ml)</li>
                <li><i class="fas fa-check"></i> Silk Conditioner (500ml)</li>
                <li><i class="fas fa-check"></i> Professional Slicker Brush</li>
                <li><i class="fas fa-check"></i> Electric Nail Grinder</li>
                <li><i class="fas fa-check"></i> Ear & Eye Care Kit</li>
                <li><i class="fas fa-check"></i> Dental Care Set</li>
            </ul>
            <div class="bundle-price">
                <span class="current">₹2,999</span>
                <span class="original">₹5,499</span>
                <span class="save">SAVE 45%</span>
            </div>
            <button class="bundle-btn" onclick="addBundleToCart('complete')">
                Add to Cart <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <div class="bundle-card">
            <div class="bundle-tag"><i class="fas fa-star"></i> Best Value</div>
            <h3 class="bundle-name">Luxury Spa Kit</h3>
            <ul class="bundle-items">
                <li><i class="fas fa-check"></i> Argan Oil Shampoo (500ml)</li>
                <li><i class="fas fa-check"></i> Deep Conditioner (500ml)</li>
                <li><i class="fas fa-check"></i> Deshedding Tool</li>
                <li><i class="fas fa-check"></i> Paw Balm</li>
                <li><i class="fas fa-check"></i> Cologne Spray</li>
            </ul>
            <div class="bundle-price">
                <span class="current">₹1,899</span>
                <span class="original">₹3,299</span>
                <span class="save">SAVE 42%</span>
            </div>
            <button class="bundle-btn" onclick="addBundleToCart('luxury')">
                Add to Cart <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials" id="testimonials">
    <div class="section-header">
        <h2 class="section-title">What Pet Parents Say</h2>
        <p class="section-subtitle">Real reviews from our happy customers</p>
    </div>
    <div class="testimonials-grid">
        <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <p class="testimonial-text">
                "The oatmeal shampoo has been a game-changer for my Golden Retriever's sensitive skin. 
                No more itching and his coat looks amazing! Highly recommend to all pet parents."
            </p>
            <div class="testimonial-author">
                <div class="author-avatar">R</div>
                <div class="author-info">
                    <h4>Rahul Sharma <i class="fas fa-check-circle verified"></i></h4>
                    <p>Golden Retriever Parent</p>
                </div>
            </div>
        </div>

        <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <p class="testimonial-text">
                "I've tried many grooming tools, but the slicker brush from PawPerfect is by far the best. 
                It removes loose hair effortlessly and my dog actually enjoys being brushed now!"
            </p>
            <div class="testimonial-author">
                <div class="author-avatar">P</div>
                <div class="author-info">
                    <h4>Priya Patel <i class="fas fa-check-circle verified"></i></h4>
                    <p>Labrador Parent</p>
                </div>
            </div>
        </div>

        <div class="testimonial-card">
            <i class="fas fa-quote-left quote-icon"></i>
            <p class="testimonial-text">
                "The nail grinder is so quiet and gentle. My anxious pup doesn't run away anymore during 
                nail trimming sessions. A must-have for every dog owner!"
            </p>
            <div class="testimonial-author">
                <div class="author-avatar">A</div>
                <div class="author-info">
                    <h4>Arjun Mehta <i class="fas fa-check-circle verified"></i></h4>
                    <p>Beagle Parent</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="newsletter">
    <div class="newsletter-container">
        <h2 class="newsletter-title">Join the PawPerfect Family</h2>
        <p class="newsletter-subtitle">
            Subscribe for exclusive deals, grooming tips, and new product launches
        </p>
        <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
            <input type="email" class="newsletter-input" placeholder="Enter your email" required>
            <button type="submit" class="newsletter-btn">Subscribe</button>
        </form>
    </div>
</section>

<!-- Footer -->
<footer>
    <div class="footer-container">
        <div class="footer-brand">
            <a href="#" class="logo">
                <span class="logo-text">Paw<span>Perfect</span></span>
            </a>
            <p>Premium grooming essentials for your beloved furry companions. 
               Because every pet deserves the best care.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#bundles">Bundles</a></li>
                <li><a href="#categories">Categories</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h4>Customer Care</h4>
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h4>Contact</h4>
            <ul>
                <li><a href="#"><i class="fas fa-phone"></i> +91 98765 43210</a></li>
                <li><a href="#"><i class="fas fa-envelope"></i> hello@pawperfect.com</a></li>
                <li><a href="#"><i class="fas fa-map-marker-alt"></i> Mumbai, India</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2026 PawPerfect. All rights reserved. Made with <i class="fas fa-heart" style="color: #e74c3c;"></i> for pets</p>
    </div>
</footer>

<!-- Cart Sidebar -->
<div class="cart-overlay" id="cartOverlay" onclick="toggleCart()"></div>
<div class="cart-sidebar" id="cartSidebar">
    <div class="cart-header">
        <h3><i class="fas fa-shopping-bag"></i> Your Cart</h3>
        <button class="close-cart" onclick="toggleCart()">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="cart-items" id="cartItems">
        <div class="cart-empty">
            <i class="fas fa-shopping-bag"></i>
            <p>Your cart is empty</p>
        </div>
    </div>
    <div class="cart-footer" id="cartFooter" style="display: none;">
        <div class="cart-total">
            <span>Total:</span>
            <span id="cartTotal">₹0</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">
            Proceed to Checkout <i class="fas fa-arrow-right"></i>
        </button>
    </div>
</div>

<!-- Toast Notification -->
<div class="toast" id="toast">
    <div class="toast-icon"><i class="fas fa-check"></i></div>
    <div>
        <strong>Added to Cart!</strong>
        <p id="toastMessage">Product added successfully</p>
    </div>
</div>
```

---

## 🎨 CSS Section

**IMPORTANT:** In CodePen's CSS settings (gear icon), add these external resources:

**External Stylesheets (CSS):**
```
https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
```

Then copy ALL the CSS from the file I created into the CSS box.

---

## ⚡ JavaScript Section

Copy ALL the JavaScript from the file I created into the JS box.

---

## ✅ Final Steps

1. **Pen Title:** "PawPerfect - Dog Grooming Store"
2. **Click "Save"** 💾
3. **Click "Change View"** → "Full Page" to see the full website

---

## 🎯 Alternative: Use the Complete HTML File

If you prefer, you can simply:
1. Go to https://codepen.io/pen/
2. Paste the ENTIRE HTML file content (from the file I created) into the HTML box
3. It will work immediately because everything is self-contained!

The HTML file includes:
- ✅ All CSS inside `<style>` tags
- ✅ All JavaScript inside `<script>` tags
- ✅ CDN links for fonts and icons
- ✅ All images from Unsplash
