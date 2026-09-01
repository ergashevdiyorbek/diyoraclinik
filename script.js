// Data Array
const servicesData = [
    { cat: 'consult', nameUz: 'Nevropatolog konsultatsiyasi', nameRu: 'Консультация Невропатолога', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Ortoped konsultatsiyasi', nameRu: 'Консультация Ортопеда', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Xirurg konsultatsiyasi', nameRu: 'Консультация Хирурга', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Logoped konsultatsiyasi', nameRu: 'Консультация Логопеда', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Defektolog konsultatsiyasi', nameRu: 'Консультация Дефектолога', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'LOR konsultatsiyasi', nameRu: 'Консультация ЛОРа', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Rentgen konsultatsiyasi', nameRu: 'Рентген консультация', price: '120 000 soʻm' },
    { cat: 'consult', nameUz: 'Pediatr konsultatsiyasi', nameRu: 'Консультация Педиатра', price: '120 000 soʻm' },

    { cat: 'vaccine', nameUz: 'AKDS vaksina', nameRu: 'Вакцина АКДС', price: '950 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Gepatit A vaksina', nameRu: 'Вакцина Гепатит А', price: '400 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Gepatit B (bolalar)', nameRu: 'Гепатит В (детский)', price: '400 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Gepatit B (kattalar)', nameRu: 'Гепатит В (взрослый)', price: '500 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Pnevmokokk vaksina', nameRu: 'Вакцина Пневмококк', price: '950 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Rotavirus vaksina', nameRu: 'Вакцина Ротавирус', price: '400 000 soʻm' },
    { cat: 'vaccine', nameUz: 'KPK vaksina', nameRu: 'Вакцина КПК', price: '400 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Penta vaksina', nameRu: 'Пента вакцина', price: '650 000 soʻm' },
    { cat: 'vaccine', nameUz: 'Meningokokk vaksina', nameRu: 'Вакцина Менингококк', price: '850 000 soʻm' },

    { cat: 'uzi', nameUz: 'Neyrosonografiya (16 yoshgacha)', nameRu: 'Нейросонография (до 16 лет)', price: '120 000 soʻm' },
    { cat: 'uzi', nameUz: 'EXO yurak (16 yoshgacha)', nameRu: 'ЭХО сердца (до 16 лет)', price: '140 000 soʻm' },
    { cat: 'uzi', nameUz: 'Buyraklar (Bolalar / Kattalar)', nameRu: 'Почки (Дети / Взрослые)', price: '120 000 soʻm' },
    { cat: 'uzi', nameUz: 'Jigar, oʻt pufagi, meʼda osti bezi', nameRu: 'Печень, желчный пузырь, поджелудочная', price: '140 000 soʻm' },
    { cat: 'uzi', nameUz: 'Kompleks ichki aʼzolar UZIsi', nameRu: 'Комплексное УЗИ брюшной полости', price: '240 000 - 260 000 soʻm' },

    { cat: 'procedure', nameUz: 'Dorilarga sinama (proba)', nameRu: 'Проба на лекарства', price: '20 000 soʻm' },
    { cat: 'procedure', nameUz: 'Mushak orasiga inyeksiya', nameRu: 'Внутримышечная инъекция', price: '10 000 soʻm' },
    { cat: 'procedure', nameUz: 'Vena ichiga kapelnitsa', nameRu: 'Внутривенная капельница', price: '30 000 soʻm' },
    { cat: 'procedure', nameUz: 'Kislorodli terapiya', nameRu: 'Кислородная терапия', price: '50 000 soʻm' },
    { cat: 'procedure', nameUz: 'Nebulayzer terapiya', nameRu: 'Небулайзер терапия', price: '50 000 soʻm' }
];

let currentLang = 'uz';

// 1. THREE.JS 3D BACKGROUND ANIMATION
function init3DHero() {
    const canvas = document.getElementById('webgl-hero');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Создаем 3D медицинские сферы/молекулы
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x0066CC,
        wireframe: true,
        transparent: true,
        opacity: 0.25
    });

    const spheres = [];
    for (let i = 0; i < 15; i++) {
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = (Math.random() - 0.5) * 15;
        sphere.position.y = (Math.random() - 0.5) * 15;
        sphere.position.z = (Math.random() - 0.5) * 10;
        const scale = Math.random() * 0.8 + 0.2;
        sphere.scale.set(scale, scale, scale);
        scene.add(sphere);
        spheres.push(sphere);
    }

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10B981, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 6;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        spheres.forEach((s, index) => {
            s.rotation.x += 0.003 * (index % 2 === 0 ? 1 : -1);
            s.rotation.y += 0.005;
        });

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;

        renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// 2. GSAP SCROLL ANIMATIONS
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    gsap.from('.animate-gsap', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Scroll Animations for Sections
    gsap.utils.toArray('.animate-scroll').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// Render Services & Re-init Tilt
function renderServices(filter = 'all') {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? servicesData : servicesData.filter(s => s.cat === filter);

    filtered.forEach(item => {
        const name = currentLang === 'uz' ? item.nameUz : item.nameRu;
        const card = document.createElement('div');
        card.className = 'service-item-card';
        card.setAttribute('data-tilt', '');
        card.setAttribute('data-tilt-max', '8');
        card.innerHTML = `
            <div>
                <div class="service-name">${name}</div>
            </div>
            <div class="service-price">${item.price}</div>
        `;
        grid.appendChild(card);
    });

    // Initialize Tilt on newly rendered cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.service-item-card'));
    }
}

// Language Switcher
function switchLang(lang) {
    currentLang = lang;
    document.getElementById('langUz').classList.toggle('active', lang === 'uz');
    document.getElementById('langRu').classList.toggle('active', lang === 'ru');
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    const activeTab = document.querySelector('.tab-btn.active').getAttribute('onclick').match(/'([^']+)'/)[1];
    renderServices(activeTab);
}

// Filter Function
function filterServices(category) {
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderServices(category);
}

// Form Handler
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;

    const msg = currentLang === 'uz' 
        ? `Rahmat ${name}! Qabulga yozilishingiz qabul qilindi. Operatorimiz tez orada bog'lanadi.` 
        : `Спасибо ${name}! Ваша заявка принята. Наш оператор свяжется с вами.`;

    document.getElementById('formSuccess').innerText = msg;
    document.getElementById('appointmentForm').reset();
}

// Init everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    init3DHero();
    initGSAPAnimations();
    
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'));
    }
});

// Translation Dictionary
const translations = {
    uz: {
        nav_about: 'Biz haqimizda',
        nav_services: 'Xizmatlar & Narxlar',
        nav_booking: 'Qabulga yozilish',
        nav_contacts: 'Aloqa',
        hero_badge: 'Chirchiq shahridagi pediatriya va diagnostika markazi',
        hero_title: 'Farzandingiz va oilangiz salomatligi — ishonchli qo\'llarda',
        hero_desc: 'Yuqori malakali shifokorlar, xavfsiz vaksinatsiya va aniq UZI diagnostikasi. Navbatsiz va qulay narxlarda.',
        btn_book: 'Qabulga yozilish',
        quick_info_title: 'Ish rejimimiz',
        trust_1_title: 'Tajribali Mutaxassislar',
        trust_1_desc: 'Pediatr, nevropatolog, ortoped va boshqa malakali vrachlar konsultatsiyasi.',
        trust_2_title: 'Aniq UZI Diagnostika',
        trust_2_desc: 'Neyrosonografiya, EXO yurak va ichki a\'zolarning yuqori aniqlikdagi tekshiruvi.',
        trust_3_title: 'Xavfsiz Emlash (Vaksinatsiya)',
        trust_3_desc: 'Sertifikatlangan import vaksinalar hamda emlashdan oldingi shifokor ko\'rigi.',
        services_title: 'Xizmatlarimiz va Narxlar',
        services_subtitle: 'Barcha narxlar shaffof va o\'zgarmasdir',
        tab_all: 'Barchasi',
        tab_consult: 'Konsultatsiyalar',
        tab_vaccine: 'Vaksinatsiya',
        tab_uzi: 'UZI Diagnostika',
        tab_procedure: 'Muolaja xonasi',
        booking_title: 'Onlayn Qabulga Yozilish',
        booking_desc: 'Formani to\'ldiring, adminstratorimiz 10 daqiqa ichida siz bilan bog\'lanadi.',
        label_name: 'Ismingiz va Familiyangiz',
        label_phone: 'Telefon raqamingiz',
        label_service: 'Xizmat turini tanlang',
        select_placeholder: '-- Tanlang --',
        btn_submit: 'Qabulga yozilishni tasdiqlash',
        contacts_title: 'Bizning Manzil va Aloqa'
    },
    ru: {
        nav_about: 'О нас',
        nav_services: 'Услуги и Цены',
        nav_booking: 'Запись на прием',
        nav_contacts: 'Контакты',
        hero_badge: 'Центр педиатрии и диагностики в Чирчике',
        hero_title: 'Здоровье вашей семьи — в надежных руках',
        hero_desc: 'Высококвалифицированные врачи, безопасная вакцинация и точная УЗИ диагностика. Без очередей и по доступным ценам.',
        btn_book: 'Записаться на прием',
        quick_info_title: 'Режим работы',
        trust_1_title: 'Опытные Специалисты',
        trust_1_desc: 'Консультации педиатра, невропатолога, ортопеда и других врачей.',
        trust_2_title: 'Точная УЗИ Диагностика',
        trust_2_desc: 'Нейросонография, ЭХО сердца и исследование внутренних органов.',
        trust_3_title: 'Безопасная Вакцинация',
        trust_3_desc: 'Сертифицированные импортные вакцины и осмотр перед прививкой.',
        services_title: 'Наши Услуги и Цены',
        services_subtitle: 'Все цены прозрачны и фиксированы',
        tab_all: 'Все',
        tab_consult: 'Консультации',
        tab_vaccine: 'Вакцинация',
        tab_uzi: 'УЗИ Диагностика',
        tab_procedure: 'Процедурный кабинет',
        booking_title: 'Онлайн Запись на Прием',
        booking_desc: 'Заполните форму, и наш администратор свяжется с вами в течение 10 минут.',
        label_name: 'Ваше Имя и Фамилия',
        label_phone: 'Ваш номер телефона',
        label_service: 'Выберите услугу',
        select_placeholder: '-- Выберите --',
        btn_submit: 'Подтвердить запись',
        contacts_title: 'Наш Адрес и Контакты'
    }
};