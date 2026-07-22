document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const mainCard = document.getElementById('main-card');
    const container = document.getElementById('canvas-container');
    const landingSection = document.getElementById('landing-section');
    const mainSection = document.getElementById('main-section');
    const beginBtn = document.getElementById('begin-btn');
    const typewriterEl = document.getElementById('typewriter');
    
    // Message Card elements
    const readMsgBtn = document.getElementById('read-msg-btn');
    const messageCard = document.getElementById('message-card');
    const letterContent = document.getElementById('letter-content');
    
    // Final Words elements
    const nextBtn = document.getElementById('next-btn');
    const finalWordsSection = document.getElementById('final-words-section');
    const finalSentencesContainer = document.getElementById('final-sentences');
    const finalTitle = document.querySelector('.final-title');
    const glowingHeartEnd = document.getElementById('glowing-heart-end');
    
    // Ultimate Surprise elements
    const ultimateBtn = document.getElementById('ultimate-btn');
    const ultimateSection = document.getElementById('ultimate-surprise-section');
    
    const finalSentences = [
        "Some friendships are gifts.",
        "Meeting you has been one of those gifts.",
        "Thank you for being my best friend.",
        "May your dreams come true.",
        "May your smile never fade.",
        "You deserve all the happiness in the world.",
        "Happy Birthday, Musfira Ahmed."
    ];
    
    // Music Controls
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isMusicPlaying = false;
    let musicStarted = false;
    
    if(musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicBtn.querySelector('.icon').innerText = '▶️';
                isMusicPlaying = false;
            } else {
                bgMusic.play().then(() => {
                    if (!musicStarted) {
                        musicStarted = true;
                        musicBtn.querySelector('.text').style.display = 'none';
                        musicBtn.style.padding = '15px';
                        musicBtn.style.borderRadius = '50%';
                        musicBtn.style.width = '50px';
                        musicBtn.style.height = '50px';
                    }
                    musicBtn.querySelector('.icon').innerText = '⏸️';
                    isMusicPlaying = true;
                }).catch(e => {
                    console.log('Audio playback failed', e);
                    alert("Please place a 'music.mp3' file in the project folder to enable background music!");
                });
            }
        });
    }
    
    const letterText = `Dear Musfira Ahmed,
Today is all about celebrating someone truly wonderful.
You are one of the kindest, strongest, and most amazing people I have ever known.
Thank you for always being such a great friend.
Your kindness, your smile, and your positivity make every moment brighter.
May this new year of your life bring endless happiness, success, peace, good health, and beautiful memories.
Keep smiling.
Keep believing in yourself.
Never stop being the amazing person you are.
Happy Birthday once again.
Best Wishes,
Hamza Badshah ❤️🎂`;

    // Handle transition to message card
    if(readMsgBtn) {
        readMsgBtn.addEventListener('click', () => {
            // Fade out the reveal content
            mainCard.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            mainCard.style.opacity = 0;
            mainCard.style.transform = "translateY(-30px)";
            
            setTimeout(() => {
                mainCard.style.display = 'none';
                messageCard.style.display = 'block';
                
                // Force reflow
                void messageCard.offsetWidth;
                
                messageCard.classList.remove('hidden');
                
                startLetterTypewriter();
            }, 600);
        });
    }

    function startLetterTypewriter() {
        let index = 0;
        letterContent.innerHTML = '';
        
        function type() {
            if (index < letterText.length) {
                if (letterText.charAt(index) === '\n') {
                    letterContent.innerHTML += '<br><div style="height: 1.5vh;"></div>';
                } else {
                    letterContent.innerHTML += letterText.charAt(index);
                }
                index++;
                
                let delay = 25; // Fast typing base speed
                if (letterText.charAt(index - 1) === '.' || letterText.charAt(index - 1) === ',') {
                    delay = 150; // Pause briefly at punctuation
                }
                
                setTimeout(type, delay);
            } else {
                // Attach blinking cursor at the end
                letterContent.innerHTML += '<span class="typewriter-cursor"></span>';
                
                // Show Next Button
                if(nextBtn) {
                    setTimeout(() => {
                        nextBtn.style.display = 'inline-block';
                        void nextBtn.offsetWidth;
                        nextBtn.style.opacity = 1;
                        const nextHelper = document.getElementById('next-helper');
                        if (nextHelper) {
                            nextHelper.style.display = 'block';
                            void nextHelper.offsetWidth;
                            nextHelper.style.opacity = 1;
                        }
                    }, 500);
                }
            }
        }
        
        setTimeout(type, 800); // Initial delay
    }

    // Handle transition to final words
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            messageCard.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            messageCard.style.opacity = 0;
            messageCard.style.transform = "translateY(-30px)";
            
            setTimeout(() => {
                messageCard.style.display = 'none';
                finalWordsSection.style.display = 'block';
                void finalWordsSection.offsetWidth;
                finalWordsSection.classList.remove('hidden');
                
                startFinalAnimation();
            }, 600);
        });
    }

    function startFinalAnimation() {
        setTimeout(() => {
            finalTitle.classList.add('visible');
        }, 300);

        let delay = 1000;
        finalSentences.forEach((text, index) => {
            const p = document.createElement('p');
            p.classList.add('final-sentence');
            p.innerText = text;
            finalSentencesContainer.appendChild(p);
            
            setTimeout(() => {
                p.classList.add('visible');
            }, delay);
            
            delay += 1200; // Time between each sentence
        });

        setTimeout(() => {
            glowingHeartEnd.style.display = 'block';
            void glowingHeartEnd.offsetWidth;
            glowingHeartEnd.classList.add('visible');
            
            if(ultimateBtn) {
                setTimeout(() => {
                    ultimateBtn.style.display = 'block';
                    void ultimateBtn.offsetWidth;
                    ultimateBtn.style.opacity = 1;
                    const ultimateHelper = document.getElementById('ultimate-helper');
                    if (ultimateHelper) {
                        ultimateHelper.style.display = 'block';
                        void ultimateHelper.offsetWidth;
                        ultimateHelper.style.opacity = 1;
                    }
                }, 1000);
            }
        }, delay + 500);
    }
    
    // Handle transition to ultimate surprise
    if(ultimateBtn) {
        ultimateBtn.addEventListener('click', () => {
            finalWordsSection.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            finalWordsSection.style.opacity = 0;
            finalWordsSection.style.transform = "translateY(-30px)";
            
            setTimeout(() => {
                finalWordsSection.style.display = 'none';
                ultimateSection.style.display = 'block';
                void ultimateSection.offsetWidth;
                ultimateSection.classList.remove('hidden');
                
                triggerUltimateCelebration();
            }, 600);
        });
    }

    function triggerUltimateCelebration() {
        // Boost background brightness slightly
        document.body.style.background = "linear-gradient(135deg, #2e1065, #4c1d95)";
        
        // Massive Confetti Shower
        const confettiContainer = document.getElementById('confetti-container');
        if(confettiContainer) {
            const confettiColors = ['#ffe4e6', '#fef08a', '#d9f99d', '#bfdbfe', '#e9d5ff', '#fbcfe8'];
            for(let i=0; i<300; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti-piece');
                    confetti.style.left = `${Math.random() * 100}%`;
                    confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                    confetti.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 2 + 1})`;
                    confettiContainer.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 7000);
                }, i * 15);
            }
        }
        
        // Massive Fireworks Display
        for(let i=0; i<8; i++) {
            setTimeout(() => {
                createFireworks(Math.random() * window.innerWidth, Math.random() * (window.innerHeight/1.5));
            }, i * 400);
        }
        let fireworkInterval = setInterval(() => {
            createFireworks(Math.random() * window.innerWidth, Math.random() * (window.innerHeight/1.5));
        }, 600);
        setTimeout(() => clearInterval(fireworkInterval), 15000);
        
        // Grand Balloon Release
        const balloonContainer = document.getElementById('balloon-container');
        if(balloonContainer) {
            const balloonColors = ['#fecdd3', '#e9d5ff', '#ddd6fe', '#c7d2fe', '#bae6fd'];
            for(let i=0; i<60; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.classList.add('balloon');
                    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
                    balloon.style.setProperty('--b-color', color);
                    balloon.style.left = `${Math.random() * 90 + 5}%`;
                    balloon.style.animationDuration = `${Math.random() * 6 + 5}s`; // 5 to 11s
                    balloon.style.transform = `translateX(${Math.random() * 60 - 30}px) scale(${Math.random() * 0.5 + 0.8})`;
                    balloonContainer.appendChild(balloon);
                    setTimeout(() => balloon.remove(), 12000);
                }, i * 80);
            }
        }
    }
    
    // Typewriter effect logic
    const textToType = "So I made this little surprise...";
    let typeIndex = 0;
    
    function typeWriter() {
        if (typeIndex < textToType.length) {
            typewriterEl.innerHTML += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, 50);
        } else {
            // Stop blinking cursor after typing is done
            setTimeout(() => {
                typewriterEl.classList.remove('typewriter-cursor');
            }, 2000);
        }
    }

    // Start typewriter after a delay (waits for title to fade in)
    setTimeout(() => {
        typewriterEl.classList.add('typewriter-cursor');
        typeWriter();
    }, 1500);

    // Loading Screen Logic
    const loadingSection = document.getElementById('loading-section');
    const loadingText = document.getElementById('loading-text');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const heartsContainer = document.getElementById('hearts-container');

    const loadingPhrases = [
        "Collecting beautiful memories...",
        "Wrapping smiles...",
        "Preparing happiness...",
        "Adding a little magic...",
        "Almost ready..."
    ];

    // Transition from landing to loading
    beginBtn.addEventListener('click', () => {
        landingSection.classList.remove('active');
        landingSection.classList.add('hidden');
        
        setTimeout(() => {
            landingSection.style.display = 'none';
            loadingSection.classList.remove('hidden');
            loadingSection.classList.add('active');
            
            startLoading();
        }, 800); // Wait for fade out
    });

    function startLoading() {
        let progress = 0;
        let phraseIndex = 0;
        
        // Change text every 1.2 seconds
        const textInterval = setInterval(() => {
            phraseIndex++;
            if (phraseIndex < loadingPhrases.length) {
                loadingText.style.opacity = 0;
                setTimeout(() => {
                    loadingText.innerText = loadingPhrases[phraseIndex];
                    loadingText.style.opacity = 1;
                }, 300);
            }
        }, 1200);

        // Progress bar simulation
        const progressInterval = setInterval(() => {
            progress += Math.random() * 5; 
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                clearInterval(textInterval);
                
                progressBar.style.width = `100%`;
                progressPercentage.innerText = `100%`;
                
                // Show burst of hearts
                for(let i=0; i<8; i++) {
                    setTimeout(createHeart, i*150);
                }
                
                // Transition to main screen
                setTimeout(() => {
                    loadingSection.classList.remove('active');
                    loadingSection.classList.add('hidden');
                    
                    setTimeout(() => {
                        loadingSection.style.display = 'none';
                        mainSection.classList.remove('hidden');
                        mainSection.classList.add('active');
                        
                        setTimeout(() => {
                            mainCard.classList.add('active');
                            triggerReveal();
                        }, 100);
                    }, 800);
                }, 1000);
            } else {
                progressBar.style.width = `${progress}%`;
                progressPercentage.innerText = `${Math.floor(progress)}%`;
                
                // Randomly spawn a heart or sparkle
                if (Math.random() < 0.3) {
                    createHeart();
                }
                if (Math.random() < 0.4) {
                    createSparkle();
                }
            }
        }, 100);
    }
    
    function triggerReveal() {
        document.body.classList.add('bright-night');
        
        // Initial big fireworks
        setTimeout(() => createFireworks(), 500);
        setTimeout(() => createFireworks(), 1000);
        setTimeout(() => createFireworks(), 1500);
        
        // Continuous fireworks randomly
        let fireworkInterval = setInterval(() => {
            createFireworks(Math.random() * window.innerWidth, Math.random() * (window.innerHeight/2));
        }, 1500);
        setTimeout(() => clearInterval(fireworkInterval), 12000); // Stop after 12s
        
        // Balloons
        const balloonContainer = document.getElementById('balloon-container');
        if(balloonContainer) {
            const balloonColors = ['#fecdd3', '#e9d5ff', '#ddd6fe', '#c7d2fe', '#bae6fd'];
            for(let i=0; i<30; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.classList.add('balloon');
                    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
                    balloon.style.setProperty('--b-color', color);
                    balloon.style.left = `${Math.random() * 90 + 5}%`;
                    balloon.style.animationDuration = `${Math.random() * 5 + 7}s`;
                    balloon.style.transform = `translateX(${Math.random() * 40 - 20}px)`;
                    
                    balloonContainer.appendChild(balloon);
                    setTimeout(() => balloon.remove(), 12000);
                }, i * 200);
            }
        }
        
        // Confetti
        const confettiContainer = document.getElementById('confetti-container');
        if(confettiContainer) {
            const confettiColors = ['#ffe4e6', '#fef08a', '#d9f99d', '#bfdbfe', '#e9d5ff', '#fbcfe8'];
            for(let i=0; i<200; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti-piece');
                    confetti.style.left = `${Math.random() * 100}%`;
                    confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                    confetti.style.animationDuration = `${Math.random() * 3 + 3}s`;
                    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                    
                    confettiContainer.appendChild(confetti);
                    setTimeout(() => confetti.remove(), 6000);
                }, i * 30);
            }
        }
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = Math.random() > 0.4 ? '❤️' : '🎂';
        
        const offset = (Math.random() - 0.5) * 150;
        heart.style.left = `calc(50% + ${offset}px)`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2500);
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const offset = (Math.random() - 0.5) * 150;
        sparkle.style.left = `calc(50% + ${offset}px)`;
        
        heartsContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }

    // Function to create background stars
    function createStars() {
        const starCount = window.innerWidth < 768 ? 100 : 200; // Less stars on mobile for performance
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random properties for natural look
            const size = Math.random() * 2 + 0.5;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 4 + 2;
            const delay = Math.random() * 5;
            
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            container.appendChild(star);
        }
    }

    // Function to create glowing floating particles
    function createParticles() {
        const particleCount = window.innerWidth < 768 ? 15 : 30;
        const colors = [
            'rgba(139, 92, 246, 0.4)', // Purple
            'rgba(59, 130, 246, 0.4)', // Blue
            'rgba(236, 72, 153, 0.4)'  // Pink
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 20 + 8;
            const x = Math.random() * 100;
            // Spread vertical starting positions
            const y = Math.random() * 50; 
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 15;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}%`;
            particle.style.bottom = `-${y}%`;
            particle.style.background = color;
            particle.style.boxShadow = `0 0 ${size}px ${color}`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            container.appendChild(particle);
        }
    }

    // Interactive 3D hover effect on main card
    document.addEventListener('mousemove', (e) => {
        if (mainCard.classList.contains('hidden')) return;
        
        // Calculate mouse position relative to center of screen
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        
        mainCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset card transform when mouse leaves window
    document.addEventListener('mouseleave', () => {
        mainCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    // Action button click handler
    revealBtn.addEventListener('click', () => {
        // Hide main card
        mainCard.classList.add('hidden');
        
        // Trigger celebration fireworks
        createFireworks();
        
        // Show wish card after transition
        setTimeout(() => {
            mainCard.style.display = 'none';
            wishCard.style.display = 'block';
            
            // Force browser reflow to ensure transition works
            void wishCard.offsetWidth;
            
            wishCard.classList.remove('hidden');
        }, 800);
    });

    // Function to create magical particle explosion (fireworks)
    function createFireworks(x = window.innerWidth / 2, y = window.innerHeight / 2) {
        const colors = ['#c084fc', '#818cf8', '#f472b6', '#fde047', '#ffffff'];
        const originX = x;
        const originY = y;
        
        for (let i = 0; i < 60; i++) {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.left = `${originX}px`;
            firework.style.top = `${originY}px`;
            firework.style.width = '6px';
            firework.style.height = '6px';
            firework.style.borderRadius = '50%';
            firework.style.pointerEvents = 'none';
            firework.style.zIndex = '100';
            
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.background = color;
            firework.style.boxShadow = `0 0 15px ${color}`;
            
            // Random explosion physics
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 15 + 5;
            const tx = Math.cos(angle) * velocity * 25;
            const ty = Math.sin(angle) * velocity * 25;
            
            // Use Web Animations API for smooth performant animations
            firework.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: Math.random() * 1500 + 1200, // Longer hang time
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });
            
            document.body.appendChild(firework);
            
            // Clean up elements from DOM
            setTimeout(() => {
                firework.remove();
            }, 2500);
        }
    }

    // Mouse Glow Effect
    const mouseGlow = document.getElementById('mouse-glow');
    document.addEventListener('mousemove', (e) => {
        if(mouseGlow) {
            mouseGlow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
    });

    // Function to create background celebration emojis
    function createBgHearts() {
        const heartCount = window.innerWidth < 768 ? 40 : 100; // Massively increased amount
        const symbols = ['❤️', '🎂', '✨', '🎈', '🎉', '🎁', '💖', '🌸'];
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('bg-heart');
            heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            
            const x = Math.random() * 100;
            const size = Math.random() * 2 + 1; // Larger emojis
            const duration = Math.random() * 12 + 8; // 8-20s (faster floating)
            const delay = Math.random() * 20;
            
            heart.style.left = `${x}vw`;
            heart.style.bottom = `-50px`;
            heart.style.fontSize = `${size}rem`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `-${delay}s`; // Negative delay to fill screen immediately
            
            document.getElementById('particles-container').appendChild(heart);
        }
    }

    // Function to create fireflies
    function createFireflies() {
        const fireflyCount = window.innerWidth < 768 ? 20 : 40; // More fireflies
        for (let i = 0; i < fireflyCount; i++) {
            const firefly = document.createElement('div');
            firefly.classList.add('firefly');
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 2 + 1; // Blink duration
            
            firefly.style.left = `${x}%`;
            firefly.style.top = `${y}%`;
            firefly.style.animationDuration = `${duration}s`;
            
            animateFirefly(firefly);
            container.appendChild(firefly);
        }
    }

    function animateFirefly(firefly) {
        const currentX = parseFloat(firefly.style.left) || Math.random() * 100;
        const currentY = parseFloat(firefly.style.top) || Math.random() * 100;
        
        const newX = currentX + (Math.random() * 10 - 5);
        const newY = currentY + (Math.random() * 10 - 5);
        
        const boundedX = Math.max(0, Math.min(100, newX));
        const boundedY = Math.max(0, Math.min(100, newY));
        
        const duration = Math.random() * 3000 + 2000;
        
        firefly.animate([
            { left: `${currentX}%`, top: `${currentY}%` },
            { left: `${boundedX}%`, top: `${boundedY}%` }
        ], {
            duration: duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        }).onfinish = () => {
            firefly.style.left = `${boundedX}%`;
            firefly.style.top = `${boundedY}%`;
            animateFirefly(firefly);
        };
    }

    // Initialize environment
    createStars();
    createParticles();
    createBgHearts();
    createFireflies();
});
