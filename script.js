/* =============================================
   SPOTIFY PORTFOLIO — app.js
   ============================================= */

'use strict';

// ─── PROJECT DATA ───────────────────────────
// TODO: Replace with your actual projects!
const ICON = {
  website:    `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20"/><circle cx="6.5" cy="6.5" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="10" cy="6.5" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 7h8"/><circle cx="8.5" cy="12" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="12" cy="12" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="15.5" cy="12" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="8.5" cy="16" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="12" cy="16" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="15.5" cy="16" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/></svg>`,
  paint:      `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  chip:       `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 7V4M12 7V4M15 7V4M9 17v3M12 17v3M15 17v3M7 9H4M7 12H4M7 15H4M17 9h3M17 12h3M17 15h3"/></svg>`,
  check:      `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  chart:      `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  gamepad:    `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="8" width="20" height="12" rx="5"/><path d="M7 13v-2M6 12h2"/><circle cx="16" cy="11.5" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/><circle cx="18" cy="13.5" r="1" fill="rgba(255,255,255,0.85)" stroke="none"/></svg>`,
  rocket:     `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l-3-3z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  chat:       `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8M8 14h5"/></svg>`,
  wave:       `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 20 9 4 6 12 2 12"/></svg>`,
  globe:      `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  grid:       `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
};

const PROJECTS = [
  // SOPHOMORE
  {
    id: 1, year: 'sophomore', num: 1,
    icon: ICON.website, title: 'Cafe',
    desc: 'A collaborative group project building a full cafe website. Designed menus, layouts, and a responsive multi-page experience using HTML and CSS.',
    tags: ['HTML', 'CSS', 'Collab'], featured: false,
    bg: 'linear-gradient(135deg, #e91e63 0%, #880e4f 100%)',
    github: 'https://github.com/michaellidonni/Cafe-Michael-LiDonni-Zahr-Evans-Chris-Demetri'
  },
  {
    id: 2, year: 'sophomore', num: 2,
    icon: ICON.grid, title: 'My First Bootstrap Grid',
    desc: 'First hands-on project using Bootstrap\'s grid system. Learned the 12-column layout, breakpoints, and responsive design fundamentals.',
    tags: ['HTML', 'Bootstrap'], featured: false,
    bg: 'linear-gradient(135deg, #c2185b 0%, #7b1fa2 100%)',
    github: 'https://github.com/michaellidonni/MyFirstBootstrapGridMLidonni'
  },
  {
    id: 3, year: 'sophomore', num: 3,
    icon: ICON.website, title: 'Puppy Bootstrap',
    desc: 'A Bootstrap-powered webpage dedicated to puppies. Practiced cards, navbars, and Bootstrap utility classes while keeping it fun.',
    tags: ['HTML', 'Bootstrap', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #f06292 0%, #c2185b 100%)',
    github: 'https://github.com/michaellidonni/PuppyBootstrapMichaelLiDonni'
  },
  {
    id: 4, year: 'sophomore', num: 4,
    icon: ICON.globe, title: 'Vacation Destination',
    desc: 'A Bootstrap travel page showcasing a dream vacation destination. Used carousels, cards, and a responsive navbar to build a polished layout.',
    tags: ['HTML', 'Bootstrap', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #e53935 0%, #b71c1c 100%)',
    github: 'https://github.com/michaellidonni/TCA3-Vacation-Destination-Bootstrap-Website'
  },
  {
    id: 5, year: 'sophomore', num: 5,
    icon: ICON.website, title: 'Farmers Market',
    desc: 'A local farmers market website built with Bootstrap. Designed product sections, vendor info, and a contact form with a clean, earthy look.',
    tags: ['HTML', 'Bootstrap', 'CSS'], featured: true,
    bg: 'linear-gradient(135deg, #d81b60 0%, #880e4f 100%)',
    github: 'https://github.com/michaellidonni/FarmersMarket'
  },
  {
    id: 6, year: 'sophomore', num: 6,
    icon: ICON.grid, title: 'Flexbox Layout',
    desc: 'A deep-dive project into CSS Flexbox. Built multiple layout patterns — navigation bars, card grids, and centered hero sections — from scratch.',
    tags: ['HTML', 'CSS', 'Flexbox'], featured: false,
    bg: 'linear-gradient(135deg, #ad1457 0%, #6a1b9a 100%)',
    github: 'https://github.com/michaellidonni/Flexbox-MichaelLiDonni'
  },
  {
    id: 7, year: 'sophomore', num: 7,
    icon: ICON.chart, title: 'Global Cancer Disparities',
    desc: 'An informational HTML/Bootstrap page presenting data on global cancer disparities. Focused on accessible layout and data-driven content presentation.',
    tags: ['HTML', 'Bootstrap', 'Data'], featured: false,
    bg: 'linear-gradient(135deg, #e91e63 0%, #c62828 100%)',
    github: 'https://github.com/michaellidonni/Global-Cancer-Disparities-Michael-L'
  },
  {
    id: 8, year: 'sophomore', num: 8,
    icon: ICON.paint, title: 'Designer Tribute Page',
    desc: 'A tribute page celebrating a notable designer. Practiced typography, visual hierarchy, and building biography-style layouts with HTML and CSS.',
    tags: ['HTML', 'CSS', 'Design'], featured: false,
    bg: 'linear-gradient(135deg, #f48fb1 0%, #e91e63 100%)',
    github: 'https://github.com/michaellidonni/Designer-Tribute-Page'
  },

  // JUNIOR
  {
    id: 10, year: 'junior', num: 1,
    icon: ICON.website, title: 'Summer Tainment',
    desc: 'A hip-hop and entertainment themed website showcasing artists and culture. Bold, media-rich layout built with HTML and CSS.',
    tags: ['HTML', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
    github: 'https://github.com/michaellidonni/HipHop-Thing'
  },
  {
    id: 11, year: 'junior', num: 2,
    icon: ICON.grid, title: 'Monthly Website Gallery',
    desc: 'A gallery featuring a different themed website design each month. Practiced creative consistency and layout variation across multiple builds.',
    tags: ['HTML', 'CSS', 'Design'], featured: false,
    bg: 'linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)',
    github: 'https://github.com/michaellidonni/MonthlyWebsiteGallery'
  },
  {
    id: 12, year: 'junior', num: 3,
    icon: ICON.paint, title: 'Famous',
    desc: 'An interactive celebrity-inspired web experience. Eye-catching visuals and JavaScript-driven effects make this one stand out.',
    tags: ['HTML', 'CSS', 'JavaScript'], featured: false,
    bg: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)',
    github: 'https://github.com/michaellidonni/LookMaImFamous'
  },
  {
    id: 13, year: 'junior', num: 4,
    icon: ICON.chat, title: 'Word Salad',
    desc: 'A Mad Lib-style generator where users fill in blanks to create funny stories. Built with JavaScript DOM manipulation and form handling.',
    tags: ['JavaScript', 'HTML', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
    github: 'https://github.com/michaellidonni/MadLibWebsite'
  },
  {
    id: 14, year: 'junior', num: 5,
    icon: ICON.chat, title: "What's My Name",
    desc: 'A random name/testimonial generator that produces fun results on demand. Used JavaScript to handle dynamic content generation.',
    tags: ['JavaScript', 'HTML'], featured: false,
    bg: 'linear-gradient(135deg, #ffa000 0%, #ff6f00 100%)',
    github: 'https://github.com/michaellidonni/RandomTestamonial'
  },
  {
    id: 15, year: 'junior', num: 6,
    icon: ICON.gamepad, title: 'Rock Paper Scissors',
    desc: 'A classic Rock Paper Scissors game with score tracking, animated results, and a clean minimal UI. Built with vanilla JavaScript.',
    tags: ['JavaScript', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #ff9800 0%, #e65100 100%)',
    github: 'https://github.com/michaellidonni/RPS'
  },
  {
    id: 16, year: 'junior', num: 7,
    icon: ICON.globe, title: 'Presidential',
    desc: 'An informational website about U.S. presidents. Biography cards, historical facts, and a structured Bootstrap layout.',
    tags: ['HTML', 'Bootstrap', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)',
    github: 'https://github.com/michaellidonni/PresidentialBiography'
  },
  {
    id: 17, year: 'junior', num: 8,
    icon: ICON.gamepad, title: 'Lucky Guess',
    desc: 'A Hangman-style word guessing game with dynamic letter input, win/loss detection, and animated visuals. Pure vanilla JavaScript.',
    tags: ['JavaScript', 'CSS'], featured: true,
    bg: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)',
    github: 'https://github.com/michaellidonni/Hangman'
  },
  {
    id: 18, year: 'junior', num: 9,
    icon: ICON.check, title: 'Wildcard',
    desc: 'A free-choice project — a class schedule app for organizing and displaying course info. Practiced JavaScript data handling and UI design.',
    tags: ['JavaScript', 'HTML', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
    github: 'https://github.com/michaellidonni/ClassScheduleProject'
  },
  {
    id: 19, year: 'junior', num: 10,
    icon: ICON.globe, title: 'Team Website',
    desc: 'A collaborative team website built with partners. Focused on shared components, consistent styling, and coordinating a design across the group.',
    tags: ['HTML', 'CSS', 'Collab'], featured: false,
    bg: 'linear-gradient(135deg, #ffa000 0%, #ff6f00 100%)',
    github: 'https://github.com/michaellidonni/TeamWebsite'
  },
  {
    id: 20, year: 'junior', num: 11,
    icon: ICON.wave, title: 'Halloween Animations',
    desc: 'Spooky Halloween-themed CSS animations and effects. Keyframes, transforms, and timing functions bring ghosts and ghouls to life on the page.',
    tags: ['CSS', 'Animation'], featured: false,
    bg: 'linear-gradient(135deg, #ff9800 0%, #bf360c 100%)',
    github: 'https://github.com/michaellidonni/CSSAnimationProject'
  },
  {
    id: 21, year: 'junior', num: 12,
    icon: ICON.gamepad, title: 'Magic 8 Ball',
    desc: 'A digital Magic 8 Ball with randomized answers and shake animations. JavaScript randomization meets smooth CSS transitions.',
    tags: ['JavaScript', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)',
    github: 'https://github.com/michaellidonni/MagicEightBall'
  },
  {
    id: 22, year: 'junior', num: 13,
    icon: ICON.paint, title: 'Postcard Generator',
    desc: 'A digital postcard creator where users customize and generate shareable postcards. Dynamic form inputs and real-time visual output.',
    tags: ['JavaScript', 'CSS', 'HTML'], featured: false,
    bg: 'linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)',
    github: 'https://github.com/michaellidonni/PostcardGenerator'
  },

  // SENIOR
  {
    id: 23, year: 'senior', num: 1,
    icon: ICON.globe, title: 'College Recruitment',
    desc: 'A professional college recruitment website with program listings, admissions info, and student profiles. Clean, institutional design.',
    tags: ['HTML', 'CSS', 'Bootstrap'], featured: false,
    bg: 'linear-gradient(135deg, #1db954 0%, #0d7a35 100%)',
    github: 'https://github.com/michaellidonni/CollegeRecruitment'
  },
  {
    id: 24, year: 'senior', num: 2,
    icon: ICON.check, title: '"Refresher" Websites',
    desc: 'A series of refresher lesson projects revisiting JavaScript fundamentals — functions, event listeners, and array methods — with hands-on exercises.',
    tags: ['JavaScript', 'HTML', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    github: 'https://github.com/michaellidonni/1.01-Functions-Refresher-Lesson-Code'
  },
  {
    id: 25, year: 'senior', num: 3,
    icon: ICON.chip, title: 'JSON Lessons',
    desc: 'Hands-on project exploring JSON data and AJAX requests. Fetched live data from external sources and rendered it dynamically in the DOM.',
    tags: ['JavaScript', 'AJAX', 'JSON'], featured: false,
    bg: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
    github: 'https://github.com/michaellidonni/2.02-AJAX-Project'
  },
  {
    id: 26, year: 'senior', num: 4,
    icon: ICON.grid, title: 'jQuery Slideshow',
    desc: 'NJIT Project 1 — a jQuery-powered image slideshow app with smooth transitions, prev/next controls, and a fully responsive layout.',
    tags: ['jQuery', 'JavaScript', 'CSS'], featured: false,
    bg: 'linear-gradient(135deg, #1db954 0%, #166534 100%)',
    github: 'https://github.com/michaellidonni/NJIT-Project-1-Slideshow-App-with-jQuery'
  },
  {
    id: 27, year: 'senior', num: 5,
    icon: ICON.paint, title: 'Movie Poster Gallery',
    desc: 'NJIT Project 2 — a movie poster gallery built with jQuery. Dynamic card rendering, hover effects, and a polished cinema-themed UI.',
    tags: ['jQuery', 'JavaScript', 'CSS'], featured: true,
    bg: 'linear-gradient(135deg, #34d399 0%, #1db954 100%)',
    github: 'https://github.com/michaellidonni/NJIT-Project-2-Movie-Poster-Gallery'
  },
  {
    id: 28, year: 'senior', num: 6,
    icon: ICON.website, title: 'MHS Website',
    desc: 'A full multi-page school website with navigation, event listings, faculty pages, and consistent branding throughout.',
    tags: ['HTML', 'CSS', 'Bootstrap'], featured: false,
    bg: 'linear-gradient(135deg, #1db954 0%, #0d7a35 100%)'
  },
  {
    id: 29, year: 'senior', num: 7,
    icon: ICON.rocket, title: 'Client Project',
    desc: 'A real-world client website for Z Best Goodies. Delivered a custom site from requirements through revisions to final handoff.',
    tags: ['HTML', 'CSS', 'JavaScript'], featured: false,
    bg: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    github: 'https://github.com/michaellidonni/ZBestGoodies'
  },
  {
    id: 30, year: 'senior', num: 8,
    icon: ICON.rocket, title: 'Portfolio Website',
    desc: 'This very site. A Spotify-themed developer portfolio built from scratch with vanilla JS, custom CSS, and animated components throughout.',
    tags: ['HTML', 'CSS', 'JavaScript'], featured: true,
    bg: 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
    github: 'https://github.com/michaellidonni/PortfolioSite'
  }
];

// ─── STATE ──────────────────────────────────
const state = {
  currentSection: 'home',
  playingId: null,
  isPlaying: false,
  progress: 0,
  progressInterval: null,
  liked: new Set(),
  searchQuery: '',
};

// ─── DOM REFS ────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const scrollArea    = $('#scroll-area');
const navLinks      = $$('.nav-link');
const yearPills     = $$('.year-pill');
const searchInput   = $('#search-input');
const playBtn       = $('#play-btn');
const viewProjectsBtn = $('#view-projects-btn');
const playPauseBtn  = $('#play-pause-btn');
const vinylRecord   = null;
const progressFill  = $('#progress-fill');
const progressThumb = $('#progress-thumb');
const progressWrap  = $('#progress-wrap');
const npTitle       = $('#np-title');
const npSubtitle    = $('#np-subtitle');
const npArtInner    = $('.np-art-inner');
const npHeart       = $('#np-heart');
const npCurrent     = $('#np-current');
const npTotal       = $('#np-total');
const modalOverlay  = $('#modal-overlay');
const modalClose    = $('#modal-close');
const featuredGrid  = $('#featured-grid');
const backBtn       = $('#back-btn');

// ─── INIT ────────────────────────────────────
function init() {
  renderFeaturedCards();
  renderAllProjectsGrid();
  renderProjectLists();
  setupNavigation();
  setupPlayback();
  setupSearch();
  setupModal();
  setupProgressBar();
  setupVolumeBar();
  animateCounters();
}

// ─── RENDER FEATURED CARDS ──────────────────
function renderFeaturedCards() {
  const featured = PROJECTS.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(p => cardHTML(p)).join('');
  addCardListeners(featuredGrid);
}

function renderAllProjectsGrid() {
  const grid = $('#all-projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => cardHTML(p)).join('');
  addCardListeners(grid);
}

function cardHTML(project) {
  const yearLabel = { sophomore: 'Sophomore', junior: 'Junior', senior: 'Senior' }[project.year];
  const yearColor = { sophomore: 'var(--soph-color)', junior: 'var(--jun-color)', senior: 'var(--sen-color)' }[project.year];
  const badgeBg   = { sophomore: 'rgba(233,30,99,0.15)', junior: 'rgba(255,152,0,0.15)', senior: 'rgba(29,185,84,0.15)' }[project.year];

  return `
    <div class="project-card" data-id="${project.id}" style="--card-glow: radial-gradient(ellipse at 50% 0%, ${yearColor}18 0%, transparent 70%)">
      <div class="card-art" style="background: ${project.bg}">
        ${project.icon}
        <div class="card-shimmer"></div>
        <button class="card-play-btn" data-id="${project.id}" aria-label="Play">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="card-year-badge" style="background:${badgeBg};color:${yearColor}">${yearLabel}</div>
      <div class="card-title">${project.title}</div>
      <div class="card-sub">${project.tags.join(' · ')}</div>
    </div>`;
}

function addCardListeners(container) {
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-play-btn')) {
        const id = parseInt(e.target.closest('[data-id]').dataset.id);
        playProject(id);
      } else {
        const id = parseInt(card.dataset.id);
        openModal(id);
      }
    });
  });
}

// ─── RENDER PROJECT LISTS ───────────────────
function renderProjectLists() {
  const years = ['sophomore', 'junior', 'senior'];
  years.forEach(year => {
    const container = $(`.project-list[data-year="${year}"]`);
    if (!container) return;
    const projects = PROJECTS.filter(p => p.year === year);
    container.innerHTML = `
      <div class="project-list-header">
        <span>#</span><span></span><span>Tags</span>
      </div>
      ${projects.map((p, i) => trackItemHTML(p, i + 1)).join('')}
    `;
    // Stagger animations
    container.querySelectorAll('.track-item').forEach((el, i) => {
      el.style.animationDelay = `${i * 60}ms`;
    });
    // Listeners
    container.querySelectorAll('.track-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        if (state.playingId === id) {
          openModal(id);
        } else {
          playProject(id);
        }
      });
    });
  });
}

function trackItemHTML(project, num) {
  const yearColor = { sophomore: 'var(--soph-color)', junior: 'var(--jun-color)', senior: 'var(--sen-color)' }[project.year];
  const tagPills = project.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
  const isPlaying = state.playingId === project.id;

  return `
    <div class="track-item ${isPlaying ? 'playing' : ''}" data-id="${project.id}">
      <div class="track-num">${isPlaying ? eqBarsHTML() : num}</div>
      <div class="track-play">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div class="track-art" style="background: ${project.bg}">${project.icon}</div>
      <div class="track-info">
        <div class="track-title">${project.title}</div>
        <div class="track-desc">${project.desc.slice(0, 60)}…</div>
      </div>
      <div class="track-tags">${tagPills}</div>
    </div>`;
}

function eqBarsHTML() {
  return `<div class="eq-bars">
    <div class="eq-bar"></div>
    <div class="eq-bar"></div>
    <div class="eq-bar"></div>
  </div>`;
}

// ─── NAVIGATION ──────────────────────────────
function setupNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (link.dataset.year) {
        showSection(link.dataset.year);
      } else {
        showSection(link.dataset.section);
      }
      setActiveLink(link);
    });
  });

  backBtn?.addEventListener('click', () => showSection('home'));

  viewProjectsBtn?.addEventListener('click', () => {
    showSection('projects');
    const link = document.querySelector('.nav-link[data-section="projects"]');
    if (link) setActiveLink(link);
  });

  $('#more-about-btn')?.addEventListener('click', () => {
    showSection('about');
    const link = document.querySelector('.nav-link[data-section="about"]');
    if (link) setActiveLink(link);
  });

  $('#see-all-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('projects');
    const link = document.querySelector('.nav-link[data-section="projects"]');
    if (link) setActiveLink(link);
  });
}

function showSection(name) {
  // Map nav data-section to section IDs
  const sectionId = `section-${name}`;
  $$('.section').forEach(s => s.classList.add('hidden'));
  const target = $(`#${sectionId}`);
  if (target) {
    target.classList.remove('hidden');
    scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
  }
  state.currentSection = name;
  // Animate counters when visiting about
  if (name === 'about') animateCounters();
}

function setActiveLink(el) {
  navLinks.forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

// ─── YEAR PILL NAVIGATION ───────────────────
function setupYearPills() {
  yearPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const year = pill.dataset.year;
      showSection(year);
      // Find and activate matching sidebar link
      const link = document.querySelector(`.year-link[data-year="${year}"]`);
      if (link) setActiveLink(link);
    });
  });
}

// ─── PLAYBACK ────────────────────────────────
function setupPlayback() {
  playBtn?.addEventListener('click', () => {
    const first = PROJECTS.find(p => p.featured) || PROJECTS[0];
    playProject(first.id);
    vinylRecord.classList.add('spinning');
  });

  playPauseBtn?.addEventListener('click', togglePlay);
}

function playProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  // Stop previous
  if (state.progressInterval) clearInterval(state.progressInterval);

  state.playingId = id;
  state.isPlaying = true;
  state.progress = 0;

  // Update Now Playing bar
  npTitle.textContent = project.title;
  npSubtitle.textContent = project.tags.join(' · ');
  npArtInner.innerHTML = project.icon;
  npArtInner.style.background = project.bg;

  // Random duration between 2:30 - 4:45
  const totalSecs = Math.floor(Math.random() * 135) + 150;
  npTotal.textContent = formatTime(totalSecs);

  // Update vinyl
  vinylRecord.classList.add('spinning');

  // Update play/pause icon
  updatePlayPauseIcon(true);

  // Animate the bar
  startProgress(totalSecs);

  // Refresh track lists
  renderProjectLists();

  // Flash the now-playing bar art
  const npArt = $('.np-art');
  npArt.style.transform = 'scale(0.9)';
  setTimeout(() => { npArt.style.transition = 'transform 0.3s'; npArt.style.transform = 'scale(1)'; }, 50);
}

function togglePlay() {
  if (!state.playingId) {
    playProject(PROJECTS[0].id);
    return;
  }
  state.isPlaying = !state.isPlaying;
  updatePlayPauseIcon(state.isPlaying);

  if (state.isPlaying) {
    vinylRecord.classList.add('spinning');
    resumeProgress();
  } else {
    vinylRecord.classList.remove('spinning');
    if (state.progressInterval) clearInterval(state.progressInterval);
  }
}

function updatePlayPauseIcon(playing) {
  const iconPlay  = playPauseBtn.querySelector('.icon-play');
  const iconPause = playPauseBtn.querySelector('.icon-pause');
  if (playing) {
    iconPlay.classList.add('hidden');
    iconPause.classList.remove('hidden');
  } else {
    iconPlay.classList.remove('hidden');
    iconPause.classList.add('hidden');
  }
}

function startProgress(totalSecs) {
  const fps = 30;
  const tickMs = 1000 / fps;
  const increment = 100 / (totalSecs * fps);

  state.progressInterval = setInterval(() => {
    state.progress += increment;
    if (state.progress >= 100) {
      state.progress = 0;
      clearInterval(state.progressInterval);
      updatePlayPauseIcon(false);
      vinylRecord.classList.remove('spinning');
    }
    setProgressUI(state.progress, totalSecs);
  }, tickMs);
}

function resumeProgress() {
  // Estimate remaining from current progress
  const totalSecs = timeToSecs(npTotal.textContent);
  const elapsed   = state.progress / 100 * totalSecs;
  const remaining = totalSecs - elapsed;
  startProgress(remaining > 0 ? totalSecs : 180); // restart from same total
}

function setProgressUI(pct, totalSecs) {
  progressFill.style.width = pct + '%';
  progressThumb.style.left = pct + '%';
  const elapsed = (pct / 100) * totalSecs;
  npCurrent.textContent = formatTime(Math.floor(elapsed));
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function timeToSecs(timeStr) {
  const [m, s] = timeStr.split(':').map(Number);
  return (m || 0) * 60 + (s || 0);
}

// ─── PROGRESS BAR SEEK ──────────────────────
function setupProgressBar() {
  progressWrap?.addEventListener('click', (e) => {
    const rect = progressWrap.querySelector('.progress-bar').getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
    state.progress = pct;
    const totalSecs = timeToSecs(npTotal.textContent) || 180;
    setProgressUI(pct, totalSecs);
  });
}

// ─── VOLUME BAR ─────────────────────────────
function setupVolumeBar() {
  const volBar  = $('.volume-bar');
  const volFill = $('#vol-fill');

  volBar?.addEventListener('click', (e) => {
    const rect = volBar.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
    volFill.style.width = pct + '%';
  });
}

// ─── HEART / LIKE ────────────────────────────
npHeart?.addEventListener('click', () => {
  if (!state.playingId) return;
  if (state.liked.has(state.playingId)) {
    state.liked.delete(state.playingId);
    npHeart.classList.remove('liked');
  } else {
    state.liked.add(state.playingId);
    npHeart.classList.add('liked');
    // Pop animation
    npHeart.style.transform = 'scale(1.3)';
    setTimeout(() => { npHeart.style.transform = ''; }, 200);
  }
});

// ─── SEARCH ──────────────────────────────────
function setupSearch() {
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    state.searchQuery = query;

    if (!query) {
      // Restore all
      $$('.track-item').forEach(el => { el.style.display = ''; });
      $$('.project-card').forEach(el => { el.style.display = ''; });
      return;
    }

    // Filter track items
    $$('.track-item').forEach(item => {
      const id = parseInt(item.dataset.id);
      const proj = PROJECTS.find(p => p.id === id);
      if (!proj) return;
      const matches = proj.title.toLowerCase().includes(query)
        || proj.tags.some(t => t.toLowerCase().includes(query))
        || proj.year.includes(query);
      item.style.display = matches ? '' : 'none';
    });

    // Filter cards
    $$('.project-card').forEach(card => {
      const id = parseInt(card.dataset.id);
      const proj = PROJECTS.find(p => p.id === id);
      if (!proj) return;
      const matches = proj.title.toLowerCase().includes(query)
        || proj.tags.some(t => t.toLowerCase().includes(query));
      card.style.display = matches ? '' : 'none';
    });
  });
}

// ─── MODAL ───────────────────────────────────
function setupModal() {
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  $('#modal-play')?.addEventListener('click', () => {
    const title = $('#modal-title').textContent;
    const proj = PROJECTS.find(p => p.title === title);
    if (proj) {
      playProject(proj.id);
      closeModal();
    }
  });

  $('#modal-github')?.addEventListener('click', () => {
    const title = $('#modal-title').textContent;
    const proj = PROJECTS.find(p => p.title === title);
    if (proj?.github) window.open(proj.github, '_blank');
  });
}

function openModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  const yearLabel = { sophomore: 'Sophomore Year · 10th Grade', junior: 'Junior Year · 11th Grade', senior: 'Senior Year · 12th Grade' }[project.year];
  const yearColor = { sophomore: 'var(--soph-color)', junior: 'var(--jun-color)', senior: 'var(--sen-color)' }[project.year];

  $('#modal-year').textContent  = yearLabel;
  $('#modal-title').textContent = project.title;
  $('#modal-desc').textContent  = project.desc;
  $('#modal-art').innerHTML   = project.icon;
  $('#modal-art').style.background = project.bg;

  const tagsEl = $('#modal-tags');
  tagsEl.innerHTML = project.tags.map(t =>
    `<span class="modal-tag" style="background:${yearColor}22;color:${yearColor}">${t}</span>`
  ).join('');

  const githubBtn = $('#modal-github');
  if (githubBtn) githubBtn.style.display = project.github ? '' : 'none';

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── ANIMATED COUNTERS ───────────────────────
function animateCounters() {
  $$('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current  = 0;
    const duration = 1200;
    const steps  = 40;
    const increment = target / steps;
    const interval = duration / steps;

    el.textContent = '0';
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, interval);
  });
}

// ─── SCROLL-BASED TOPBAR EFFECT ─────────────
scrollArea?.addEventListener('scroll', () => {
  const topbar = $('.topbar');
  if (scrollArea.scrollTop > 40) {
    topbar.style.background = 'rgba(18,18,18,0.98)';
  } else {
    topbar.style.background = 'rgba(18,18,18,0.8)';
  }
});

// ─── CARD HOVER PARTICLE EFFECT ─────────────
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest?.('.project-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty('--mouse-x', x + '%');
  card.style.setProperty('--mouse-y', y + '%');
});

// ─── VINYL SPIN ON HOVER ─────────────────────
document.querySelector('.hero-art')?.addEventListener('mouseenter', () => {
  if (!state.isPlaying) vinylRecord.classList.add('spinning');
});
document.querySelector('.hero-art')?.addEventListener('mouseleave', () => {
  if (!state.isPlaying) vinylRecord.classList.remove('spinning');
});

// ─── BOOT ────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);