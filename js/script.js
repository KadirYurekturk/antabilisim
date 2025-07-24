// Language switching functionality
const translations = {
    tr: {
        // Navigation
        "Anasayfa": "Anasayfa",
        "İçerik": "İçerik",
        "Ürünlerimiz": "Ürünlerimiz",
        "Hakkımızda": "Hakkımızda",
        "İletişim": "İletişim",
        "Home": "Anasayfa",
        "Content": "İçerik",
        "Our Products": "Ürünlerimiz",
        "About Us": "Hakkımızda",
        "Contact": "İletişim",
        
        // Hero Section
        "Teknoloji ile Geleceği İnşa Ediyoruz": "Teknoloji ile Geleceği İnşa Ediyoruz",
        "Building the Future with Technology": "Teknoloji ile Geleceği İnşa Ediyoruz",
        "ANTA BİLİŞİM AŞ olarak, yenilikçi yazılım çözümleri ve sistem entegrasyonu hizmetleri sunuyoruz.": "ANTA BİLİŞİM AŞ olarak, yenilikçi yazılım çözümleri ve sistem entegrasyonu hizmetleri sunuyoruz.",
        "As ANTA BİLİŞİM AŞ, we provide innovative software solutions and system integration services.": "ANTA BİLİŞİM AŞ olarak, yenilikçi yazılım çözümleri ve sistem entegrasyonu hizmetleri sunuyoruz.",
        "Hizmetlerimizi Keşfedin": "Hizmetlerimizi Keşfedin",
        "Discover Our Services": "Hizmetlerimizi Keşfedin",
        
        // Features Section
        "Uzmanlık Alanlarımız": "Uzmanlık Alanlarımız",
        "Our Expertise": "Uzmanlık Alanlarımız",
        "Yazılım Geliştirme": "Yazılım Geliştirme",
        "Software Development": "Yazılım Geliştirme",
        "Özel yazılım çözümleri ve kurumsal uygulamalar geliştiriyoruz.": "Özel yazılım çözümleri ve kurumsal uygulamalar geliştiriyoruz.",
        "We develop custom software solutions and enterprise applications.": "Özel yazılım çözümleri ve kurumsal uygulamalar geliştiriyoruz.",
        "Sistem Entegrasyonu": "Sistem Entegrasyonu",
        "System Integration": "Sistem Entegrasyonu",
        "Mevcut sistemlerinizi modern teknolojilerle entegre ediyoruz.": "Mevcut sistemlerinizi modern teknolojilerle entegre ediyoruz.",
        "We integrate your existing systems with modern technologies.": "Mevcut sistemlerinizi modern teknolojilerle entegre ediyoruz.",
        "Bulut Çözümleri": "Bulut Çözümleri",
        "Cloud Solutions": "Bulut Çözümleri",
        "Ölçeklenebilir ve güvenli bulut altyapı çözümleri sunuyoruz.": "Ölçeklenebilir ve güvenli bulut altyapı çözümleri sunuyoruz.",
        "We provide scalable and secure cloud infrastructure solutions.": "Ölçeklenebilir ve güvenli bulut altyapı çözümleri sunuyoruz.",
        
        // Content Section
        "İçerik Merkezi": "İçerik Merkezi",
        "Content Hub": "İçerik Merkezi",
        "Teknoloji Blogu": "Teknoloji Blogu",
        "Technology Blog": "Teknoloji Blogu",
        "Sektördeki son gelişmeler, teknoloji trendleri ve uzman görüşlerimizi keşfedin.": "Sektördeki son gelişmeler, teknoloji trendleri ve uzman görüşlerimizi keşfedin.",
        "Discover the latest industry developments, technology trends, and our expert insights.": "Sektördeki son gelişmeler, teknoloji trendleri ve uzman görüşlerimizi keşfedin.",
        "Vaka Analizleri": "Vaka Analizleri",
        "Case Studies": "Vaka Analizleri",
        "Başarılı projelerimizden örnekler ve müşterilerimizin dönüşüm hikayeleri.": "Başarılı projelerimizden örnekler ve müşterilerimizin dönüşüm hikayeleri.",
        "Examples from our successful projects and our clients' transformation stories.": "Başarılı projelerimizden örnekler ve müşterilerimizin dönüşüm hikayeleri.",
        "Teknik Dokümantasyon": "Teknik Dokümantasyon",
        "Technical Documentation": "Teknik Dokümantasyon",
        "Uygulama rehberleri, API dokümantasyonu ve teknik kaynaklar.": "Uygulama rehberleri, API dokümantasyonu ve teknik kaynaklar.",
        "Implementation guides, API documentation, and technical resources.": "Uygulama rehberleri, API dokümantasyonu ve teknik kaynaklar.",
        
        // Products Section
        "Ürün ve Hizmetlerimiz": "Ürün ve Hizmetlerimiz",
        "Our Products and Services": "Ürün ve Hizmetlerimiz",
        "Mobil Uygulamalar": "Mobil Uygulamalar",
        "Mobile Applications": "Mobil Uygulamalar",
        "iOS ve Android platformları için native ve cross-platform mobil uygulama geliştirme.": "iOS ve Android platformları için native ve cross-platform mobil uygulama geliştirme.",
        "Native and cross-platform mobile application development for iOS and Android platforms.": "iOS ve Android platformları için native ve cross-platform mobil uygulama geliştirme.",
        "Web Uygulamaları": "Web Uygulamaları",
        "Web Applications": "Web Uygulamaları",
        "Modern web teknolojileri ile ölçeklenebilir web uygulamaları ve SaaS platformları.": "Modern web teknolojileri ile ölçeklenebilir web uygulamaları ve SaaS platformları.",
        "Scalable web applications and SaaS platforms with modern web technologies.": "Modern web teknolojileri ile ölçeklenebilir web uygulamaları ve SaaS platformları.",
        "Veri Analitiği": "Veri Analitiği",
        "Data Analytics": "Veri Analitiği",
        "Büyük veri çözümleri, iş zekası ve yapay zeka destekli analitik platformlar.": "Büyük veri çözümleri, iş zekası ve yapay zeka destekli analitik platformlar.",
        "Big data solutions, business intelligence, and AI-powered analytics platforms.": "Büyük veri çözümleri, iş zekası ve yapay zeka destekli analitik platformlar.",
        
        // About Section
        "Hakkımızda": "Hakkımızda",
        "About Us": "Hakkımızda",
        "ANTA BİLİŞİM AŞ, 2020 yılında kurulmuş, teknoloji odaklı çözümler sunan bir yazılım ve danışmanlık şirketidir.": "ANTA BİLİŞİM AŞ, 2020 yılında kurulmuş, teknoloji odaklı çözümler sunan bir yazılım ve danışmanlık şirketidir.",
        "Vizyonumuz": "Vizyonumuz",
        "Our Vision": "Vizyonumuz",
        "Türkiye'nin önde gelen teknoloji şirketlerinden biri olarak, global ölçekte rekabet eden yenilikçi çözümler geliştirmek.": "Türkiye'nin önde gelen teknoloji şirketlerinden biri olarak, global ölçekte rekabet eden yenilikçi çözümler geliştirmek.",
        "Misyonumuz": "Misyonumuz",
        "Our Mission": "Misyonumuz",
        "Müşterilerimizin dijital dönüşüm yolculuğunda, güvenilir ve sürdürülebilir teknoloji çözümleri sunarak iş süreçlerini optimize etmek.": "Müşterilerimizin dijital dönüşüm yolculuğunda, güvenilir ve sürdürülebilir teknoloji çözümleri sunarak iş süreçlerini optimize etmek.",
        "Başarılı Proje": "Başarılı Proje",
        "Successful Projects": "Başarılı Proje",
        "Mutlu Müşteri": "Mutlu Müşteri",
        "Happy Clients": "Mutlu Müşteri",
        "Yıl Deneyim": "Yıl Deneyim",
        "Years of Experience": "Yıl Deneyim",
        
        // Contact Section
        "İletişim": "İletişim",
        "Contact": "İletişim",
        "İletişim Bilgileri": "İletişim Bilgileri",
        "Contact Information": "İletişim Bilgileri",
        "Adres": "Adres",
        "Address": "Adres",
        "Teknopark İstanbul, Sanayi Mah. Teknopark Bulvarı No:1/3A 34906 Pendik/İstanbul": "Teknopark İstanbul, Sanayi Mah. Teknopark Bulvarı No:1/3A 34906 Pendik/İstanbul",
        "Telefon": "Telefon",
        "Phone": "Telefon",
        "E-posta": "E-posta",
        "Email": "E-posta",
        "Çalışma Saatleri": "Çalışma Saatleri",
        "Working Hours": "Çalışma Saatleri",
        "Pazartesi - Cuma: 09:00 - 18:00": "Pazartesi - Cuma: 09:00 - 18:00",
        "Monday - Friday: 09:00 - 18:00": "Pazartesi - Cuma: 09:00 - 18:00",
        "Ad Soyad": "Ad Soyad",
        "Full Name": "Ad Soyad",
        "Konu": "Konu",
        "Subject": "Konu",
        "Mesaj": "Mesaj",
        "Message": "Mesaj",
        "Gönder": "Gönder",
        "Send": "Gönder",
        
        // Footer
        "Teknoloji ile geleceği birlikte inşa ediyoruz.": "Teknoloji ile geleceği birlikte inşa ediyoruz.",
        "Together, we build the future with technology.": "Teknoloji ile geleceği birlikte inşa ediyoruz.",
        "Hızlı Erişim": "Hızlı Erişim",
        "Quick Links": "Hızlı Erişim",
        "Sosyal Medya": "Sosyal Medya",
        "Social Media": "Sosyal Medya",
        "Tüm hakları saklıdır.": "Tüm hakları saklıdır.",
        "All rights reserved.": "Tüm hakları saklıdır."
    },
    en: {
        // Navigation
        "Anasayfa": "Home",
        "İçerik": "Content",
        "Ürünlerimiz": "Our Products",
        "Hakkımızda": "About Us",
        "İletişim": "Contact",
        "Home": "Home",
        "Content": "Content",
        "Our Products": "Our Products",
        "About Us": "About Us",
        "Contact": "Contact",
        
        // Hero Section
        "Teknoloji ile Geleceği İnşa Ediyoruz": "Building the Future with Technology",
        "Building the Future with Technology": "Building the Future with Technology",
        "ANTA BİLİŞİM AŞ olarak, yenilikçi yazılım çözümleri ve sistem entegrasyonu hizmetleri sunuyoruz.": "As ANTA BİLİŞİM AŞ, we provide innovative software solutions and system integration services.",
        "As ANTA BİLİŞİM AŞ, we provide innovative software solutions and system integration services.": "As ANTA BİLİŞİM AŞ, we provide innovative software solutions and system integration services.",
        "Hizmetlerimizi Keşfedin": "Discover Our Services",
        "Discover Our Services": "Discover Our Services",
        
        // Features Section
        "Uzmanlık Alanlarımız": "Our Expertise",
        "Our Expertise": "Our Expertise",
        "Yazılım Geliştirme": "Software Development",
        "Software Development": "Software Development",
        "Özel yazılım çözümleri ve kurumsal uygulamalar geliştiriyoruz.": "We develop custom software solutions and enterprise applications.",
        "We develop custom software solutions and enterprise applications.": "We develop custom software solutions and enterprise applications.",
        "Sistem Entegrasyonu": "System Integration",
        "System Integration": "System Integration",
        "Mevcut sistemlerinizi modern teknolojilerle entegre ediyoruz.": "We integrate your existing systems with modern technologies.",
        "We integrate your existing systems with modern technologies.": "We integrate your existing systems with modern technologies.",
        "Bulut Çözümleri": "Cloud Solutions",
        "Cloud Solutions": "Cloud Solutions",
        "Ölçeklenebilir ve güvenli bulut altyapı çözümleri sunuyoruz.": "We provide scalable and secure cloud infrastructure solutions.",
        "We provide scalable and secure cloud infrastructure solutions.": "We provide scalable and secure cloud infrastructure solutions.",
        
        // Content Section
        "İçerik Merkezi": "Content Hub",
        "Content Hub": "Content Hub",
        "Teknoloji Blogu": "Technology Blog",
        "Technology Blog": "Technology Blog",
        "Sektördeki son gelişmeler, teknoloji trendleri ve uzman görüşlerimizi keşfedin.": "Discover the latest industry developments, technology trends, and our expert insights.",
        "Discover the latest industry developments, technology trends, and our expert insights.": "Discover the latest industry developments, technology trends, and our expert insights.",
        "Vaka Analizleri": "Case Studies",
        "Case Studies": "Case Studies",
        "Başarılı projelerimizden örnekler ve müşterilerimizin dönüşüm hikayeleri.": "Examples from our successful projects and our clients' transformation stories.",
        "Examples from our successful projects and our clients' transformation stories.": "Examples from our successful projects and our clients' transformation stories.",
        "Teknik Dokümantasyon": "Technical Documentation",
        "Technical Documentation": "Technical Documentation",
        "Uygulama rehberleri, API dokümantasyonu ve teknik kaynaklar.": "Implementation guides, API documentation, and technical resources.",
        "Implementation guides, API documentation, and technical resources.": "Implementation guides, API documentation, and technical resources.",
        
        // Products Section
        "Ürün ve Hizmetlerimiz": "Our Products and Services",
        "Our Products and Services": "Our Products and Services",
        "Mobil Uygulamalar": "Mobile Applications",
        "Mobile Applications": "Mobile Applications",
        "iOS ve Android platformları için native ve cross-platform mobil uygulama geliştirme.": "Native and cross-platform mobile application development for iOS and Android platforms.",
        "Native and cross-platform mobile application development for iOS and Android platforms.": "Native and cross-platform mobile application development for iOS and Android platforms.",
        "Web Uygulamaları": "Web Applications",
        "Web Applications": "Web Applications",
        "Modern web teknolojileri ile ölçeklenebilir web uygulamaları ve SaaS platformları.": "Scalable web applications and SaaS platforms with modern web technologies.",
        "Scalable web applications and SaaS platforms with modern web technologies.": "Scalable web applications and SaaS platforms with modern web technologies.",
        "Veri Analitiği": "Data Analytics",
        "Data Analytics": "Data Analytics",
        "Büyük veri çözümleri, iş zekası ve yapay zeka destekli analitik platformlar.": "Big data solutions, business intelligence, and AI-powered analytics platforms.",
        "Big data solutions, business intelligence, and AI-powered analytics platforms.": "Big data solutions, business intelligence, and AI-powered analytics platforms.",
        
        // About Section
        "Hakkımızda": "About Us",
        "About Us": "About Us",
        "ANTA BİLİŞİM AŞ, 2020 yılında kurulmuş, teknoloji odaklı çözümler sunan bir yazılım ve danışmanlık şirketidir.": "ANTA BİLİŞİM AŞ is a software and consulting company established in 2020, providing technology-focused solutions.",
        "Vizyonumuz": "Our Vision",
        "Our Vision": "Our Vision",
        "Türkiye'nin önde gelen teknoloji şirketlerinden biri olarak, global ölçekte rekabet eden yenilikçi çözümler geliştirmek.": "To become one of Turkey's leading technology companies by developing innovative solutions that compete globally.",
        "Misyonumuz": "Our Mission",
        "Our Mission": "Our Mission",
        "Müşterilerimizin dijital dönüşüm yolculuğunda, güvenilir ve sürdürülebilir teknoloji çözümleri sunarak iş süreçlerini optimize etmek.": "To optimize our clients' business processes by providing reliable and sustainable technology solutions on their digital transformation journey.",
        "Başarılı Proje": "Successful Projects",
        "Successful Projects": "Successful Projects",
        "Mutlu Müşteri": "Happy Clients",
        "Happy Clients": "Happy Clients",
        "Yıl Deneyim": "Years of Experience",
        "Years of Experience": "Years of Experience",
        
        // Contact Section
        "İletişim": "Contact",
        "Contact": "Contact",
        "İletişim Bilgileri": "Contact Information",
        "Contact Information": "Contact Information",
        "Adres": "Address",
        "Address": "Address",
        "Teknopark İstanbul, Sanayi Mah. Teknopark Bulvarı No:1/3A 34906 Pendik/İstanbul": "Teknopark Istanbul, Sanayi Mah. Teknopark Bulvari No:1/3A 34906 Pendik/Istanbul",
        "Telefon": "Phone",
        "Phone": "Phone",
        "E-posta": "Email",
        "Email": "Email",
        "Çalışma Saatleri": "Working Hours",
        "Working Hours": "Working Hours",
        "Pazartesi - Cuma: 09:00 - 18:00": "Monday - Friday: 09:00 - 18:00",
        "Monday - Friday: 09:00 - 18:00": "Monday - Friday: 09:00 - 18:00",
        "Ad Soyad": "Full Name",
        "Full Name": "Full Name",
        "Konu": "Subject",
        "Subject": "Subject",
        "Mesaj": "Message",
        "Message": "Message",
        "Gönder": "Send",
        "Send": "Send",
        
        // Footer
        "Teknoloji ile geleceği birlikte inşa ediyoruz.": "Together, we build the future with technology.",
        "Together, we build the future with technology.": "Together, we build the future with technology.",
        "Hızlı Erişim": "Quick Links",
        "Quick Links": "Quick Links",
        "Sosyal Medya": "Social Media",
        "Social Media": "Social Media",
        "Tüm hakları saklıdır.": "All rights reserved.",
        "All rights reserved.": "All rights reserved."
    }
};

// DOM Elements
const langTrBtn = document.getElementById('lang-tr');
const langEnBtn = document.getElementById('lang-en');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Language switching functionality
let currentLang = 'tr';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langTrBtn.classList.toggle('active', lang === 'tr');
    langEnBtn.classList.toggle('active', lang === 'en');
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (lang === 'tr') {
        metaDescription.content = 'ANTA BİLİŞİM AŞ - Yazılım geliştirme, sistem entegrasyonu ve teknoloji danışmanlığı hizmetleri';
    } else {
        metaDescription.content = 'ANTA BİLİŞİM AŞ - Software development, system integration, and technology consulting services';
    }
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Language button event listeners
langTrBtn.addEventListener('click', () => switchLanguage('tr'));
langEnBtn.addEventListener('click', () => switchLanguage('en'));

// Smooth scrolling for navigation links
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

// Form submission handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        alert(currentLang === 'tr' 
            ? 'Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağız.' 
            : 'Your message has been sent successfully! We will get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Active navigation link highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll event listener
window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .content-item, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic copyright year
const currentYear = new Date().getFullYear();
const copyrightText = document.querySelector('.footer-bottom p');
if (copyrightText) {
    copyrightText.innerHTML = `&copy; ${currentYear} ANTA BİLİŞİM AŞ. <span data-tr="Tüm hakları saklıdır." data-en="All rights reserved.">${currentLang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</span>`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();
    
    // Set initial language based on browser preference
    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'en') {
        switchLanguage('en');
    }
});

// Resize handler for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Utility functions for common operations
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
