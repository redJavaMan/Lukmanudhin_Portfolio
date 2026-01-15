// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ========== HERO SECTION ANIMATIONS ==========
    // Create floating particles in hero section
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animationDuration = duration + 's';
            
            // Random delay
            const delay = Math.random() * 5;
            particle.style.animationDelay = delay + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize particles on page load
    createParticles();

    // Add mouse move parallax effect to hero section
    const hero = document.querySelector('.hero');
    const floatingShapes = document.querySelector('.floating-shapes');

    if (hero && floatingShapes) {
        hero.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // ========== MOBILE NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when a nav link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '20px 0';
        }
    });

    // ========== ACTIVE NAVIGATION LINK ==========
    const sections = document.querySelectorAll('section');
    const navLinks2 = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks2.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========== BACK TO TOP BUTTON ==========
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // ========== DOWNLOAD RESUME BUTTON ==========
    const downloadResumeBtn = document.getElementById('download-resume');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual resume file path
            const resumeUrl = 'Lukmanudhin_Resume.pdf';
            
            // Create a temporary link to trigger download
            const tempLink = document.createElement('a');
            tempLink.href = resumeUrl;
            tempLink.setAttribute('download', 'Lukmanudhin_Resume.pdf');
            tempLink.click();
        });
    }

    // ========== CONTACT FORM SUBMISSION ==========
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // ========== ANIMATION ON SCROLL ==========
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-item, .achievement-item, .education-item, .cert-item, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    // Run once on load
    animateOnScroll();

    // Add initial opacity and transform to elements for animation
    const elementsToAnimate = document.querySelectorAll('.skill-item, .achievement-item, .education-item, .cert-item, .project-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // ========== TYPING ANIMATION FOR HERO SECTION ==========
    function typeEffect(element, text, speed) {
        let i = 0;
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        
        typing();
    }

    // Initialize typing effect - uncomment to use
    const heroSubtitle = document.querySelector('.hero-content h2');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.innerHTML = '';
        typeEffect(heroSubtitle, originalText, 100);
    }

    // ========== PROJECT SECTION FUNCTIONALITY ==========
    // Project data
    const projectData = {
        project1: {
            title: "Automated End-to-End Testing Framework for Web Applications",
            description: `Developed and implemented a robust Behavior-Driven Development (BDD) testing framework using Cucumber and Selenium WebDriver to automate end-to-end testing for web applications, ensuring high-quality user experiences by validating application behavior against predefined Gherkin scenarios.
            
            Designed and maintained Page Object Model (POM) classes to enhance code reusability and maintainability, configured and executed test suites across multiple browsers (e.g., Chrome, Firefox) using Maven, and generated detailed test reports (HTML, JSON, XML) stored in target/cucumber-reports for analysis and debugging.
            
            Collaborated with cross-functional teams to align test cases with business requirements, ensuring comprehensive workflow coverage, and contributed to project documentation, including setup instructions, configuration guidelines, and contribution processes.`,
            skills: ["Java", "Selenium WebDriver", "TestNG", "Cucumber (BDD)", "Maven", "Page Object Model"],
            link: "https://github.com/redJavaMan/amazon-ui-e2e-tests-cucumber"
        },
        project2: {
            title: "Emirates E-Commerce UI/API Test Automation Framework",
            description: `Developed and maintained an end-to-end test automation framework for Emirates' e-commerce platform, validating critical user journeys such as shopping cart functionality (item addition, counter validation, cart totals) and multi-currency conversion workflows.
            
            Integrated Selenium WebDriver with RestAssured to perform UI automation and API-based exchange rate verification. Implemented parallel test execution (TestNG) with a 2-thread configuration, reducing test suite runtime by 40%.
            
            Utilized the Page Object Model (POM) for maintainable code and Allure Framework for interactive test reporting. Features included cross-browser compatibility, automated screenshot capture on failure, and CI/CD pipeline integration via Maven.`,
            skills: ["Java", "Selenium WebDriver", "Rest Assured", "Allure Report", "TestNG", "Maven", "Page Object Model", "Postman"],
            link: "https://github.com/redJavaMan/emirates-ui-e2e-test"
        },
        project3: {
            title: "Udacity Catalog BDD Testing Framework",
            description: `Developed and implemented a comprehensive automated testing framework for the Udacity Catalog using Playwright, Cucumber, and TypeScript. This Behavior-Driven Development (BDD) framework integrates UI and API testing with detailed Allure reporting capabilities.
            
            The architecture follows Page Object Model principles for maintainable test code while supporting parallel test execution across multiple browsers. Key features include search functionality validation, data consistency verification between UI and API responses, and robust negative testing scenarios.`,
            skills: ["TypeScript", "Playwright", "Cucumber (BDD)", "API Testing", "JavaScript", "Allure Reporting", "Page Object Model (POM)", "Postman"],
            link: "https://github.com/redJavaMan/udacity-bdd-test"
        },
        project4: {
            title: "Mobile Test Automation | Appium Mobile Testing Framework",
            description: `Developed a robust mobile automation testing framework for the General Store Android application using Appium and Java, incorporating a comprehensive Page Object Model (POM) architecture to streamline mobile UI testing and demonstrate advanced test automation techniques and mobile application testing strategies.
            
            Designed a scalable framework supporting multiple test scenarios with dynamic element locators for reliable UI interactions, reusable page objects for efficient test script development, and TestNG integration for structured test case management and execution, while configuring the Appium driver for seamless testing across Android devices and emulators.
            
            The framework highlights expertise in mobile test automation, emphasizing modular design, maintainability, and comprehensive test coverage across diverse user flows in a mobile application.`,
            skills: ["Java", "Appium", "TestNG", "Page Object Model (POM)"],
            link: "https://github.com/redJavaMan/Appium"
        },
        project5: {
            title: "Flipkart E-commerce Selenium Automation Framework",
            description: `Designed and implemented a comprehensive Selenium automation framework for testing the Flipkart e-commerce platform. Built using Java, TestNG, and Selenium WebDriver, this project follows the Page Object Model design pattern for maintainable and scalable test code.
            
            Integrated Extent Reports for detailed test result visualization and documentation. The framework includes configurable test execution parameters, cross-browser testing capabilities, and a structured approach to web element interactions, significantly improving test reliability and reducing maintenance overhead.`,
            skills: ["Java", "Selenium WebDriver", "Extent Report", "TestNG", "Maven", "Page Object Model"],
            link: "https://github.com/redJavaMan/flipkart-ui-e2e-test"
        },
        project6: {
            title: "SauceLabs UI Automation Testing",
            description: `This project automates testing for SauceDemo's shopping cart functionality using Selenium WebDriver, TestNG, and the Page Object Model (POM). It validates adding products, verifying details, and completing checkout. Built with Java, Maven, and Allure Reporting, 
            it supports parallel execution and cross-browser testing. Ideal for showcasing expertise in test automation, POM design, and reporting frameworks.`,
            skills: ["Java", "Selenium WebDriver", "Allure Report", "TestNG", "Maven", "Page Object Model"],
            link: "https://github.com/redJavaMan/saucelabs-ui-e2e-test"
        },
        project7: {
            title: "AI-Powered Automation Framework using Playwright MCP",
            description: `A comprehensive Playwright test automation framework leveraging AI agents through Model Context Protocol (MCP). Features three specialized AI agents: Test Planner for exploring web applications and creating test plans, Test Generator for converting plans into executable Playwright tests, 
            and Test Healer for automatically debugging and fixing failing tests. Built with TypeScript, implements Page Object Model pattern, and includes smoke tests for PrestaShop demo site. Integrates Faker.js for dynamic test data generation, custom fixtures, and CSV-based credential management. Demonstrates intelligent test creation, maintenance, and self-healing capabilities powered by Playwright MCP server.`,
            skills: ["Playwtight", "TypeScript", "MCP", "AI-Agent", "Page Object Model"],
            link: "https://github.com/redJavaMan/AI-AGENT-MCP-TEST/"
        },
        project8: {
            title: "Selenium MCP Integration with AI Agent",
            description: `A comprehensive end-to-end test automation framework for the DemoBlaze e-commerce application, built using Selenium WebDriver, Java, Cucumber BDD, and enhanced with AI-powered test generation capabilities through Selenium MCP and Claude AI agents.
            This project demonstrates modern test automation practices by combining traditional Selenium testing with cutting-edge AI assistance. The framework uses Selenium MCP (Model Context Protocol) integration with Claude AI agents to intelligently generate, maintain, and evolve test cases based on the Page Object Model design pattern, enabling automated test creation, smart locator selection, 
            and continuous code quality improvement through AI collaboration.`,
            skills: ["Java", "Selenium WebDriver", "Cucumber (BDD)", "TestNG", "Maven", "Page Object Model", "MCP", "AI-Agent", "Allure Report"],
            link: "https://github.com/redJavaMan/demoblaze-selenium-cucumber-mcp"
        },
        project9: {
            title: "Amazon ZeroStep AI Automation Framework",
            description: `A comprehensive Playwright-based automation framework for testing Amazon across 16+ global marketplaces (US, UK, AU, IN, DE, FR, JP, CN, etc.). Features include AI-powered testing via ZeroStep integration, Page Object Model architecture, automated language detection and switching, dynamic user data generation with unique timestamped emails, 
            and complete account lifecycle management (creation, address setup, payment configuration). Supports parallel execution, cross-browser testing, and provides detailed HTML reports with failure screenshots/videos. Includes OTP polling for verification, multi-popup handling, and environment-specific configurations. 
            Ideal for comprehensive e-commerce testing across diverse geographical regions with minimal maintenance overhead.`,
            skills: ["Playwright", "TypeScript", "ZeroStep AI", "AI-Agent", "Page Object Model"],
            link: "https://github.com/redJavaMan/Amazon-zerostep-automation"
        }
    };

    // Get modal elements
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-modal');
    
    // Add click event to all "Project Details" buttons
    const detailBtns = document.querySelectorAll('.btn-details');
    if (detailBtns) {
        detailBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                const project = projectData[projectId];
                
                // Populate modal with project data
                let skillsHTML = '';
                project.skills.forEach(skill => {
                    skillsHTML += `<span>${skill}</span>`;
                });
                
                modalContent.innerHTML = `
                    <h2 class="modal-project-title">${project.title}</h2>
                    <div class="modal-project-description">
                        ${project.description.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
                    </div>
                    <div class="modal-project-skills">
                        <h4>Technologies Used:</h4>
                        <div class="project-skills">
                            ${skillsHTML}
                        </div>
                    </div>
                    <div class="modal-project-link">
                        <a href="${project.link}" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            View Project on GitHub
                        </a>
                    </div>
                `;
                
                // Show modal with animation
                modal.classList.add('show');
                modal.style.display = 'block';
            });
        });
    }
    
    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });
    }
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (modal && e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Make project images clickable to go to the project link
    const projectImages = document.querySelectorAll('.project-img');
    if (projectImages) {
        projectImages.forEach(img => {
            img.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectLink = projectCard.querySelector('.project-links a').getAttribute('href');
                window.open(projectLink, '_blank');
            });
            
            // Add cursor pointer to show it's clickable
            img.style.cursor = 'pointer';
        });
    }
});