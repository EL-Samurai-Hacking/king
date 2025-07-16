
document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    const loadingScreen = document.querySelector('.loading-screen');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.main-header');
    const sections = document.querySelectorAll('section');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const contactCards = document.querySelectorAll('.contact-card');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    
   
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
    
    
    const typingTexts = [
        'مبرمج بايثون محترف',
        'مطور ويب',
        'مهتم بالاختراق',
        'VTlL99'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    function typeEffect() {
        const typedTextSpan = document.querySelector('.typed-text');
        const currentText = typingTexts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typingDelay = 500;
        }
        
        setTimeout(typeEffect, typingDelay);
    }
    
    
    setTimeout(typeEffect, 3500);
    
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
        
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
 
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('fade-in', 'visible');
            }
        });
        

        document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < windowHeight - revealPoint) {
                setTimeout(() => {
                    card.classList.add('fade-in', 'visible');
                }, 300);
            }
        });
    }
    
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
    
 
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3
        });
    }
    

    const commands = {
        'help': 'الأوامر المتاحة: help, about, skills, projects, contact, clear, matrix, hack',
        'about': 'فارس عرفه: مبرمج بايثون ومطور ويب من مصر، عمري 15 سنة، مهتم بالبرمجة والاختراق.',
        'skills': 'المهارات: بايثون (محترف)، PHP، JavaScript، HTML، CSS، اختبار الاختراق، أمان الويب.',
        'projects': 'المشاريع: أدوات بايثون للاختراق، تطبيقات ويب PHP، بوتات تليجرام، أدوات مدفوعة.',
        'contact': 'للتواصل: تليجرام @VENOM_XRX، قناة تليجرام: https://t.me/xmasterxz',
        'clear': 'مسح الشاشة',
        'matrix': 'تشغيل محاكاة الماتريكس...',
        'hack': 'بدء محاكاة الاختراق...'
    };
    
    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            
            const command = this.value.trim().toLowerCase();
            const line = document.createElement('div');
            line.className = 'line';
            line.innerHTML = `<span class="prompt">venom@system:~$</span> ${this.value}`;
            terminalOutput.appendChild(line);
            
            // معالجة الأوامر
            if (command in commands) {
                const response = document.createElement('div');
                response.className = 'line';
                
                if (command === 'clear') {
                    terminalOutput.innerHTML = '';
                    this.value = '';
                    return;
                } else if (command === 'matrix') {
                    response.textContent = commands[command];
                    terminalOutput.appendChild(response);
                    
                 
                    setTimeout(() => {
                        for (let i = 0; i < 10; i++) {
                            setTimeout(() => {
                                const matrixLine = document.createElement('div');
                                matrixLine.className = 'line';
                                matrixLine.style.color = '#00ff41';
                                
                                let randomChars = '';
                                for (let j = 0; j < 30; j++) {
                                    randomChars += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
                                }
                                
                                matrixLine.textContent = randomChars;
                                terminalOutput.appendChild(matrixLine);
                                terminalOutput.scrollTop = terminalOutput.scrollHeight;
                            }, i * 200);
                        }
                    }, 500);
                } else if (command === 'hack') {
                    response.textContent = commands[command];
                    terminalOutput.appendChild(response);
                    
                    // محاكاة الاختراق
                    const hackingSteps = [
                        'جاري فحص الهدف...',
                        'تم العثور على نقاط الضعف...',
                        'جاري استغلال الثغرات...',
                        'جاري كسر كلمة المرور...',
                        'تم الوصول إلى النظام...',
                        'جاري استخراج البيانات...',
                        'اكتملت العملية بنجاح!'
                    ];
                    
                    hackingSteps.forEach((step, index) => {
                        setTimeout(() => {
                            const hackLine = document.createElement('div');
                            hackLine.className = 'line';
                            hackLine.textContent = step;
                            terminalOutput.appendChild(hackLine);
                            terminalOutput.scrollTop = terminalOutput.scrollHeight;
                        }, (index + 1) * 1000);
                    });
                } else {
                    response.textContent = commands[command];
                    terminalOutput.appendChild(response);
                }
            } else if (command !== '') {
                const response = document.createElement('div');
                response.className = 'line';
                response.textContent = `الأمر '${command}' غير معروف. اكتب 'help' لعرض الأوامر المتاحة.`;
                terminalOutput.appendChild(response);
            }
            
          
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
           
            this.value = '';
        }
    });
    
    
    document.querySelector('.interactive-terminal').addEventListener('click', () => {
        terminalInput.focus();
    });
    
  
    function animateSkillBars() {
        document.querySelectorAll('.progress').forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            
            setTimeout(() => {
                progress.style.width = width;
            }, 300);
        });
    }
    
    
    const skillsSection = document.getElementById('skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
   
    function setActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-active');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-active');
    });
    
    
    document.querySelectorAll('a, button, .btn').forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('cursor-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
    
   
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 5 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
   
    createParticles();
    
    
    document.querySelectorAll('.neon-flicker').forEach(element => {
        setInterval(() => {
            element.style.opacity = (Math.random() > 0.9) ? '0.5' : '1';
        }, 100);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--color-neon-green);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, border-color 0.3s;
            z-index: 9999;
        }
        
        .cursor-dot {
            position: fixed;
            width: 5px;
            height: 5px;
            background-color: var(--color-neon-green);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
        }
        
        .cursor-active {
            width: 25px;
            height: 25px;
            border-color: var(--color-purple);
        }
        
        .cursor-hover {
            width: 50px;
            height: 50px;
            border-color: var(--color-neon-green);
            mix-blend-mode: difference;
        }
        
        .particle {
            position: absolute;
            background-color: var(--color-neon-green);
            border-radius: 50%;
            opacity: 0.5;
            pointer-events: none;
            animation: float-particle linear infinite;
        }
        
        @keyframes float-particle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
