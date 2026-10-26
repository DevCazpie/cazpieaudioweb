/**
 * CAZPIE AUDIO — Portfolio JavaScript
 * Adharsh M. — Game Audio Designer, Music Producer & Game Designer
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Mobile Navigation Menu Toggle
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-item a');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      const icon = mobileMenuBtn.querySelector('svg');
      if (icon) {
        if (isOpen) {
          // Change to Close icon (X)
          icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        } else {
          // Change back to Hamburger icon
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });

    // Close mobile menu when clicking any nav link
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          const icon = mobileMenuBtn.querySelector('svg');
          if (icon) {
            icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
          }
        }
      });
    });

    // Close when clicking outside navbar
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });
  }

  // =========================================================================
  // 2. Active Section Highlighting On Scroll
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`);
      
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // =========================================================================
  // 3. Game Audio Projects Modal & Rich Details Showcase
  // =========================================================================
  /**
   * PROJECT DETAILS DATABASE
   * Add artwork, full descriptions, and OST / audio tracks for any project here.
   * If a project is not listed, it will display the default "COMING SOON" placeholder.
   */
  const PROJECT_DETAILS = {
    'Aaji vs Mumbai': {
      tag: 'IGDC 2026',
      banner: 'assets/aaji-vs-mumbai-banner.png',
      link: {
        label: 'Play on itch.io',
        url: 'https://tanishakatepallewar.itch.io/aaji-vs-mumbai'
      },
      description: [
        "Mumbai has been struck with a disaster. Something even insurance companies can't cover: A total Chai Shortage.",
        "The public has spiraled, the stonks have crashed and innocent chai tapris have been overrun and raided. A similar fate might await Aaji's chai tapris unless... she steps in to save the day.",
        "Play as aaji with some innovative and some traditional weapons to give the incoming hordes of zombies a good beating and send them on their way!",
        "Caution: may induce the Aaji syndrome: symptoms? Masterful control over a chappal to defeat your enemies!"
      ],
      tracks: [
        {
          title: 'Cazpie - Molotov',
          file: 'assets/aaji-vs-mumbai-track.mp3'
        }
      ]
    },
    'Durgavana': {
      tag: 'Personal Project',
      banner: 'assets/durgavana-banner.png',
      description: [
        'DURGAVANA is a 2D side scrolling action fighting game inspired by Indian folklore, the movie Kantara, and the combat styles of Shadow Fight 2, Ninja Arashi 2, and Dan the Man.',
        'The game follows Aryan, a special forces soldier sent into Durgavana Forest on a counterterrorism mission. After losing his squad, he encounters a tribal community that believes the forest is protected by a deity named Vanmayi. As Aryan learns their fighting style and discovers the truth behind the mission, he faces a choice that determines his fate.',
        "The player can choose between two paths: Path of the Guardian, a six level story campaign where Aryan protects the forest and confronts a corrupt general, or Path of the Destroyer, a three wave combat mode where Aryan's violence leads to his death at the hands of the deity.",
        'With silhouette based visuals, hand to hand combat, and a story about greed, sacrifice, and protecting tribal lands, DURGAVANA explores the consequences of power and the importance of respecting nature and culture.'
      ],
      tracks: [
        {
          title: "Adharsh M - A hero's path (From Durgavana)",
          file: 'assets/durgavana-a-heros-path.mp3'
        }
      ]
    },
    'Kishkinda Kand': {
      tag: 'Unreleased',
      description: [
        'Original music composed for Kishkinda Kand.'
      ],
      tracks: [
        {
          title: 'Adharsh M - Kand (From Kishkinda Kand)',
          file: 'assets/kishkinda-kand.mp3'
        }
      ]
    },
    'Knuckle House': {
      tag: 'IGDC 2026',
      banner: 'assets/knuckle-house-banner.png',
      link: {
        label: 'Play Knuckle House on itch.io',
        url: 'https://cccdeadpool-xd.itch.io/knuckle'
      },
      description: [
        'KnuckleHouse is a 3D roguelike combat game, blending 3rd person arena combat with tactical run-based progression.',
        'Fight your way through a branching map of challenging encounters, taking on groups of intelligent enemies in brutal, martial-arts-style brawls. Every fight tests your reflexes and crowd-control skills as you survive waves of attackers. Manage your persistent health between rounds, spend your rewards to grow stronger, and see how far you can survive the gauntlet.'
      ],
      tracks: [
        {
          title: 'Cazpie - Ethereal (From Knuckle House)',
          file: 'assets/knuckle-house-track-1.mp3'
        },
        {
          title: 'Cazpie - melancholic void (From Knuckle House)',
          file: 'assets/knuckle-house-track-2.mp3'
        }
      ]
    },
    'Slime Time': {
      tag: 'Coming Soon',
      banner: 'assets/slime-time-banner.jpg',
      description: [
        'Original soundtrack and sound design preview for Slime Time.',
        'More information about this project will be available here soon.'
      ],
      tracks: [
        {
          title: 'SlimeTime full OST',
          file: 'assets/slime-time-track.mp3'
        }
      ]
    },
    'Sync Pulse': {
      tag: 'Coming Soon',
      banner: 'assets/sync-pulse-banner.jpg',
      description: [
        'Original soundtrack and sound design preview for Sync Pulse.',
        'More information about this project will be available here soon.'
      ],
      tracks: [
        {
          title: 'Cazpie - Back to the game (From Sync Pulse)',
          file: 'assets/sync-pulse-track.mp3'
        }
      ]
    },
    'Niyam': {
      tag: 'Coming Soon',
      banner: 'assets/niyam-banner.png',
      link: {
        label: 'Join the Niyam Discord',
        url: 'https://discord.gg/B43PApJGdT'
      },
      description: [
        'A horror game based in India, coming soon.'
      ],
      tracks: [
        {
          title: 'Adharsh M - Niyam Theme',
          file: 'assets/niyam-theme.mp3'
        }
      ]
    }
  };

  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalProjectName = document.getElementById('modalProjectName');
  const modalProjectTag = document.getElementById('modalProjectTag');
  const modalBodyContainer = document.getElementById('modalBodyContainer');

  let lastActiveElement = null;

  function openProjectModal(card) {
    lastActiveElement = card;
    const projectName = card.getAttribute('data-project') || 'Project';
    const projectTag = card.getAttribute('data-tag') || '';

    if (modalProjectName) modalProjectName.textContent = projectName;
    if (modalProjectTag) modalProjectTag.textContent = projectTag;

    const details = PROJECT_DETAILS[projectName];

    if (details && modalBodyContainer) {
      // Render Rich Details & In-Modal Audio Player
      let descHtml = details.description.map(p => `<p>${escapeHtml(p)}</p>`).join('');
      
      let tracksHtml = '';
      if (details.tracks && details.tracks.length > 0) {
        tracksHtml = `
          <div class="modal-audio-section">
            <div class="modal-audio-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <h4>Game Audio &amp; Soundtrack Preview</h4>
            </div>
            <div class="modal-tracks-list">
              ${details.tracks.map((track, i) => `
                <div class="track-player-card">
                  <div class="track-meta">
                    <span class="track-number">Track 0${i + 1}</span>
                    <span class="track-title">${escapeHtml(track.title)}</span>
                    <span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
                  </div>
                  <audio controls controlsList="nodownload" src="${track.file}" preload="metadata"></audio>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      let linkHtml = '';
      if (details.link && details.link.url) {
        linkHtml = `
          <div class="modal-link-box">
            <a href="${escapeHtml(details.link.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>${escapeHtml(details.link.label || 'Play Project')}</span>
            </a>
          </div>
        `;
      }

      modalBodyContainer.innerHTML = `
        ${details.banner ? `
          <div class="modal-banner">
            <img src="${details.banner}" alt="${escapeHtml(projectName)} Artwork">
          </div>
        ` : ''}
        <div class="modal-description-box">
          <h4>About the Game</h4>
          ${descHtml}
          ${linkHtml}
        </div>
        ${tracksHtml}
      `;

      // Set up audio play listeners so only one track plays at a time
      const audioElements = modalBodyContainer.querySelectorAll('audio');
      audioElements.forEach(audio => {
        const trackCard = audio.closest('.track-player-card');
        audio.addEventListener('play', () => {
          if (trackCard) trackCard.classList.add('playing');
          audioElements.forEach(other => {
            if (other !== audio) {
              other.pause();
            }
          });
        });
        // Equalizer animation stops when the track pauses or ends
        ['pause', 'ended'].forEach(evt => {
          audio.addEventListener(evt, () => {
            if (trackCard) trackCard.classList.remove('playing');
          });
        });
      });
    } else if (modalBodyContainer) {
      // Default Coming Soon Placeholder for unreleased projects
      modalBodyContainer.innerHTML = `
        <div class="modal-content-box">
          <h4 class="modal-section-title" id="modalHeading">PROJECT DETAILS</h4>
          <span class="modal-status-badge">COMING SOON</span>
          <p class="modal-message">More information about this project will be available here soon.</p>
        </div>
      `;
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus close button for accessibility
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeProjectModal() {
    // Stop any playing audio inside modal when closing
    if (projectModal) {
      const playingAudios = projectModal.querySelectorAll('audio');
      playingAudios.forEach(a => {
        a.pause();
        a.currentTime = 0;
      });
    }

    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    // Return focus to previously clicked card
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => openProjectModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);

  // Close when clicking modal backdrop overlay
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // 5. Back to Top Button
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 6. Motion: hero waveform, scroll progress, navbar depth, scroll reveals
  //    (CSS handles prefers-reduced-motion; this only builds the pieces)
  // =========================================================================

  // 6a. Hero waveform bars — a smooth, repeatable shape (no randomness, so it
  //     looks the same on every visit)
  const heroWave = document.getElementById('heroWave');
  if (heroWave) {
    const BAR_COUNT = 64;
    const frag = document.createDocumentFragment();
    for (let n = 0; n < BAR_COUNT; n++) {
      const shape = 0.55 + 0.25 * Math.sin(n * 0.35) + 0.15 * Math.sin(n * 0.9 + 1.3);
      const bar = document.createElement('span');
      bar.style.setProperty('--n', String(BAR_COUNT - 1 - n));
      bar.style.setProperty('--h', Math.round(Math.max(0.18, Math.min(1, shape)) * 100) + '%');
      bar.style.setProperty('--dur', (1.8 + (n % 5) * 0.22).toFixed(2) + 's');
      frag.appendChild(bar);
    }
    heroWave.appendChild(frag);
  }

  // Subtle warm-toned particles and audio-like waveforms across the full page.
  const particleCanvas = document.getElementById('particleCanvas');
  const particleContext = particleCanvas && particleCanvas.getContext('2d');
  if (particleCanvas && particleContext) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles = [];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let particleFrame = 0;
    let wavePhase = 0;

    function resizeParticleCanvas() {
      window.cancelAnimationFrame(particleFrame);
      const bounds = particleCanvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvasWidth = bounds.width;
      canvasHeight = bounds.height;
      particleCanvas.width = Math.round(canvasWidth * pixelRatio);
      particleCanvas.height = Math.round(canvasHeight * pixelRatio);
      particleContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.max(34, Math.min(88, Math.round(canvasWidth * canvasHeight / 18000)));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: 0.8 + Math.random() * 1.5
      }));
      drawParticles();
    }

    function drawParticles() {
      particleContext.clearRect(0, 0, canvasWidth, canvasHeight);
      if (!reducedMotion) wavePhase += 0.008;

      for (let waveIndex = 0; waveIndex < 2; waveIndex++) {
        const centerY = canvasHeight * (waveIndex === 0 ? 0.34 : 0.69);
        particleContext.beginPath();
        for (let x = 0; x <= canvasWidth; x += 8) {
          const envelope = 7 + Math.sin(x * 0.0024 - wavePhase) * 8;
          const y = centerY + Math.sin(x * 0.012 + wavePhase + waveIndex) * envelope;
          if (x === 0) particleContext.moveTo(x, y);
          else particleContext.lineTo(x, y);
        }
        particleContext.strokeStyle = waveIndex === 0 ? 'rgba(196, 122, 74, 0.09)' : 'rgba(224, 174, 127, 0.055)';
        particleContext.lineWidth = 1;
        particleContext.stroke();
      }

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1;
        }

        particleContext.beginPath();
        particleContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        particleContext.fillStyle = 'rgba(224, 174, 127, 0.68)';
        particleContext.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex++) {
          const other = particles[otherIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 118) {
            particleContext.beginPath();
            particleContext.moveTo(particle.x, particle.y);
            particleContext.lineTo(other.x, other.y);
            particleContext.strokeStyle = `rgba(196, 122, 74, ${(1 - distance / 118) * 0.2})`;
            particleContext.lineWidth = 0.7;
            particleContext.stroke();
          }
        }
      });

      if (!reducedMotion && document.visibilityState === 'visible') {
        particleFrame = window.requestAnimationFrame(drawParticles);
      }
    }

    resizeParticleCanvas();
    window.addEventListener('resize', resizeParticleCanvas, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && !reducedMotion) {
        window.cancelAnimationFrame(particleFrame);
        particleFrame = window.requestAnimationFrame(drawParticles);
      } else {
        window.cancelAnimationFrame(particleFrame);
      }
    });
  }

  const landingPortfolio = document.getElementById('landingPortfolio');
  if (landingPortfolio) {
    const revealLandingPortfolio = () => {
      landingPortfolio.classList.toggle('is-visible', window.scrollY > 24);
    };
    window.addEventListener('scroll', revealLandingPortfolio, { passive: true });
    revealLandingPortfolio();
  }

  // Randomly feature a game in the hero artwork every five seconds.
  const featuredGameFrame = document.querySelector('.hero-art');
  const featuredGameImage = document.getElementById('featuredGameImage');
  const featuredGameTitle = document.getElementById('featuredGameTitle');
  if (featuredGameFrame && featuredGameImage && featuredGameTitle) {
    const featuredGames = [
      { name: 'Knuckle House', image: 'assets/knuckle-house-banner.png' },
      { name: 'Aaji vs Mumbai', image: 'assets/aaji-vs-mumbai-banner.png' },
      { name: 'Durgavana', image: 'assets/durgavana-banner.png' },
      { name: 'Niyam', image: 'assets/niyam-banner.png' },
      { name: 'Slime Time', image: 'assets/slime-time-banner.jpg' },
      { name: 'Sync Pulse', image: 'assets/sync-pulse-banner.jpg' }
    ];
    let previousFeaturedIndex = -1;

    function showRandomFeaturedGame() {
      let nextIndex = Math.floor(Math.random() * featuredGames.length);
      if (nextIndex === previousFeaturedIndex) {
        nextIndex = (nextIndex + 1) % featuredGames.length;
      }
      previousFeaturedIndex = nextIndex;

      const game = featuredGames[nextIndex];
      featuredGameFrame.classList.add('is-changing');
      window.setTimeout(() => {
        featuredGameTitle.textContent = game.name;
        featuredGameFrame.setAttribute('aria-label', `Featured game: ${game.name}`);
        featuredGameFrame.classList.toggle('no-image', !game.image);
        if (game.image) {
          featuredGameImage.src = game.image;
          featuredGameImage.alt = `Featured artwork for ${game.name}`;
        } else {
          featuredGameImage.removeAttribute('src');
          featuredGameImage.alt = '';
        }
        featuredGameFrame.classList.remove('is-changing');
      }, 180);
    }

    showRandomFeaturedGame();
    window.setInterval(showRandomFeaturedGame, 5000);
  }

  // 6b. Scroll progress bar + navbar "scrolled" state (one rAF-throttled handler)
  const progressBar = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  let scrollTicking = false;

  function updateScrollUI() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.pageYOffset / scrollable)) : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
    if (navbar) navbar.classList.toggle('scrolled', window.pageYOffset > 12);
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollUI);
    }
  }, { passive: true });
  window.addEventListener('resize', updateScrollUI);
  updateScrollUI();

  // 6c. Scroll reveals — elements fade/slide in once as they enter the viewport
  const revealGroups = [
    { selector: '.section-header', stagger: 0 },
    { selector: '.music-wrapper', stagger: 0 },
    { selector: '.project-card', stagger: 80, perRow: 3 },
    { selector: '.contact-container-box', stagger: 0 },
    { selector: '.social-card', stagger: 70 },
    { selector: '.footer-content', stagger: 0 }
  ];

  const revealTargets = [];
  revealGroups.forEach(group => {
    document.querySelectorAll(group.selector).forEach((el, i) => {
      const slot = group.perRow ? i % group.perRow : i;
      el.style.setProperty('--reveal-delay', (slot * group.stagger) + 'ms');
      el.classList.add('reveal');
      revealTargets.push(el);
    });
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    // Very old browsers: just show everything
    revealTargets.forEach(el => el.classList.add('in'));
  }
});
