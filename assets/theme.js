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
let galleryAutoSlideInterval;

function initGalleryCarousel() {
    const gallerySlides = document.getElementById('gallerySlides');
    const galleryNext = document.getElementById('galleryNext');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryDotsContainer = document.querySelector('#galleryCarousel')?.parentElement;
    const galleryDots = galleryDotsContainer ? galleryDotsContainer.querySelectorAll('button[data-slide]') : [];
    const galleryTotalSlides = gallerySlides ? gallerySlides.children.length : 0;

    if (!gallerySlides || galleryTotalSlides <= 1) {
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
let productAutoSlideInterval;

function initProductCarousel() {
    const productSlides = document.getElementById('productSlides');
    const productNext = document.getElementById('productNext');
    const productPrev = document.getElementById('productPrev');
    const productCarouselContainer = document.querySelector('#productCarousel')?.parentElement;
    const productDots = productCarouselContainer ? productCarouselContainer.querySelectorAll('button[data-slide]') : [];
    const productTotalSlides = productSlides ? productSlides.children.length : 0;

    if (!productSlides || productTotalSlides <= 1) {
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

window.closeEmailPopup = closeEmailPopup;
