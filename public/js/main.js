document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            if (!isHidden) {
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                document.body.style.overflow = 'hidden'; 
            } else {
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                document.body.style.overflow = ''; 
            }
        });
    }

    // Fallback explicit close button inside the drawer
    const closeMenuFallback = document.getElementById('closeMenuFallback');
    if (closeMenuFallback && mobileMenuBtn) {
        closeMenuFallback.addEventListener('click', () => {
            mobileMenuBtn.click(); 
        });
    }

    // 2. Swiper Initialization (Hero Section)
    if (document.querySelector('.heroSwiper')) {
        new Swiper(".heroSwiper", {
            effect: "fade",
            fadeEffect: { crossFade: true },
            speed: 2500,
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false }
        });
    }

    // 3. Counter Animation Logic (UPDATED)
    const counters = document.querySelectorAll(".counter");
    if (counters.length > 0) {
        // We add 'index' here to track which card we are animating
        counters.forEach((counter, index) => {
            const target = parseInt(counter.dataset.target);
            let current = 0;
            const duration = 1500;
            const step = target / (duration / 16); 
            
            function animate() {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    setTimeout(animate, 16);
                } else {
                    // Condition: If it is the middle card (index 1), do not add "+"
                    if (index === 1) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = target + "+";
                    }
                }
            }
            animate();
        });
    }

    // 4. Video Player Controls
    const video = document.getElementById("hospitalVideo");
    const playBtn = document.getElementById("playBtn");

    if (video && playBtn) {
        playBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playBtn.style.display = 'none';
            }
        });
        
        video.addEventListener("pause", () => playBtn.style.display = "flex");
        video.addEventListener("ended", () => playBtn.style.display = "flex");
    }
});

// 5. Scroll to Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        // Listen for scroll events to show/hide the button
        window.addEventListener('scroll', () => {
            // If scrolled down more than 300 pixels, show the button
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            } else {
                // Otherwise, hide it
                scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
                scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            }
        });

        // Smooth scroll to the top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }