// Team member bio data
const teamBios = {
    'gregory': {
        name: 'Gregory A. Smith, M.D.',
        title: 'Founder and CEO, Red Pill Medical, Inc., Your Cell Regeneration, Inc.',
        photo: 'images/greg-T.png',
        bio: 'Dr. Smith received his undergraduate degree in both chemistry and biology from Indiana University and his medical degree from Washington University in St. Louis, Missouri. He is the former Director of Pain Management at Harbor-UCLA and Assistant Clinical Professor at UCLA. He formed the Comprehensive Pain Relief Group Inc. in 2001 and GS Medical Center Inc. in 2004, of which he served as the President and Medical Director of both. In 2005, Dr. Smith created the Nutritional, Emotional, Social, and Physical (NESP) Program to combat addiction and chronic pain. He is currently President and CEO of Red Pill Medical, Inc., a biotech company with an emphasis on medical-grade cannabinoids for patients in the medical setting, along with research and development of patentable hemp seeds and cannabinoid pharmaceuticals.<br><br>In 2012, Dr. Smith formed Pain MD Productions Inc., from which he executive-produced and co-wrote the feature films "American Addict" (2013) and "American Addict 2, The Big Lie" (2016). The docuseries "American Weed: The Cannabis COVID-19 Connection" is in pre-production with a scheduled release date of Summer 2026. He is also in pre-production of "American Addict 3, Epidemic End Game" with a projected release date of Spring 2027.<br><br>He also hosted the radio show Truth, Medicine, and Politics on KABC in Los Angeles and has appeared as a guest on multiple local, national, and international radio and television shows. Dr. Smith still runs 3 chronic pain and regenerative medical clinics in central and southern California that specialize in unique stem cell protocols for neurodegenerative diseases, spinal cord and brain injuries, heart, lung, and kidney disorders, and other chronic diseases.<br><br>He is an author, has published numerous scientific papers, lectured around the United States, appeared on numerous national and international podcasts, radio, and television programs, and currently resides in Santa Monica, California, and Las Vegas, Nevada.'
    },
    'steve-safran': {
        name: 'Steve Safran',
        title: 'Chief Operating Officer',
        photo: 'images/steveS-T.png',
        bio: 'Steve attended the University of Wisconsin-Madison for his BA, Northwestern University for his MA in Economics, and the University of Rochester for his MBA. He has extensive experience and is an accomplished marketing and business development leader with hunter-focused development skills creating that 1+1=3 impact based on 30+ years of quantifiable success generating strategic partnerships for Fortune 500 national flag ship brands (e.g., Johnson & Johnson), national media (i.e., Conde Nast), non-profit health (e.g., American Diabetes Association) and startups to generate incremental revenues and brand awareness. His marketing wisdom has been built on a Fortune 500 consumer marketing foundation of developing and executing marketing plans with P&L budget responsibility, including new product development, cause marketing, licensing, advertising, and promotions. He has been recognized for his collaborative management leadership experience, covered in leading business publications.'
    },
    'boon': {
        name: 'Boon Saysavanh',
        title: 'Vice President of Business Development',
        photo: 'images/Boon-T.png',
        bio: 'Boon is an experienced entrepreneur and investor with a background in financial services, technology, and private equity. As Co-Founder/CRO of Dr. Shares and Chief Sales Officer at Kwik, he has led high-growth initiatives and structured investment funds for private equity firms. Before his successful exit at CrowdEngine, a white-label SaaS provider for raising online capital, Boon helped facilitate over 3 billion in funding through CrowdEngine. Boon\'s expertise in scalable financial strategies and capital efficiency ensures North Star\'s investment model aligns with long-term investor success.'
    },
    'shannon': {
        name: 'Shannon Duerst',
        title: 'Chief Brand Officer',
        photo: 'images/shannon-T.049.png',
        bio: 'Ms. Duerst has over twenty-five years of retail experience and fifteen years of global C-Level executive management experience specializing in international sales, brand management, and exporting. She served for over 10 years as vice president of international business, where she travelled the world overseeing multimillion-dollar accounts for the clothing giant BCBG. Ms. Duerst is well-versed in a variety of operational functions, including business development and growth strategies, contract negotiations, brand consistency across all channels, forecasting, and team management. Ms Duerst has worked in New York City, Seattle, Washington, and now resides in Santa Monica, CA.'
    },
    'ari': {
        name: 'Ari Landau',
        title: 'President of Business Relations',
        photo: 'images/Ari-T.png',
        bio: 'Ari Landau has built a distinguished career in the entertainment industry, collaborating with Fortune 500 companies and top global brands. He is the founder and principal of AJL Ventures, Inc. (<a href="http://www.ajltalent.com" target="_blank">www.ajltalent.com</a>), a consulting firm that connects agencies, brands, and companies with A-list talent, major record labels, top keynote speakers, film and TV networks and professional sports leagues.<br><br>Through AJL Ventures, Ari offers expertise in business development, strategic partnerships, creative marketing, content licensing, deal negotiation, and monetization strategies. His client list includes major brands such as Adobe, Oracle, CrowdStrike, Coldwell Banker, Golin, and Google. Ari has contributed to campaigns featuring high-profile names including Barack Obama, Kelly Clarkson, Pitbull, LL Cool J, Shaquille O\'Neal, Kevin Hart, Chris Brown, Robin Thicke, Maroon 5, Sting, Rihanna, to name a few.<br><br>Prior to launching AJL Ventures, Ari held key executive and consulting roles at major entertainment companies including Island/Def Jam Records (Universal Music Group), Warner Brothers Records, DreamWorks Music, Sony Music, Warner Chappell Music Publishing, MP3.com and led talent strategy for both the Hard Rock Hotel & Casino Las Vegas and Palms Hotel & Casino Las Vegas.<br><br>In addition to his work in entertainment, Ari\'s personal health journey led him to discover the world of functional and integrative medicine over two decades ago. This passion evolved into a mission to help others heal. He is the founder of A Mind 4 Tomorrow (<a href="http://www.am4t.com" target="_blank">www.am4t.com</a>), a nonprofit mental health organization that leverages his entertainment relationships to raise awareness and support for those in need.<br><br>Ari lives by the belief that "Health is Wealth."'
    },
    'james': {
        name: 'James Boldt',
        title: 'National Sales Director, Red Pill Medical CBD Products',
        photo: 'images/placeholder-james.jpg',
        bio: 'James Boldt serves as National Sales Director for Red Pill Medical CBD Products, bringing extensive experience in sales leadership and product distribution. His expertise in developing sales strategies and building strategic partnerships has been instrumental in expanding Red Pill Medical\'s reach across national markets.'
    },
    'steve-barone': {
        name: 'Steve Barone',
        title: 'National Director of Talent Acquisition',
        photo: 'images/steveB-T.png',
        bio: 'Steve Barone leads talent acquisition efforts for Red Pill Holding as National Director of Talent Acquisition. His expertise in identifying and recruiting top-tier professionals ensures the organization continues to attract exceptional talent across all divisions and strategic initiatives.'
    },
    'harsukh': {
        name: 'Harsukh Gevariya',
        title: 'Red Pill Medical Inc. Advisory Board',
        photo: 'images/harkush-T.png',
        bio: 'Harsukh Gevariya serves on the Red Pill Medical Inc. Advisory Board, providing strategic guidance and industry expertise to support the company\'s growth and development initiatives in the medical and biotechnology sectors.'
    },
    'derek': {
        name: 'Derek Johnson',
        title: 'Red Pill Medical Inc. Advisory Board',
        photo: 'images/derek-T.png',
        bio: 'Derek Johnson, BCIH, CN, B.S. in Dietetics, is an integrative nutritionist with nearly three decades of experience helping people achieve sustainable, whole-body health through personalized nutrition and functional strategies. His work centers on the gut-brain connection—developing individualized protocols rooted in biochemistry, functional lab testing, and lifestyle interventions that go far beyond conventional nutrition plans.<br><br>Derek specializes in translating complex data from advanced at-home lab testing into practical, science-backed nutrition and lifestyle plans that support healing and long-term vitality. Whether it\'s improving digestion, enhancing cognitive clarity, or building metabolic resilience, Derek empowers individuals to uncover the root causes of their symptoms and take meaningful action toward lasting wellness.<br><br>Derek is also a colleague and friend of Dr. Gregory Smith. Together, they share a deeply aligned approach to integrative care—grounded in curiosity, clinical precision, and a commitment to treating the whole person.'
    },
    'eli': {
        name: 'Eli Sarfaty, Esq',
        title: 'Your Cell Regeneration Advisory Board',
        photo: 'images/Eli-T.png',
        bio: 'Mr. Sarfaty holds a joint JD/MBA from Rutgers Law School and Rutgers Graduate School of Management and is licensed in New York (State, Federal, and Bankruptcy Courts).<br><br>Before practicing law, Mr. Sarfaty launched a successful publishing company in New York and London, generating multi-million-dollar sales across major U.S. and U.K. markets. That business-first perspective still drives his legal approach today.<br><br>His area of expertise includes:<br><br>• Mergers & Acquisitions<br>• Business Strategy & Implementation<br>• Employment Law<br>• Contracts & Real Estate<br>• Criminal Law<br>• Trusts & Estates Planning<br>• Dispute Resolution, Mediation & Arbitration<br>• Litigation in State, Federal & Bankruptcy Courts'
    }
};

// Company links data
const companyLinks = {
    'rpm': 'https://redpillmedical.com',
    'ycr': 'https://tinyurl.com/yourcellregeneration',
    'rpm-deck': 'https://tinyurl.com/redpillmedical'
};

// Custom Alert Modal
function showCustomAlert(message, title = 'Notice') {
    const modal = document.getElementById('custom-alert-modal');
    const titleEl = document.getElementById('alert-title');
    const messageEl = document.getElementById('alert-message');
    
    if (!modal || !titleEl || !messageEl) {
        // Fallback to browser alert if elements not found
        alert(message);
        return;
    }
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Custom Password Modal
function showCustomPasswordPrompt(message, callback) {
    const modal = document.getElementById('custom-password-modal');
    const messageEl = document.getElementById('password-message');
    const passwordInput = document.getElementById('password-input');
    
    if (!modal || !messageEl || !passwordInput) {
        // Fallback to browser prompt if elements not found
        const password = prompt(message);
        if (callback) callback(password);
        return;
    }
    
    messageEl.textContent = message;
    passwordInput.value = '';
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus the input field
    setTimeout(() => passwordInput.focus(), 100);
    
    // Store callback for later use
    modal._callback = callback;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Initialize team members
    const teamMembers = document.querySelectorAll('.team-member');
    console.log('Found team members:', teamMembers.length);
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            console.log('Team member clicked:', this);
            const memberId = this.dataset.member;
            console.log('Member ID:', memberId);
            openBioModal(memberId);
        });
    });

    // Initialize company logos
    const companyLogos = document.querySelectorAll('.company-logo');
    console.log('Found company logos:', companyLogos.length);
    companyLogos.forEach(logo => {
        logo.addEventListener('click', function() {
            console.log('Company logo clicked:', this);
            const companyId = this.dataset.company;
            console.log('Company ID:', companyId);
            if (companyId === 'ycr') {
                showCustomAlert('Website Under Construction');
            } else {
                const url = companyLinks[companyId];
                if (url && url !== '#') {
                    window.open(url, '_blank');
                } else {
                    showCustomAlert(`${companyId.toUpperCase()} website link will be added soon.`);
                }
            }
        });
    });

    // Initialize contact links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
        });
    });

    // Initialize investor deck navigation link
    const investorDeckNavLinks = document.querySelectorAll('a[href="#investor-deck"]');
    investorDeckNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to the investor deck section
            const investorDeckSection = document.querySelector('.investor-deck-subsection');
            if (investorDeckSection) {
                investorDeckSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize other navigation links with proper offset
    const navLinks = document.querySelectorAll('a[href="#team"], a[href="#companies"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20; // 20px additional offset
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize footer company links
    const footerCompanyLinks = document.querySelectorAll('.footer-company-link');
    console.log('Found footer company links:', footerCompanyLinks.length);
    footerCompanyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Footer company link clicked:', this);
            const companyId = this.dataset.company;
            console.log('Footer Company ID:', companyId);
            if (companyId === 'ycr') {
                showCustomAlert('Website Under Construction');
            } else {
                const url = companyLinks[companyId];
                if (url && url !== '#') {
                    window.open(url, '_blank');
                } else {
                    showCustomAlert(`${companyId.toUpperCase()} website link will be added soon.`);
                }
            }
        });
    });

    // Initialize theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    // Load saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        console.log('Theme switched to:', isLightMode ? 'light' : 'dark');
    });

    // Initialize modal close functionality for both modals
    const bioModal = document.getElementById('bio-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeBtns = document.querySelectorAll('.close');
    
    // Close button functionality
    closeBtns.forEach(closeBtn => {
        closeBtn.onclick = function() {
            console.log('Close button clicked!');
            bioModal.style.display = 'none';
            contactModal.style.display = 'none';
            document.body.style.overflow = '';
        };
    });
    
    // Click outside to close
    [bioModal, contactModal].forEach(modal => {
        if (modal) {
            modal.onclick = function(event) {
                if (event.target === modal) {
                    console.log('Clicked outside modal');
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            };
        }
    });
    
    // Close with Escape key (for bio and contact modals)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (bioModal.style.display === 'block' || contactModal.style.display === 'block') {
                console.log('Escape key pressed');
                bioModal.style.display = 'none';
                contactModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    });

    // Initialize YCR investor deck
    const ycrDeckLink = document.getElementById('ycr-deck-link');
    if (ycrDeckLink) {
        ycrDeckLink.addEventListener('click', function() {
            showCustomPasswordPrompt('Enter password to access Your Cell Regeneration Investor Deck:', (password) => {
                if (password && password.toLowerCase() === 'painkiller') {
                    window.open(companyLinks['ycr'], '_blank');
                } else {
                    showCustomAlert('Incorrect password. Access denied.');
                }
            });
        });
    }

    // Initialize Red Pill Medical investor deck
    const rpmDeckLink = document.getElementById('rpm-deck-link');
    if (rpmDeckLink) {
        rpmDeckLink.addEventListener('click', function() {
            showCustomPasswordPrompt('Enter password to access Red Pill Medical Investor Deck:', (password) => {
                if (password && password.toLowerCase() === 'painkiller') {
                    window.open(companyLinks['rpm-deck'], '_blank');
                } else {
                    showCustomAlert('Incorrect password. Access denied.');
                }
            });
        });
    }

    // Initialize custom modal functionality
    initializeCustomModals();
});

// Open bio modal for specific team member
function openBioModal(memberId) {
    const modal = document.getElementById('bio-modal');
    const modalPhoto = document.getElementById('modal-photo');
    const modalName = document.getElementById('modal-name');
    const modalTitle = document.getElementById('modal-title');
    const modalBioText = document.getElementById('modal-bio-text');
    
    const memberData = teamBios[memberId];
    
    if (!memberData) {
        console.error('Member data not found for:', memberId);
        return;
    }
    
    console.log('Opening modal for:', memberData.name);
    
    // Populate modal content
    modalPhoto.src = memberData.photo;
    modalPhoto.alt = memberData.name;
    modalName.textContent = memberData.name;
    modalTitle.textContent = memberData.title;
    modalBioText.innerHTML = memberData.bio;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

// Open contact modal
function openContactModal() {
    const contactModal = document.getElementById('contact-modal');
    
    console.log('Opening contact modal');
    
    // Show modal
    contactModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position
    const modalContent = contactModal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}


// Initialize custom modals
function initializeCustomModals() {
    // Ensure modals are hidden on page load
    const alertModal = document.getElementById('custom-alert-modal');
    const passwordModal = document.getElementById('custom-password-modal');
    alertModal.style.display = 'none';
    passwordModal.style.display = 'none';
    
    // Alert modal OK button
    const alertOkBtn = document.getElementById('alert-ok-btn');
    alertOkBtn.addEventListener('click', function() {
        const modal = document.getElementById('custom-alert-modal');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Password modal buttons
    const passwordOkBtn = document.getElementById('password-ok-btn');
    const passwordCancelBtn = document.getElementById('password-cancel-btn');
    const passwordInput = document.getElementById('password-input');
    
    passwordOkBtn.addEventListener('click', function() {
        const password = passwordInput.value;
        const callback = passwordModal._callback;
        
        passwordModal.style.display = 'none';
        document.body.style.overflow = '';
        
        if (callback) {
            callback(password);
        }
    });
    
    passwordCancelBtn.addEventListener('click', function() {
        passwordModal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Allow Enter key to submit password
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            passwordOkBtn.click();
        }
    });
    
    // Allow Escape key to close custom modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const alertModal = document.getElementById('custom-alert-modal');
            const passwordModal = document.getElementById('custom-password-modal');
            
            if (alertModal && alertModal.style.display === 'flex') {
                alertOkBtn.click();
            }
            if (passwordModal && passwordModal.style.display === 'flex') {
                passwordCancelBtn.click();
            }
        }
    });
    
    // Click outside to close custom modals
    const customModals = [
        document.getElementById('custom-alert-modal'),
        document.getElementById('custom-password-modal')
    ];
    
    customModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                if (modal.id === 'custom-alert-modal') {
                    alertOkBtn.click();
                } else if (modal.id === 'custom-password-modal') {
                    passwordCancelBtn.click();
                }
            }
        });
    });
}