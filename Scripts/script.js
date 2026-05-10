/* ══════════════════════════════════════
   DATA DEFINITIONS
══════════════════════════════════════ */
const THEMES = [
  { id:'default', name:'Blue',   bg:'linear-gradient(135deg,#1a4fd6,#0d2a80)' },
  { id:'ocean',   name:'Ocean',  bg:'linear-gradient(135deg,#0b7fa8,#064560)' },
  { id:'forest',  name:'Forest', bg:'linear-gradient(135deg,#146b45,#083d24)' },
  { id:'sunset',  name:'Sunset', bg:'linear-gradient(135deg,#c05022,#7a2800)' },
  { id:'night',   name:'Night',  bg:'linear-gradient(135deg,#4f87ff,#101624)' },
  { id:'blush',   name:'Blush',  bg:'linear-gradient(135deg,#b03070,#6a1040)' },
  { id:'galaxy',  name:'Galaxy', bg:'linear-gradient(135deg,#8b5cf6,#1e0045)' },
  { id:'cherry',  name:'Cherry', bg:'linear-gradient(135deg,#dc143c,#6a0020)' },
];

const BORDERS = [
  { id:'blue',    name:'Sapphire', grad:'linear-gradient(135deg,#1a4fd6,#3b6ef0)',                              emoji:'💙' },
  { id:'purple',  name:'Violet',   grad:'linear-gradient(135deg,#7c3aed,#ec4899)',                              emoji:'💜' },
  { id:'fire',    name:'Inferno',  grad:'linear-gradient(135deg,#f59e0b,#ef4444)',                              emoji:'🔥' },
  { id:'nature',  name:'Nature',   grad:'linear-gradient(135deg,#10b981,#06b6d4)',                              emoji:'🌿' },
  { id:'rainbow', name:'Aurora',   grad:'conic-gradient(#ff0000,#ff8800,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)', emoji:'🌈' },
  { id:'dark',    name:'Onyx',     grad:'linear-gradient(135deg,#1a1a2e,#374151)',                              emoji:'🖤' },
  { id:'gold',    name:'Gold',     grad:'linear-gradient(135deg,#f59e0b,#ca8a04)',                              emoji:'✨' },
  { id:'neon',    name:'Neon',     grad:'linear-gradient(135deg,#ff00ff,#00ffff)',                              emoji:'🌟' },
  { id:'cherry',  name:'Cherry',   grad:'linear-gradient(135deg,#dc143c,#ff6b6b)',                              emoji:'🍒' },
  { id:'cosmic',  name:'Cosmic',   grad:'linear-gradient(135deg,#a78bfa,#818cf8,#60a5fa)',                      emoji:'🌌' },
  { id:'ice',     name:'Frost',    grad:'linear-gradient(135deg,#bae6fd,#e0f2fe,#7dd3fc)',                      emoji:'❄️' },
  { id:'rose',    name:'Rose',     grad:'linear-gradient(135deg,#fda4af,#f43f5e)',                              emoji:'🌸' },
];

const NAMECARD_STYLES = [
  { cls:'',           name:'Default',   bg:'linear-gradient(135deg,#0d2a80,#1a4fd6)',   color:'white' },
  { cls:'nc-dark',    name:'Onyx',      bg:'linear-gradient(135deg,#111827,#374151)',   color:'#f9fafb' },
  { cls:'nc-glass',   name:'Glass',     bg:'rgba(255,255,255,0.25)',                    color:'var(--text)' },
  { cls:'nc-warm',    name:'Ember',     bg:'linear-gradient(135deg,#7c2d12,#f97316)',   color:'white' },
  { cls:'nc-purple',  name:'Amethyst',  bg:'linear-gradient(135deg,#3b0764,#a78bfa)',   color:'white' },
  { cls:'nc-teal',    name:'Lagoon',    bg:'linear-gradient(135deg,#134e4a,#2dd4bf)',   color:'white' },
  { cls:'nc-flat',    name:'Minimal',   bg:'var(--surface2)',                           color:'var(--text)' },
  { cls:'nc-cyberpunk', name:'Cyber',   bg:'linear-gradient(135deg,#0a0a0a,#30004a)',   color:'#ff00ff' },
  { cls:'nc-aurora',  name:'Aurora',    bg:'linear-gradient(135deg,#0a2a1a,#2dd4bf)',   color:'#ecfdf5' },
];

const BG_PRESETS = [
  { id:'none',        name:'None',       style:'var(--bg)',                                                             isColor:true },
  { id:'stars',       name:'Stars',      style:'radial-gradient(ellipse at top,#0a0f2a 0%,#1a2860 50%,#0a0f2a 100%)' },
  { id:'aurora',      name:'Aurora',     style:'linear-gradient(135deg,#0a2a1a,#1a4a2a,#0d2a80,#4c1d95)' },
  { id:'sunset-sky',  name:'Sunset Sky', style:'linear-gradient(180deg,#ff6b35,#f7931e,#ffd700,#87ceeb)' },
  { id:'ocean-deep',  name:'Ocean Deep', style:'linear-gradient(180deg,#0a1a3a,#0b7fa8,#00b4d8)' },
  { id:'cherry-blos', name:'Sakura',     style:'linear-gradient(135deg,#ffc2d1,#ffb3c6,#ff85a1)' },
  { id:'forest-mist', name:'Forest',     style:'linear-gradient(180deg,#134e4a,#146b45,#1d9e68)' },
  { id:'cyber',       name:'Cyberpunk',  style:'linear-gradient(135deg,#0a0a0a,#1a0030,#0a001a)' },
  { id:'rose-gold',   name:'Rose Gold',  style:'linear-gradient(135deg,#b76e79,#f5a7b8,#e8d5b7)' },
];

const EMOJIS = ['🎓','👨‍💻','🧑‍🎓','🚀','💡','🦊','🐼','🎮','🏆','🌟','💎','🎯','🔥','⚡','🌙','🎸','📷','🌺'];

const FONT_PRESETS = [
  { name:'Jakarta (Default)', body:"'Plus Jakarta Sans', system-ui, sans-serif", display:"'Nunito', sans-serif" },
  { name:'Inter',      body:"'Inter', system-ui, sans-serif",   display:"'Inter', sans-serif" },
  { name:'Nunito',     body:"'Nunito', sans-serif",             display:"'Nunito', sans-serif" },
  { name:'Poppins',    body:"'Poppins', sans-serif",            display:"'Poppins', sans-serif" },
  { name:'Raleway',    body:"'Raleway', sans-serif",            display:"'Raleway', sans-serif" },
  { name:'Quicksand',  body:"'Quicksand', sans-serif",          display:"'Quicksand', sans-serif" },
];

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let state = {
  theme: 'default',
  border: 'blue',
  borderGrad: 'linear-gradient(135deg,#1a4fd6,#3b6ef0)',
  animBorder: false,
  namecard: '',
  bg: 'none',
  bgCustom: null,
  overlayOpacity: 85,
  showPattern: true,
  showParticles: true,
  currentEmoji: '🎓',
  avatarSrc: null,
  customBorderC1: '#1a4fd6',
  customBorderC2: '#3b6ef0',
  customBorderDir: '135deg',
  fontPreset: 0,
  customFont: '',
};

/* ══════════════════════════════════════
   LOCAL STORAGE
══════════════════════════════════════ */
function loadState() {
  try {
    const saved = localStorage.getItem('aryan_profile_v3');
    if (saved) {
      Object.assign(state, JSON.parse(saved));
    }
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('aryan_profile_v3', JSON.stringify(state));
  } catch(e) {}
}

function saveAll() {
  const bio = document.getElementById('bio-field');
  if (bio) {
    state.bio = bio.innerHTML;
  }

  const name = document.getElementById('nc-name');
  if (name) {
    state.displayName = name.textContent;
  }

  const role = document.getElementById('nc-role');
  if (role) {
    state.roleText = role.textContent;
  }

  const motto = document.getElementById('nc-motto');
  if (motto) {
    state.mottoText = motto.textContent.replace(/^"+|"+$/g, '');
  }

  const hobbiesGrid = document.getElementById('hobbies-grid');
  if (hobbiesGrid) {
    state.hobbies = Array.from(
      hobbiesGrid.querySelectorAll('.hobby-card:not([data-add-hobby])')
    ).map(card => ({
      icon: card.querySelector('.hobby-icon')?.textContent || '❓',
      name: card.querySelector('.hobby-name')?.textContent || ''
    }));
  }

  const techEl = document.getElementById('tech-interests');
  if (techEl) {
    state.techInterests = Array.from(
      techEl.querySelectorAll('.interest-tag')
    ).map(tag => tag.textContent);
  }

  const personalEl = document.getElementById('personal-interests');
  if (personalEl) {
    state.personalInterests = Array.from(
      personalEl.querySelectorAll('.interest-tag')
    ).map(tag => tag.textContent);
  }

  const skillsEl = document.getElementById('skills-container');
  if (skillsEl) {
    state.skills = Array.from(
      skillsEl.querySelectorAll('.skill-tag')
    ).map(tag => tag.textContent);
  }

  saveState();
  showToast('✅ Profile saved!');
}

/* ══════════════════════════════════════
   TOAST NOTIFICATION
══════════════════════════════════════ */
function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;padding:12px 20px;
    background:var(--text);color:var(--surface);border-radius:12px;font-size:13px;
    font-weight:700;font-family:var(--font-display);box-shadow:0 8px 32px rgba(0,0,0,0.2);
    animation:popIn 0.3s ease both;`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

/* ══════════════════════════════════════
   SIDEBAR (mobile)
══════════════════════════════════════ */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('show');
  if (overlay) {
    overlay.classList.toggle('show');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) {
    sidebar.classList.remove('show');
  }
  if (overlay) {
    overlay.classList.remove('show');
  }
}

/* ══════════════════════════════════════
   SETTINGS PANEL
══════════════════════════════════════ */
function openSettings() {
  document.getElementById('settings-panel').classList.add('open');
  document.getElementById('settings-backdrop').classList.add('open');
}

function closeSettings() {
  document.getElementById('settings-panel').classList.remove('open');
  document.getElementById('settings-backdrop').classList.remove('open');
}

/* ══════════════════════════════════════
   THEME
══════════════════════════════════════ */
function setTheme(id) {
  state.theme = id;
  document.body.setAttribute('data-theme', id === 'default' ? '' : id);
  const banner = document.getElementById('profile-banner');
  if (banner) {
    const t = THEMES.find(x => x.id === id);
    if (t) {
      banner.style.background = t.bg;
    }
  }
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === id);
  });
  saveState();
}

function buildThemeGrid() {
  const g = document.getElementById('theme-grid');
  g.innerHTML = THEMES.map(t => `
    <div class="theme-swatch ${state.theme===t.id?'active':''}" data-theme="${t.id}"
      style="background:${t.bg};" onclick="setTheme('${t.id}')">
      <span class="theme-name">${t.name}</span>
    </div>`).join('');
}

/* ══════════════════════════════════════
   BORDER (IMAGE BORDER)
══════════════════════════════════════ */
function setBorder(id, grad) {
  state.border = id;
  state.borderGrad = grad;
  applyBorderStyle(grad);
  document.querySelectorAll('.bp-item').forEach(el => el.classList.toggle('active', el.dataset.bid === id));
  saveState();
}

function applyBorderStyle(grad) {
  const outer = document.getElementById('av-outer');
  if (!outer) {
    return;
  }
  outer.style.background = grad;
  if (state.animBorder) {
    outer.classList.add('animated-border');
  } else {
    outer.classList.remove('animated-border');
  }
}

function toggleAnimBorder(on) {
  state.animBorder = on;
  const outer = document.getElementById('av-outer');
  if (on) {
    outer.classList.add('animated-border');
  } else {
    outer.classList.remove('animated-border');
    outer.style.background = state.borderGrad;
  }
  saveState();
}

function applyCustomBorder() {
  const c1 = document.getElementById('custom-c1').value;
  const c2 = document.getElementById('custom-c2').value;
  const dir = document.getElementById('custom-dir').value;
  state.customBorderC1 = c1;
  state.customBorderC2 = c2;
  state.customBorderDir = dir;
  const grad = `linear-gradient(${dir},${c1},${c2})`;
  state.borderGrad = grad;
  applyBorderStyle(grad);
  document.querySelectorAll('.bp-item').forEach(el => el.classList.remove('active'));
}

function buildBorderPresets() {
  const g = document.getElementById('border-presets');
  g.innerHTML = BORDERS.map(b => `
    <div class="bp-item ${state.border===b.id?'active':''}" data-bid="${b.id}" onclick="setBorder('${b.id}','${b.grad}')">
      <div class="bp-preview" style="background:${b.grad}">
        <div class="bp-preview-inner">${b.emoji}</div>
      </div>
      <div class="bp-label">${b.name}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════
   NAMECARD
══════════════════════════════════════ */
const NC_ALL = NAMECARD_STYLES.map(s => s.cls);

function setNamecard(cls) {
  state.namecard = cls;
  const nc = document.getElementById('namecard');
  NC_ALL.filter(Boolean).forEach(c => nc.classList.remove(c));
  if (cls) {
    nc.classList.add(cls);
  }
  document.querySelectorAll('.nc-preset').forEach(el => el.classList.toggle('active', el.dataset.ncc === cls));
  saveState();
}

function buildNcPresets() {
  const g = document.getElementById('nc-presets');
  g.innerHTML = NAMECARD_STYLES.map(s => `
    <div class="nc-preset ${state.namecard===s.cls?'active':''}" data-ncc="${s.cls}"
      style="background:${s.bg};color:${s.color};"
      onclick="setNamecard('${s.cls}')">
      ${s.name}
    </div>`).join('');
}

/*BACKGROUND*/
function setBg(id) {
  state.bg = id;
  state.bgCustom = null;
  const preset = BG_PRESETS.find(b => b.id === id);
  const bgLayer = document.getElementById('bg-layer');
  const bgOverlay = document.getElementById('bg-overlay');
  bgLayer.classList.remove('has-image');
  bgLayer.style.backgroundImage = '';
  if (preset) {
    if (preset.isColor) {
      bgLayer.style.background = '';
    } else {
      bgLayer.style.background = preset.style;
      bgOverlay.style.background = 'var(--bg)';
    }
  }
  document.querySelectorAll('.bg-option').forEach(el => el.classList.toggle('active', el.dataset.bgid === id));
  saveState();
}

function handleBgUpload(e) {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    state.bgCustom = ev.target.result;
    state.bg = 'custom';
    const bgLayer = document.getElementById('bg-layer');
    bgLayer.classList.add('has-image');
    bgLayer.style.backgroundImage = `url(${ev.target.result})`;
    bgLayer.style.backgroundSize = 'cover';
    bgLayer.style.backgroundPosition = 'center';
    document.querySelectorAll('.bg-option').forEach(el => el.classList.remove('active'));
    saveState();
  };
  reader.readAsDataURL(file);
}

function setOverlay(val) {
  state.overlayOpacity = parseInt(val);
  document.getElementById('overlay-val').textContent = val + '%';
  document.documentElement.style.setProperty('--bg-overlay-opacity', val / 100);
  saveState();
}

function togglePattern(on) {
  state.showPattern = on;
  document.getElementById('bg-pattern-overlay').style.opacity = on ? '0.5' : '0';
  saveState();
}

function buildBgGrid() {
  const g = document.getElementById('bg-grid');
  g.innerHTML = BG_PRESETS.map(b => `
    <div class="bg-option ${state.bg===b.id?'active':''}" data-bgid="${b.id}"
      style="${b.isColor ? 'background:var(--bg)' : `background:${b.style}`};"
      onclick="setBg('${b.id}')">
      <span>${b.name}</span>
    </div>`).join('');
}

/*CUSTOM FONT */
function applyFont(bodyFont, displayFont) {
  document.documentElement.style.setProperty('--font', bodyFont);
  document.documentElement.style.setProperty('--font-display', displayFont);
  updateFontPreview();
}

function setFontPreset(idx) {
  state.fontPreset = idx;
  state.customFont = '';
  document.getElementById('custom-font-input').value = '';
  const fp = FONT_PRESETS[idx];
  loadGoogleFont(fp.name !== 'Jakarta (Default)' && fp.name !== 'Inter' ? fp.name : null);
  applyFont(fp.body, fp.display);
  document.querySelectorAll('.font-preset-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  saveState();
}

function applyCustomFont() {
  const val = document.getElementById('custom-font-input').value.trim();
  if (!val) {
    return;
  }
  state.customFont = val;
  state.fontPreset = -1;
  loadGoogleFont(val);
  const fontStack = `'${val}', system-ui, sans-serif`;
  applyFont(fontStack, fontStack);
  document.querySelectorAll('.font-preset-btn').forEach(b => b.classList.remove('active'));
  saveState();
}

function loadGoogleFont(fontName) {
  if (!fontName) {
    return;
  }
  const id = 'gf-' + fontName.replace(/\s+/g, '-');
  if (document.getElementById(id)) {
    return;
  }
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontName)}:wght@400;600;700;800&display=swap`;
  document.head.appendChild(link);
}

function updateFontPreview() {
  const preview = document.getElementById('font-preview');
  if (preview) {
    preview.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font');
  }
}

function buildFontPresets() {
  const g = document.getElementById('font-presets');
  g.innerHTML = FONT_PRESETS.map((f, i) => `
    <button class="font-preset-btn ${state.fontPreset===i?'active':''}" onclick="setFontPreset(${i})"
      style="font-family:${f.body}">${f.name}</button>
  `).join('');
}

/*PARTICLES*/
function buildParticles() {
  const c = document.getElementById('particles-container');
  c.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*4}s;
      opacity:${Math.random()*0.06+0.02};
    `;
    c.appendChild(p);
  }
}

function toggleParticles(on) {
  state.showParticles = on;
  document.getElementById('particles-container').style.display = on ? '' : 'none';
  saveState();
}

/*AVATAR*/
function buildEmojiGrid() {
  const g = document.getElementById('emoji-grid');
  g.innerHTML = EMOJIS.map(em => `
    <button class="em-btn ${state.currentEmoji===em?'active':''}" onclick="setEmoji('${em}')">${em}</button>
  `).join('');
}

function setEmoji(em) {
  state.currentEmoji = em;
  document.getElementById('av-emoji').textContent = em;
  document.getElementById('sp-av-emoji').textContent = em;
  document.querySelectorAll('.em-btn').forEach(b => b.classList.toggle('active', b.textContent === em));
  saveState();
}

function handleAvatarUpload(e) {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    state.avatarSrc = ev.target.result;
    ['av-img','sp-av-img'].forEach(id => {
      const img = document.getElementById(id);
      img.src = ev.target.result;
      img.style.display = 'block';
    });
    document.getElementById('av-emoji').style.display = 'none';
    document.getElementById('sp-av-emoji').style.display = 'none';
    saveState();
  };
  reader.readAsDataURL(file);
}

function clearAvatar() {
  state.avatarSrc = null;
  ['av-img','sp-av-img'].forEach(id => { document.getElementById(id).style.display = 'none'; });
  document.getElementById('av-emoji').style.display = '';
  document.getElementById('sp-av-emoji').style.display = '';
  document.getElementById('avatar-upload').value = '';
  saveState();
}
function updateName(v) {
  document.getElementById('nc-name').textContent = v;
  document.getElementById('sidebar-name').textContent = v;
  document.getElementById('sidebar-avatar-text').textContent =
    v.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

function updateRole(v) {
  document.getElementById('nc-role').textContent = v;
}

function updateMotto(v) {
  document.getElementById('nc-motto').textContent = v;
}

function updateMusic(field, v) {
  if (field === 'title') {
    document.getElementById('music-title-el').textContent = v;
  }
  if (field === 'artist') {
    document.getElementById('music-artist-el').textContent = v;
  }
}

function applyState() {
  setTheme(state.theme);
  applyBorderStyle(state.borderGrad);

  if (state.animBorder) {
    document.getElementById('anim-border-toggle').checked = true;
    toggleAnimBorder(true);
  }

  setNamecard(state.namecard);

  if (state.bgCustom) {
    const bgLayer = document.getElementById('bg-layer');
    bgLayer.classList.add('has-image');
    bgLayer.style.backgroundImage = `url(${state.bgCustom})`;
    bgLayer.style.backgroundSize = 'cover';
  } else if (state.bg !== 'none') {
    setBg(state.bg);
  }

  document.getElementById('overlay-slider').value = state.overlayOpacity;
  document.getElementById('overlay-val').textContent = state.overlayOpacity + '%';
  document.documentElement.style.setProperty('--bg-overlay-opacity', state.overlayOpacity / 100);
  document.getElementById('pattern-toggle').checked = state.showPattern;
  togglePattern(state.showPattern);
  document.getElementById('particles-toggle').checked = state.showParticles;

  if (!state.showParticles) {
    document.getElementById('particles-container').style.display = 'none';
  }

  document.getElementById('av-emoji').textContent = state.currentEmoji;
  document.getElementById('sp-av-emoji').textContent = state.currentEmoji;

  if (state.avatarSrc) {
    ['av-img','sp-av-img'].forEach(id => {
      const img = document.getElementById(id);
      img.src = state.avatarSrc;
      img.style.display = 'block';
    });
    document.getElementById('av-emoji').style.display = 'none';
    document.getElementById('sp-av-emoji').style.display = 'none';
  }

  if (state.displayName) {
    document.getElementById('nc-name').textContent = state.displayName;
    document.getElementById('sidebar-name').textContent = state.displayName;
    document.getElementById('sp-name').value = state.displayName;
  }

  if (state.roleText) {
    document.getElementById('nc-role').textContent = state.roleText;
    document.getElementById('sp-role').value = state.roleText;
  }

  if (state.mottoText) {
    document.getElementById('nc-motto').textContent = `"${state.mottoText}"`;
  }

  if (state.bio) {
    document.getElementById('bio-field').innerHTML = state.bio;
  }

  if (state.hobbies && state.hobbies.length) {
    const g = document.getElementById('hobbies-grid');
    if (g) {
      const addCard = g.querySelector('[data-add-hobby]');
      g.querySelectorAll('.hobby-card:not([data-add-hobby])').forEach(c => c.remove());
      state.hobbies.forEach(h => {
        const card = document.createElement('div');
        card.className = 'hobby-card';
        card.innerHTML = `<div class="hobby-icon">${h.icon}</div><div class="hobby-name">${h.name}</div>`;
        g.insertBefore(card, addCard);
      });
    }
  }

  if (state.techInterests && state.techInterests.length) {
    const c = document.getElementById('tech-interests');
    if (c) {
      const addBtn = c.querySelector('.add-tag-btn');
      c.querySelectorAll('.interest-tag').forEach(t => t.remove());
      state.techInterests.forEach(txt => {
        const tag = document.createElement('span');
        tag.className = 'interest-tag';
        tag.textContent = txt;
        c.insertBefore(tag, addBtn);
      });
    }
  }

  if (state.personalInterests && state.personalInterests.length) {
    const c = document.getElementById('personal-interests');
    if (c) {
      const addBtn = c.querySelector('.add-tag-btn');
      c.querySelectorAll('.interest-tag').forEach(t => t.remove());
      state.personalInterests.forEach(txt => {
        const tag = document.createElement('span');
        tag.className = 'interest-tag';
        tag.textContent = txt;
        c.insertBefore(tag, addBtn);
      });
    }
  }

  if (state.skills && state.skills.length) {
    const c = document.getElementById('skills-container');
    if (c) {
      const addBtn = c.querySelector('.add-tag-btn');
      c.querySelectorAll('.skill-tag').forEach(t => t.remove());
      state.skills.forEach(txt => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = txt;
        tag.onclick = function(){ removeTag(this); };
        c.insertBefore(tag, addBtn);
      });
    }
  }

  document.getElementById('custom-c1').value = state.customBorderC1;
  document.getElementById('custom-c2').value = state.customBorderC2;
  document.getElementById('custom-dir').value = state.customBorderDir;

  if (state.customFont) {
    loadGoogleFont(state.customFont);
    const fontStack = `'${state.customFont}', system-ui, sans-serif`;
    applyFont(fontStack, fontStack);
    document.getElementById('custom-font-input').value = state.customFont;
  } else if (state.fontPreset >= 0 && FONT_PRESETS[state.fontPreset]) {
    const fp = FONT_PRESETS[state.fontPreset];
    loadGoogleFont(fp.name !== 'Jakarta (Default)' && fp.name !== 'Inter' ? fp.name : null);
    applyFont(fp.body, fp.display);
  }
}

function setStatus(type, badgeText, statusText, btn) {
  document.querySelectorAll('.status-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nc-status-dot').className = 'status-dot ' + type;
  document.getElementById('nc-status-text').textContent = statusText;
  document.getElementById('status-badge-pill').textContent = badgeText;
  document.getElementById('custom-status-input').value = statusText;
}

function setCustomStatus(val) {
  document.getElementById('nc-status-text').textContent = val || 'Online';
}


function addSkill() {
  const name = prompt('Add a skill:');
  if (!name || !name.trim()) {
    return;
  }
  const c = document.getElementById('skills-container');
  const addBtn = c.querySelector('.add-tag-btn');
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.textContent = name.trim();
  tag.onclick = function(){ removeTag(this); };
  c.insertBefore(tag, addBtn);
  tag.style.animation = 'popIn 0.3s ease';
  saveAll();
}

function removeTag(el) {
  if (confirm(`Remove "${el.textContent}"?`)) {
    el.style.animation = 'none';
    el.style.opacity = '0';
    el.style.transform = 'scale(0.8)';
    el.style.transition = 'all 0.2s';
    setTimeout(() => { el.remove(); saveAll(); }, 200);
  }
}

function addInterest(containerId, type) {
  const name = prompt(`Add ${type}:`);
  if (!name || !name.trim()) {
    return;
  }
  const c = document.getElementById(containerId);
  const addBtn = c.querySelector('.add-tag-btn');
  const tag = document.createElement('span');
  tag.className = 'interest-tag';
  tag.textContent = name.trim();
  c.insertBefore(tag, addBtn);
  tag.style.animation = 'popIn 0.3s ease';
  saveAll();
}


function addHobby() {
  const icon = prompt('Emoji icon (e.g. 🎨):') || '❓';
  const name = prompt('Hobby name:');
  if (!name || !name.trim()) {
    return;
  }
  const g = document.getElementById('hobbies-grid');
  const addCard = g.querySelector('[data-add-hobby]');
  const card = document.createElement('div');
  card.className = 'hobby-card';
  card.innerHTML = `<div class="hobby-icon">${icon}</div><div class="hobby-name">${name.trim()}</div>`;
  card.style.animation = 'popIn 0.3s ease';
  g.insertBefore(card, addCard);
  saveAll();
}

const msgColors = [
  ['#dce7fd','#1a4fd6'],
  ['#d6f5e7','#146b45'],
  ['#ede8fd','#6d3fb5'],
  ['#fef3dc','#a05a08'],
  ['#fde8e8','#b52424']
];

function sendMsg() {
  const inp = document.getElementById('msg-input');
  const text = inp.value.trim();
  if (!text) {
    return;
  }
  const feed = document.getElementById('msg-feed');
  const [bg, col] = msgColors[Math.floor(Math.random() * msgColors.length)];
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'});
  const div = document.createElement('div');
  div.className = 'msg-item';
  div.innerHTML = `
    <div class="msg-av" style="background:${bg};color:${col};">AK</div>
    <div class="msg-body">
      <div><span class="msg-sender">Aryan Kumar</span><span class="msg-time">Now, ${time}</span></div>
      <div class="msg-text">${text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    </div>`;
  feed.appendChild(div);
  feed.scrollTop = feed.scrollHeight;
  inp.value = '';
}

function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

function buildBannerSparkles() {
  const c = document.getElementById('banner-sparkles');
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'banner-sparkle';
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${Math.random()*6+2}px;height:${Math.random()*6+2}px;
      animation-delay:${Math.random()*2}s;animation-duration:${Math.random()*2+1.5}s;`;
    c.appendChild(s);
  }
}

(function() {
  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const el = document.getElementById('topbar-date');
  if (el) {
    el.textContent = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
  }
})();

(function() {
  const el = document.getElementById('bg-pattern-overlay');
  el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4fd6' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
})();

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    if (window.innerWidth <= 820) {
      closeSidebar();
    }
  });
});

//initialization
loadState();
buildThemeGrid();
buildBorderPresets();
buildNcPresets();
buildBgGrid();
buildEmojiGrid();
buildFontPresets();
buildParticles();
buildBannerSparkles();
applyState();

window.addEventListener('beforeunload', saveAll);
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === ',') {
    e.preventDefault();
    openSettings();
  }
  if (e.key === 'Escape') {
    closeSettings();
  }
});