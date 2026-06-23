document.addEventListener("DOMContentLoaded", function() {

    // =========================================================
    // 1. STYLING GLOBAL NAVBAR & DROPDOWN (FIXED & FULL WIDTH)
    // =========================================================
    const globalNavbarStyles = `
    <style>
        .navbar {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 20px 8% !important;
            background-color: #fff !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05) !important;
            
            /* KUNCI FIXED NAVBAR BIAR SELALU DI ATAS */
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
            
            z-index: 9999 !important;
            font-family: 'Montserrat', sans-serif !important;
        }
        
        /* Memberikan jarak otomatis pada body agar hero section tidak tertutup navbar fixed */
        body {
            margin-top: 80px !important; 
        }

        .navbar .logo {
            font-family: 'Playfair Display', serif !important;
            font-size: 1.8rem !important;
            font-weight: 700 !important;
            color: #1b3322 !important;
        }
        .navbar .nav-links {
            display: flex !important;
            list-style: none !important;
            gap: 30px !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        .navbar .nav-links a {
            text-decoration: none !important;
            color: #333 !important;
            font-weight: 500 !important;
            font-size: 0.95rem !important;
            transition: color 0.3s !important;
        }
        .navbar .nav-links a:hover {
            color: #7d8471 !important;
        }

        /* --- WRAPPER UNTUK MEMBUAT KERANJANG & PROFIL BERJAJAR --- */
        .nav-right-side {
            display: flex !important;
            align-items: center !important;
            gap: 25px !important;
        }

        /* --- STYLING IKON KERANJANG --- */
        .nav-cart-link {
            position: relative !important;
            color: #3D4831 !important;
            font-size: 1.3rem !important;
            text-decoration: none !important;
            transition: color 0.3s, transform 0.2s !important;
            display: flex !important;
            align-items: center !important;
        }
        .nav-cart-link:hover {
            color: #7d8471 !important;
            transform: translateY(-1px) !important;
        }
        .cart-badge {
            position: absolute !important;
            top: -7px !important;
            right: -10px !important;
            background-color: #3d4831 !important; /* Sage Green khas GDecors */
            color: white !important;
            font-size: 0.65rem !important;
            font-weight: bold !important;
            border-radius: 50% !important;
            padding: 2px 6px !important;
            min-width: 12px !important;
            text-align: center !important;
            line-height: 1 !important;
            font-family: 'Montserrat', sans-serif !important;
        }

        #nav-auth-container .btn-signup {
            background-color: #3D4831 !important;
            color: #fff !important;
            padding: 10px 24px !important;
            border-radius: 50px !important;
            text-decoration: none !important;
            font-weight: 600 !important;
            font-size: 0.9rem !important;
            transition: all 0.3s !important;
            display: inline-block !important;
        }
        #nav-auth-container .btn-signup:hover {
            background-color: #2b3322 !important;
            transform: translateY(-2px) !important;
        }
        .profile-wrapper {
            position: relative !important;
            display: inline-block !important;
        }
        .profile-trigger-box {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            font-weight: 600 !important;
            color: #3D4831 !important;
            cursor: pointer !important;
            user-select: none !important;
        }
        .profile-dropdown-box {
            display: none;
            position: absolute !important;
            right: 0 !important;
            top: calc(100% + 8px) !important;
            background: white !important;
            border: 1px solid #E4E6E3 !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
            padding: 8px !important;
            min-width: 120px !important;
            z-index: 10000 !important;
            text-align: center !important;
        }
        .btn-dropdown-logout {
            background-color: #ff4d4d !important;
            color: white !important;
            border: none !important;
            padding: 8px 12px !important;
            width: 100% !important;
            border-radius: 6px !important;
            cursor: pointer !important;
            font-weight: 600 !important;
            font-family: 'Montserrat', sans-serif !important;
            font-size: 0.85rem !important;
            transition: background 0.2s !important;
        }
        .btn-dropdown-logout:hover {
            background-color: #e03e3e !important;
        }
    </style>
    `;
    document.head.insertAdjacentHTML('beforeend', globalNavbarStyles);

    // =========================================================
    // 2. TEMPLATE KODE NAVBAR UTAMA
    // =========================================================
    const navbarHTML = `
    <nav class="navbar">
        <div class="logo">GDecors</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="katalog_produk.html" id="nav-catalog-link">Catalog</a></li>
            <li><a href="index.html#blog">Articles</a></li>
            <li><a href="index.html#about">About Us</a></li>
        </ul>
        
        <div class="nav-right-side">
            <a href="keranjang.html" class="nav-cart-link" id="global-nav-cart" title="Keranjang Belanja">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-badge" id="global-cart-count">0</span>
            </a>
            
            <div id="nav-auth-container">
                <a href="index.html#signup" class="btn-signup">Sign Up</a>
            </div>
        </div>
    </nav>
    `;

    // =========================================================
    // 3. TEMPLATE KODE FOOTER UTAMA
    // =========================================================
    const footerHTML = `
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="footer-top">
                <div class="footer-col brand-col">
                    <h2 class="footer-logo">GDecors<span>.</span></h2>
                    <p class="footer-tagline">Crafting Spaces, Creating Story. We turn your imagination into an unforgettable celebration.</p>
                    <div class="footer-socials">
                        <a href="http://instagram.com/gresik_decoration" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#" aria-label="mailto:hello@gdecors.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#services">Services</a></li>
                        <li><a href="katalog_produk.html" id="footer-catalog-link">Our Catalog</a></li>
                        <li><a href="index.html#blog">Articles</a></li>
                        <li><a href="index.html#about">About Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p><i class="fas fa-map-marker-alt"></i> Surabaya, East Java</p>
                    <p><i class="fas fa-phone-alt"></i> +62 875 6567 57755</p>
                    <p><i class="fas fa-clock"></i> Mon - Sat: 09.00 - 18.00</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 GDecors. All Rights Reserved. Designed for Excellence.</p>
            </div>
        </div>
    </footer>
    `;

    // Suntikkan komponen awal ke wadah HTML
    if (document.getElementById('global-navbar')) {
        document.getElementById('global-navbar').innerHTML = navbarHTML;
    }
    if (document.getElementById('global-footer')) {
        document.getElementById('global-footer').innerHTML = footerHTML;
    }

    // =========================================================
    // 4. LOGIKA HIDE/SHOW BELANJA & DINAMIS BADGE BELANJA
    // =========================================================
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userRole = localStorage.getItem('userRole');
    const username = localStorage.getItem('username') || 'sania'; 
    const authContainer = document.getElementById('nav-auth-container');
    const cartElement = document.getElementById('global-nav-cart');
    const cartCountElement = document.getElementById('global-cart-count');

    // LOGIKA PERHITUNGAN BADGE ANGKA KERANJANG ASLI
    if (cartCountElement) {
        const cartItemsArray = JSON.parse(localStorage.getItem('gdecors_cart')) || [];
        cartCountElement.textContent = cartItemsArray.length;
    }

    // LOGIKA MENAMPILKAN/SEMBUNYIKAN IKON KERANJANG BERDASARKAN AUTH STATUS
    if (isLoggedIn === 'true' && userRole === 'user') {
        // Tampilkan keranjang belanja jika status login valid
        if (cartElement) cartElement.style.setProperty('display', 'flex', 'important');

        if (authContainer) {
            authContainer.innerHTML = `
                <div class="profile-wrapper">
                    <div id="profile-trigger" class="profile-trigger-box">
                        <span style="font-family: 'Montserrat', sans-serif;">Hello, ${username}</span>
                        <i class="fas fa-user-circle" style="font-size: 1.4rem;"></i>
                    </div>
                    <div id="profile-dropdown-menu" class="profile-dropdown-box">
                        <button id="btn-logout" class="btn-dropdown-logout">Logout</button>
                    </div>
                </div>
            `;

            const profileTrigger = document.getElementById('profile-trigger');
            const dropdownMenu = document.getElementById('profile-dropdown-menu');

            profileTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                const isDisplayed = dropdownMenu.style.display === 'block';
                dropdownMenu.style.display = isDisplayed ? 'none' : 'block';
            });

            document.addEventListener('click', function() {
                dropdownMenu.style.display = 'none';
            });

            // PERBAIKAN UTAMA: Langsung hilangkan keranjang saat diklik tanpa nunggu loading page selesai
            document.getElementById('btn-logout').addEventListener('click', function() {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userRole');
                localStorage.removeItem('username');
                
                // Paksa sembunyikan keranjang seketika!
                if (cartElement) {
                    cartElement.style.setProperty('display', 'none', 'important');
                }

                alert('Berhasil Logout! 👋');
                window.location.href = 'index.html';
            });
        }
    } else {
        // SEMBUNYIKAN KERANJANG TOTAL JIKA LOGOUT / BELUM LOGIN VIA REFRESH
        if (cartElement) cartElement.style.setProperty('display', 'none', 'important');
    }

    // =========================================================
    // 5. PENANGANAN KLIK LINK KATALOG
    // =========================================================
    function handleCatalogClick(e) {
        if (window.location.pathname.includes('katalog_produk.html') || window.location.pathname.includes('detail_produk.html')) {
            return; 
        }
        if (isLoggedIn === 'true' && userRole === 'user') {
            window.location.href = 'katalog_produk.html';
        } else {
            e.preventDefault();
            alert('Silakan Sign Up / Log In terlebih dahulu untuk melihat Katalog kami! 😉');
            const signupSection = document.getElementById('signup');
            if (signupSection) {
                signupSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'index.html#signup';
            }
        }
    }

    const navCatalog = document.getElementById('nav-catalog-link');
    const footerCatalog = document.getElementById('footer-catalog-link');
    if (navCatalog) navCatalog.addEventListener('click', handleCatalogClick);
    if (footerCatalog) footerCatalog.addEventListener('click', handleCatalogClick);
});