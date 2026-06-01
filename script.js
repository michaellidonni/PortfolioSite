/* =============================================
   SPOTIFY PORTFOLIO — app.js
   ============================================= */

'use strict';

// ─── SVG ICON MAP ─────────────────────────────
// Keys here match the "iconKey" field in projects.json
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

// ─── PROJECT DATA ─────────────────────────────
// Populated asynchronously from projects.json via jQuery $.getJSON at the bottom
let PROJECTS = [];

// ─── MODAL STATE ─────────────────────────────
let currentModalProject = null;
const codeCache = {};

// ─── APP STATE ───────────────────────────────
const state = {
  currentSection: 'home',
  playingId: null,
  isPlaying: false,
  progress: 0,
  progressInterval: null,
  liked: new Set(),
  searchQuery: '',
};

// ─── DOM SHORTCUTS ────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const scrollArea    = $('#scroll-area');
const navLinks      = $$('.nav-link');
const yearPills     = $$('.year-pill');
const searchInput   = $('#search-input');
const playBtn       = $('#play-btn');
const viewProjectsBtn = $('#view-projects-btn');
const playPauseBtn  = $('#play-pause-btn');
const vinylRecord   = null; // No vinyl element in current layout; all calls guarded with ?.
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

// ─── INIT ─────────────────────────────────────
// Called after PROJECTS is loaded from JSON
function init() {
  renderFeaturedCards();
  renderAllProjectsGrid();
  renderProjectLists();
  setupNavigation();
  setupPlayback();
  setupSearch();
  setupIntroOverlay();
  setupModal();
  setupProgressBar();
  setupVolumeBar();
  animateCounters();
}

// ─── RENDER FEATURED CARDS ───────────────────
// Shows only projects with featured: true on the Home section
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
  const badgeBg   = { sophomore: 'rgba(94,207,136,0.18)', junior: 'rgba(29,185,84,0.15)', senior: 'rgba(10,107,48,0.2)' }[project.year];

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

// ─── RENDER PROJECT LISTS ─────────────────────
// Builds the track-list view for each year's playlist section
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
    // Stagger slide-in animation for each track row
    container.querySelectorAll('.track-item').forEach((el, i) => {
      el.style.animationDelay = `${i * 60}ms`;
    });
    // Click: play if not already playing, open modal if already playing
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
  // Wire up all sidebar nav links to show the matching section
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
  const sectionId = `section-${name}`;
  $$('.section').forEach(s => s.classList.add('hidden'));
  const target = $(`#${sectionId}`);
  if (target) {
    target.classList.remove('hidden');
    scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
  }
  state.currentSection = name;
  if (name === 'about') animateCounters();
}

function setActiveLink(el) {
  navLinks.forEach(l => l.classList.remove('active'));
  el.classList.add('active');
}

// ─── YEAR PILL NAVIGATION ────────────────────
function setupYearPills() {
  yearPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const year = pill.dataset.year;
      showSection(year);
      const link = document.querySelector(`.year-link[data-year="${year}"]`);
      if (link) setActiveLink(link);
    });
  });
}

// ─── PLAYBACK ────────────────────────────────
function setupPlayback() {
  // Play button opens the animated intro overlay
  playBtn?.addEventListener('click', openIntroOverlay);
  playPauseBtn?.addEventListener('click', togglePlay);
}

function playProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  if (state.progressInterval) clearInterval(state.progressInterval);

  state.playingId = id;
  state.isPlaying = true;
  state.progress = 0;

  // Update the Now Playing bar at the bottom
  npTitle.textContent = project.title;
  npSubtitle.textContent = project.tags.join(' · ');
  npArtInner.innerHTML = project.icon;
  npArtInner.style.background = project.bg;

  // Random duration between 2:30–4:45 for the fake track timer
  const totalSecs = Math.floor(Math.random() * 135) + 150;
  npTotal.textContent = formatTime(totalSecs);

  vinylRecord?.classList.add('spinning');
  updatePlayPauseIcon(true);
  startProgress(totalSecs);

  // Re-render track lists so the active row highlights
  renderProjectLists();

  // Quick scale pop on the album art
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
    vinylRecord?.classList.add('spinning');
    resumeProgress();
  } else {
    vinylRecord?.classList.remove('spinning');
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
      vinylRecord?.classList.remove('spinning');
    }
    setProgressUI(state.progress, totalSecs);
  }, tickMs);
}

function resumeProgress() {
  const totalSecs = timeToSecs(npTotal.textContent);
  const elapsed   = state.progress / 100 * totalSecs;
  const remaining = totalSecs - elapsed;
  startProgress(remaining > 0 ? totalSecs : 180);
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

// ─── PROGRESS BAR SEEK ───────────────────────
function setupProgressBar() {
  progressWrap?.addEventListener('click', (e) => {
    const rect = progressWrap.querySelector('.progress-bar').getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
    state.progress = pct;
    const totalSecs = timeToSecs(npTotal.textContent) || 180;
    setProgressUI(pct, totalSecs);
  });
}

// ─── VOLUME BAR ──────────────────────────────
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
    npHeart.style.transform = 'scale(1.3)';
    setTimeout(() => { npHeart.style.transform = ''; }, 200);
  }
});

// ─── SEARCH ──────────────────────────────────
// Navigates to the Projects section and filters all cards by query
function setupSearch() {
  let preSearchSection = 'home';

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    state.searchQuery = query;

    if (!query) {
      // Restore all cards and go back to where the user was
      $$('.track-item').forEach(el => { el.style.display = ''; });
      $$('.project-card').forEach(el => { el.style.display = ''; });
      const noResults = $('#search-no-results');
      if (noResults) noResults.remove();
      showSection(preSearchSection);
      const prevLink = document.querySelector(`.nav-link[data-section="${preSearchSection}"]`)
        || document.querySelector(`.year-link[data-year="${preSearchSection}"]`);
      if (prevLink) setActiveLink(prevLink);
      return;
    }

    // Remember where the user was before searching
    if (state.currentSection !== 'projects') {
      preSearchSection = state.currentSection;
    }

    // Jump to the all-projects grid so results are visible
    showSection('projects');
    const projLink = document.querySelector('.nav-link[data-section="projects"]');
    if (projLink) setActiveLink(projLink);

    // Filter project cards by title, tags, description, or year
    let anyVisible = false;
    $$('.project-card').forEach(card => {
      const id = parseInt(card.dataset.id);
      const proj = PROJECTS.find(p => p.id === id);
      if (!proj) return;
      const matches = proj.title.toLowerCase().includes(query)
        || proj.tags.some(t => t.toLowerCase().includes(query))
        || proj.desc.toLowerCase().includes(query)
        || proj.year.includes(query);
      card.style.display = matches ? '' : 'none';
      if (matches) anyVisible = true;
    });

    // Also filter track items in year sections
    $$('.track-item').forEach(item => {
      const id = parseInt(item.dataset.id);
      const proj = PROJECTS.find(p => p.id === id);
      if (!proj) return;
      const matches = proj.title.toLowerCase().includes(query)
        || proj.tags.some(t => t.toLowerCase().includes(query))
        || proj.desc.toLowerCase().includes(query)
        || proj.year.includes(query);
      item.style.display = matches ? '' : 'none';
    });

    // Show a message if nothing matched
    const grid = $('#all-projects-grid');
    let noResults = $('#search-no-results');
    if (!anyVisible) {
      if (!noResults) {
        noResults = document.createElement('p');
        noResults.id = 'search-no-results';
        noResults.textContent = `No projects found for "${e.target.value}"`;
        noResults.style.cssText = 'color:var(--text-subdued);grid-column:1/-1;padding:2rem 0;';
        grid?.appendChild(noResults);
      }
    } else if (noResults) {
      noResults.remove();
    }
  });
}

// ─── INTRO OVERLAY ───────────────────────────
function openIntroOverlay() {
  const overlay = $('#intro-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Auto-dismiss after 4.5 seconds if the user doesn't skip
  overlay._autoClose = setTimeout(closeIntroOverlay, 4500);
}

function closeIntroOverlay() {
  const overlay = $('#intro-overlay');
  if (!overlay) return;
  clearTimeout(overlay._autoClose);
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function setupIntroOverlay() {
  $('#intro-skip')?.addEventListener('click', closeIntroOverlay);
}

// ─── MODAL ───────────────────────────────────
function setupModal() {
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeIntroOverlay(); }
  });

  // Tab bar
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchModalTab(tab.dataset.tab));
  });

  // Code file tabs
  document.querySelectorAll('.code-file-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.code-file-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      loadProjectCode(tab.dataset.file);
    });
  });

  // Copy button
  document.getElementById('code-copy-btn')?.addEventListener('click', () => {
    const content = document.getElementById('code-display')?.textContent || '';
    navigator.clipboard.writeText(content).then(() => {
      const btn = document.getElementById('code-copy-btn');
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    });
  });

  $('#modal-play')?.addEventListener('click', () => {
    if (currentModalProject?.github) {
      const m = currentModalProject.github.match(/github\.com\/([^/]+)\/([^/]+)/);
      const url = m ? `https://${m[1]}.github.io/${m[2]}/` : currentModalProject.github;
      window.open(url, '_blank');
    }
    closeModal();
  });

  $('#modal-github')?.addEventListener('click', () => {
    if (currentModalProject?.github) window.open(currentModalProject.github, '_blank');
  });
}

function switchModalTab(tabName) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  document.querySelectorAll('.modal-pane').forEach(p => p.classList.toggle('hidden', p.id !== `modal-pane-${tabName}`));
  const modal = document.querySelector('.modal');
  modal.classList.remove('tab-overview', 'tab-code', 'tab-preview');
  modal.classList.add(`tab-${tabName}`);
  if (tabName === 'code') {
    const activeFile = document.querySelector('.code-file-tab.active')?.dataset.file || 'index.html';
    loadProjectCode(activeFile);
  }
  if (tabName === 'preview') loadProjectPreview();
}

function getRepoFromProject(project) {
  if (!project?.github) return null;
  const m = project.github.match(/github\.com\/[^/]+\/([^/]+)/);
  return m ? m[1] : null;
}

async function fetchRaw(repo, filename) {
  for (const branch of ['main', 'master']) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/michaellidonni/${repo}/${branch}/${filename}`);
      if (res.ok) return await res.text();
    } catch (_) {}
  }
  return null;
}

function applyCode(el, content, filename) {
  if (!content) {
    el.className = 'code-empty';
    el.textContent = `${filename} not found in this repository.`;
    return;
  }
  const langMap = { html: 'language-html', css: 'language-css', js: 'language-javascript' };
  const ext = filename.split('.').pop();
  el.className = langMap[ext] || '';
  el.textContent = content;
  if (window.hljs) hljs.highlightElement(el);
}

async function loadProjectCode(filename) {
  const codeEl = document.getElementById('code-display');
  if (!codeEl) return;
  const repo = getRepoFromProject(currentModalProject);
  if (!repo) {
    codeEl.className = 'code-empty';
    codeEl.textContent = 'No GitHub repository linked for this project.';
    return;
  }
  const key = `${repo}/${filename}`;
  if (codeCache[key] !== undefined) { applyCode(codeEl, codeCache[key], filename); return; }
  codeEl.className = 'code-empty';
  codeEl.textContent = `Loading ${filename}…`;
  const content = await fetchRaw(repo, filename);
  codeCache[key] = content;
  applyCode(codeEl, content, filename);
}

function loadProjectPreview() {
  const frame = document.getElementById('preview-frame');
  const urlLabel = document.getElementById('preview-url-label');
  const openLink = document.getElementById('preview-open-link');
  const loading = document.getElementById('preview-loading');
  const repo = getRepoFromProject(currentModalProject);
  if (!repo) {
    if (loading) { loading.style.display = 'flex'; loading.textContent = 'No preview available.'; }
    return;
  }
  const url = `https://michaellidonni.github.io/${repo}/`;
  if (urlLabel) urlLabel.textContent = url;
  if (openLink) openLink.href = url;
  if (loading) { loading.style.display = 'flex'; loading.textContent = 'Loading preview…'; }
  if (frame) {
    frame.onload = () => { if (loading) loading.style.display = 'none'; };
    frame.src = url;
  }
}

function openModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  currentModalProject = project;

  // Reset tabs to overview
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'overview'));
  document.querySelectorAll('.modal-pane').forEach(p => p.classList.toggle('hidden', p.id !== 'modal-pane-overview'));
  const modal = document.querySelector('.modal');
  modal.classList.remove('tab-overview', 'tab-code', 'tab-preview');
  modal.classList.add('tab-overview');
  document.querySelectorAll('.code-file-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
  const frame = document.getElementById('preview-frame');
  if (frame) frame.src = 'about:blank';
  const codeEl = document.getElementById('code-display');
  if (codeEl) { codeEl.className = ''; codeEl.textContent = 'Select a file above to load code.'; }

  const yearLabel = {
    sophomore: 'Sophomore Year · 10th Grade',
    junior:    'Junior Year · 11th Grade',
    senior:    'Senior Year · 12th Grade'
  }[project.year];
  const yearColor = {
    sophomore: 'var(--soph-color)',
    junior:    'var(--jun-color)',
    senior:    'var(--sen-color)'
  }[project.year];

  $('#modal-year').textContent  = yearLabel;
  $('#modal-title').textContent = project.title;
  $('#modal-desc').textContent  = project.desc;
  $('#modal-art').innerHTML     = project.icon;
  $('#modal-art').style.background = project.bg;

  const tagsEl = $('#modal-tags');
  tagsEl.innerHTML = project.tags.map(t =>
    `<span class="modal-tag" style="background:${yearColor}22;color:${yearColor}">${t}</span>`
  ).join('');

  // Show skills learned if the project has them (featured projects only)
  const skillsEl = $('#modal-skills');
  if (skillsEl) {
    if (project.skillsLearned && project.skillsLearned.length) {
      skillsEl.innerHTML = '<h3 class="modal-section-label">Skills Learned</h3>'
        + '<div class="modal-skills-list">'
        + project.skillsLearned.map(s => `<span class="modal-skill-chip">${s}</span>`).join('')
        + '</div>';
      skillsEl.style.display = '';
    } else {
      skillsEl.style.display = 'none';
    }
  }

  // Show reflection paragraph if the project has one
  const reflEl = $('#modal-reflection');
  if (reflEl) {
    if (project.reflection) {
      reflEl.innerHTML = '<h3 class="modal-section-label">Reflection</h3>'
        + `<p class="modal-reflection-text">${project.reflection}</p>`;
      reflEl.style.display = '';
    } else {
      reflEl.style.display = 'none';
    }
  }

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
// Counts up from 0 to the data-target value when the About section is shown
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

// ─── SCROLL-BASED TOPBAR EFFECT ──────────────
scrollArea?.addEventListener('scroll', () => {
  const topbar = $('.topbar');
  if (scrollArea.scrollTop > 40) {
    topbar.style.background = 'rgba(18,18,18,0.98)';
  } else {
    topbar.style.background = 'rgba(18,18,18,0.8)';
  }
});

// ─── CARD HOVER PARTICLE EFFECT ──────────────
// Tracks mouse position within hovered card for the glow gradient
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest?.('.project-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty('--mouse-x', x + '%');
  card.style.setProperty('--mouse-y', y + '%');
});

// ─── BOOT ─────────────────────────────────────
// Fetch projects.json with jQuery, map iconKey → SVG, then start the app
jQuery.getJSON('projects.json')
  .done(function(data) {
    PROJECTS = data;
    PROJECTS.forEach(function(p) {
      p.icon = ICON[p.iconKey] || ICON.website;
    });
    init();
  })
  .fail(function() {
    console.error('Could not load projects.json — make sure the file exists and you are serving from a local server.');
  });
