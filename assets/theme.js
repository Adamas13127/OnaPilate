// Show banner and navbar after loader
window.addEventListener('load', function() {
    setTimeout(function() {
        const banner = document.getElementById('promoBanner');
        const navbar = document.getElementById('navbar');
        if (banner) banner.style.display = 'block';
        if (navbar) navbar.classList.add('show');
    }, 2500);
});

// Navbar and banner scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const banner = document.getElementById('promoBanner');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        if (banner) banner.style.display = 'block';
        if (navbar) navbar.classList.add('show');
    }
});

// Gallery Carousel
let galleryCurrentSlide = 0;
const galleryTotalSlides = 5;
let galleryAutoSlideInterval;

function initGalleryCarousel() {
    const gallerySlides = document.getElementById('gallerySlides');
    const galleryNext = document.getElementById('galleryNext');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryDotsContainer = document.querySelector('#galleryCarousel')?.parentElement;
    const galleryDots = galleryDotsContainer ? galleryDotsContainer.querySelectorAll('button[data-slide]') : [];

    if (!gallerySlides) {
        return;
    }

    function updateGalleryCarousel() {
        if (gallerySlides) {
            gallerySlides.style.transform = `translateX(-${galleryCurrentSlide * 100}%)`;
        }
        galleryDots.forEach((dot, index) => {
            if (index === galleryCurrentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function resetAutoSlide() {
        clearInterval(galleryAutoSlideInterval);
        galleryAutoSlideInterval = setInterval(() => {
            galleryCurrentSlide = (galleryCurrentSlide + 1) % galleryTotalSlides;
            updateGalleryCarousel();
        }, 4000);
    }

    if (galleryNext) {
        galleryNext.addEventListener('click', (e) => {
            e.preventDefault();
            galleryCurrentSlide = (galleryCurrentSlide + 1) % galleryTotalSlides;
            updateGalleryCarousel();
            resetAutoSlide();
        });
    }

    if (galleryPrev) {
        galleryPrev.addEventListener('click', (e) => {
            e.preventDefault();
            galleryCurrentSlide = (galleryCurrentSlide - 1 + galleryTotalSlides) % galleryTotalSlides;
            updateGalleryCarousel();
            resetAutoSlide();
        });
    }

    galleryDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            galleryCurrentSlide = index;
            updateGalleryCarousel();
            resetAutoSlide();
        });
    });

    resetAutoSlide();
}

// Product Carousel
let productCurrentSlide = 0;
const productTotalSlides = 8;
let productAutoSlideInterval;

function initProductCarousel() {
    const productSlides = document.getElementById('productSlides');
    const productNext = document.getElementById('productNext');
    const productPrev = document.getElementById('productPrev');
    const productCarouselContainer = document.querySelector('#productCarousel')?.parentElement;
    const productDots = productCarouselContainer ? productCarouselContainer.querySelectorAll('button[data-slide]') : [];

    if (!productSlides) {
        return;
    }

    function updateProductCarousel() {
        if (productSlides) {
            productSlides.style.transform = `translateX(-${productCurrentSlide * 100}%)`;
        }
        productDots.forEach((dot, index) => {
            if (index === productCurrentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function resetProductAutoSlide() {
        clearInterval(productAutoSlideInterval);
        productAutoSlideInterval = setInterval(() => {
            productCurrentSlide = (productCurrentSlide + 1) % productTotalSlides;
            updateProductCarousel();
        }, 4000);
    }

    if (productNext) {
        productNext.addEventListener('click', (e) => {
            e.preventDefault();
            productCurrentSlide = (productCurrentSlide + 1) % productTotalSlides;
            updateProductCarousel();
            resetProductAutoSlide();
        });
    }

    if (productPrev) {
        productPrev.addEventListener('click', (e) => {
            e.preventDefault();
            productCurrentSlide = (productCurrentSlide - 1 + productTotalSlides) % productTotalSlides;
            updateProductCarousel();
            resetProductAutoSlide();
        });
    }

    productDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            productCurrentSlide = index;
            updateProductCarousel();
            resetProductAutoSlide();
        });
    });

    resetProductAutoSlide();
}

// Initialize carousels when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            initGalleryCarousel();
            initProductCarousel();
        }, 100);
    });
} else {
    setTimeout(() => {
        initGalleryCarousel();
        initProductCarousel();
    }, 100);
}

// Email Popup
let popupShown = false;
let scrollTriggered = false;

function showEmailPopup() {
    if (localStorage.getItem('emailPopupShown') === 'true') {
        return;
    }

    const popup = document.getElementById('emailPopup');
    if (popup && !popupShown) {
        popup.classList.remove('hidden');
        popup.classList.add('flex');
        popupShown = true;
    }
}

function closeEmailPopup() {
    const popup = document.getElementById('emailPopup');
    if (popup) {
        popup.classList.add('hidden');
        popup.classList.remove('flex');
    }
}

function submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('popupEmail')?.value;
    
    if (email) {
        const popup = document.getElementById('emailPopup');
        const content = popup?.querySelector('.popup-content');
        
        if (content) {
            content.innerHTML = `
                <div class="text-center">
                    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 class="font-display text-3xl font-bold mb-4 text-gray-800">
                        Code Envoyé ! 🎉
                    </h2>
                    <p class="text-gray-600 mb-4">
                        Vérifiez votre boîte mail <span class="font-semibold">${email}</span>
                    </p>
                    <p class="text-gray-500 text-sm mb-6">
                        Vous allez recevoir votre code promo <span class="font-bold text-pink-600">-10%</span> dans quelques instants
                    </p>
                    <button onclick="closeEmailPopup()" class="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300">
                        Parfait, Merci !
                    </button>
                </div>
            `;
        }
        
        localStorage.setItem('emailPopupShown', 'true');
        localStorage.setItem('userEmail', email);
        
        setTimeout(() => {
            closeEmailPopup();
        }, 3000);
    }
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > windowHeight * 0.3 && !scrollTriggered && !popupShown) {
        scrollTriggered = true;
        setTimeout(() => {
            showEmailPopup();
        }, 1000);
    }
});

document.getElementById('emailPopup')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeEmailPopup();
    }
});

// Email Subscription Section
function submitEmailSubscription(event) {
    event.preventDefault();
    const emailInput = document.getElementById('subscriptionEmail');
    const form = document.getElementById('emailSubscriptionForm');
    const successMessage = document.getElementById('subscriptionSuccess');
    
    if (emailInput && emailInput.value) {
        localStorage.setItem('userEmail', emailInput.value);
        localStorage.setItem('emailSubscription', 'true');
        
        if (form) form.classList.add('hidden');
        if (successMessage) successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            if (form) form.classList.remove('hidden');
            if (successMessage) successMessage.classList.add('hidden');
            if (emailInput) emailInput.value = '';
        }, 5000);
    }
}

window.submitEmail = submitEmail;
window.closeEmailPopup = closeEmailPopup;
window.submitEmailSubscription = submitEmailSubscription;
