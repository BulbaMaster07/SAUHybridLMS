//base data
const THEMES = [
  { id: 'default', name: 'Blue',   bg: 'linear-gradient(135deg,#1a4fd6,#0d2a80)' },
  { id: 'ocean',   name: 'Ocean',  bg: 'linear-gradient(135deg,#0b7fa8,#064560)' },
  { id: 'forest',  name: 'Forest', bg: 'linear-gradient(135deg,#146b45,#083d24)' },
  { id: 'sunset',  name: 'Sunset', bg: 'linear-gradient(135deg,#c05022,#7a2800)' },
  { id: 'night',   name: 'Night',  bg: 'linear-gradient(135deg,#4f87ff,#101624)' },
  { id: 'galaxy',  name: 'Galaxy', bg: 'linear-gradient(135deg,#8b5cf6,#1e0045)' },
];

const BORDERS = [
  { id: 'blue',   name: 'Sapphire', grad: 'linear-gradient(135deg,#1a4fd6,#3b6ef0)',            emoji: '💙' },
  { id: 'purple', name: 'Violet',   grad: 'linear-gradient(135deg,#7c3aed,#ec4899)',            emoji: '💜' },
  { id: 'fire',   name: 'Inferno',  grad: 'linear-gradient(135deg,#f59e0b,#ef4444)',            emoji: '🔥' },
  { id: 'nature', name: 'Nature',   grad: 'linear-gradient(135deg,#10b981,#06b6d4)',            emoji: '🌿' },
  { id: 'gold',   name: 'Gold',     grad: 'linear-gradient(135deg,#f59e0b,#ca8a04)',            emoji: '✨' },
  { id: 'neon',   name: 'Neon',     grad: 'linear-gradient(135deg,#ff00ff,#00ffff)',            emoji: '🌟' },
  { id: 'cosmic', name: 'Cosmic',   grad: 'linear-gradient(135deg,#a78bfa,#818cf8,#60a5fa)',   emoji: '🌌' },
  { id: 'rose',   name: 'Rose',     grad: 'linear-gradient(135deg,#fda4af,#f43f5e)',            emoji: '🌸' },
];

const NAMECARD_STYLES = [
  { cls: '',            name: 'Default',  bg: 'linear-gradient(135deg,#0d2a80,#1a4fd6)', color: 'white' },
  { cls: 'nc-dark',     name: 'Onyx',     bg: 'linear-gradient(135deg,#111827,#374151)', color: '#f9fafb' },
  { cls: 'nc-glass',    name: 'Glass',    bg: 'rgba(255,255,255,0.25)',                  color: 'var(--text)' },
  { cls: 'nc-warm',     name: 'Ember',    bg: 'linear-gradient(135deg,#7c2d12,#f97316)', color: 'white' },
  { cls: 'nc-purple',   name: 'Amethyst', bg: 'linear-gradient(135deg,#3b0764,#a78bfa)', color: 'white' },
  { cls: 'nc-teal',     name: 'Lagoon',   bg: 'linear-gradient(135deg,#134e4a,#2dd4bf)', color: 'white' },
  { cls: 'nc-flat',     name: 'Minimal',  bg: 'var(--surface2)',                         color: 'var(--text)' },
  { cls: 'nc-aurora',   name: 'Aurora',   bg: 'linear-gradient(135deg,#0a2a1a,#2dd4bf)', color: '#ecfdf5' },
];

const EMOJIS = ['👩‍🏫','👨‍🏫','🎓','📚','🔬','💡','🌟','🏆','🔥','⚡','🌙','📖','🖥️','🧪','🌺','🎯','💎','🚀'];

const FONT_PRESETS = [
  { name: 'Jakarta (Default)', body: "'Plus Jakarta Sans', system-ui, sans-serif", display: "'Nunito', sans-serif" },
  { name: 'Nunito',  body: "'Nunito', sans-serif",   display: "'Nunito', sans-serif" },
  { name: 'Lora',    body: "'Lora', Georgia, serif",  display: "'Nunito', sans-serif" },
  { name: 'Raleway', body: "'Raleway', sans-serif",   display: "'Raleway', sans-serif" },
];

//states
let state = {
  theme: 'default',
  border: 'blue',
  borderGrad: 'linear-gradient(135deg,#1a4fd6,#3b6ef0)',
  animBorder: false,
  namecard: '',
  currentEmoji: '👩‍🏫',
  avatarSrc: null,
  customBorderC1: '#1a4fd6',
  customBorderC2: '#3b6ef0',
  customBorderDir: '135deg',
  fontPreset: 0,
  customFont: '',
  displayName: 'Dr. Deepa Sharma',
  roleText: 'Associate Professor · CSE Dept.',
  mottoText: 'Teaching is the profession that creates all other professions.',
  bio: '',
  skills: [],
  techInterests: [],
};

//localstorage
function loadState() {
  try {
    const s = localStorage.getItem('teacher_profile_v1');
    if (s) {
      Object.assign(state, JSON.parse(s));
    }
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('teacher_profile_v1', JSON.stringify(state));
  } catch(e) {}
}


function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    padding: 12px 20px;
    background: var(--text);
    color: var(--surface);
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    font-family: var(--font-display);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    animation: popIn 0.3s ease both;
  `;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 2200);
}

//sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar) {
    return;
  }
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

//settings
function openSettings() {
  document.getElementById('settings-panel').classList.add('open');
  document.getElementById('settings-backdrop').classList.add('open');
}

function closeSettings() {
  document.getElementById('settings-panel').classList.remove('open');
  document.getElementById('settings-backdrop').classList.remove('open');
}

//theme
function setTheme(id) {
  state.theme = id;
  document.body.setAttribute('data-theme', id === 'default' ? '' : id);
  const banner = document.getElementById('profile-banner');
  const t = THEMES.find(x => x.id === id);
  if (t && banner) {
    banner.style.background = t.bg;
  }
  document.querySelectorAll('.theme-swatch').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === id);
  });
  saveState();
}

function buildThemeGrid() {
  document.getElementById('theme-grid').innerHTML = THEMES.map(t => `
    <div class="theme-swatch ${state.theme === t.id ? 'active' : ''}" data-theme="${t.id}"
      style="background:${t.bg};" onclick="setTheme('${t.id}')">
      <span class="theme-name">${t.name}</span>
    </div>`).join('');
}

//borders
function setBorder(id, grad) {
  state.border = id;
  state.borderGrad = grad;
  applyBorderStyle(grad);
  document.querySelectorAll('.bp-item').forEach(el => {
    el.classList.toggle('active', el.dataset.bid === id);
  });
  saveState();
}

function applyBorderStyle(grad) {
  const o = document.getElementById('av-outer');
  if (!o) {
    return;
  }
  o.style.background = grad;
  if (state.animBorder) {
    o.classList.add('animated-border');
  } else {
    o.classList.remove('animated-border');
  }
}

function toggleAnimBorder(on) {
  state.animBorder = on;
  const o = document.getElementById('av-outer');
  if (on) {
    o.classList.add('animated-border');
  } else {
    o.classList.remove('animated-border');
    o.style.background = state.borderGrad;
  }
  saveState();
}

function applyCustomBorder() {
  const c1 = document.getElementById('custom-c1').value;
  const c2 = document.getElementById('custom-c2').value;
  const dir = document.getElementById('custom-dir').value;
  const grad = `linear-gradient(${dir},${c1},${c2})`;
  state.borderGrad = grad;
  state.customBorderC1 = c1;
  state.customBorderC2 = c2;
  state.customBorderDir = dir;
  applyBorderStyle(grad);
  document.querySelectorAll('.bp-item').forEach(el => el.classList.remove('active'));
}

function buildBorderPresets() {
  document.getElementById('border-presets').innerHTML = BORDERS.map(b => `
    <div class="bp-item ${state.border === b.id ? 'active' : ''}" data-bid="${b.id}"
      onclick="setBorder('${b.id}','${b.grad}')">
      <div class="bp-preview" style="background:${b.grad}">
        <div class="bp-preview-inner">${b.emoji}</div>
      </div>
      <div class="bp-label">${b.name}</div>
    </div>`).join('');
}

//namecard
const NC_ALL = NAMECARD_STYLES.map(s => s.cls);

function setNamecard(cls) {
  state.namecard = cls;
  const nc = document.getElementById('namecard');
  NC_ALL.filter(Boolean).forEach(c => nc.classList.remove(c));
  if (cls) {
    nc.classList.add(cls);
  }
  document.querySelectorAll('.nc-preset').forEach(el => {
    el.classList.toggle('active', el.dataset.ncc === cls);
  });
  saveState();
}

function buildNcPresets() {
  document.getElementById('nc-presets').innerHTML = NAMECARD_STYLES.map(s => `
    <div class="nc-preset ${state.namecard === s.cls ? 'active' : ''}" data-ncc="${s.cls}"
      style="background:${s.bg};color:${s.color};"
      onclick="setNamecard('${s.cls}')">${s.name}</div>`).join('');
}

//avatar
function buildEmojiGrid() {
  document.getElementById('emoji-grid').innerHTML = EMOJIS.map(em => `
    <button class="em-btn ${state.currentEmoji === em ? 'active' : ''}"
      onclick="setEmoji('${em}')">${em}</button>`).join('');
}

function setEmoji(em) {
  state.currentEmoji = em;
  document.getElementById('av-emoji').textContent = em;
  document.getElementById('sp-av-emoji').textContent = em;
  document.querySelectorAll('.em-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === em);
  });
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
    ['av-img', 'sp-av-img'].forEach(id => {
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

//font styles
function applyFont(body, display) {
  document.documentElement.style.setProperty('--font', body);
  document.documentElement.style.setProperty('--font-display', display);
  updateFontPreview();
}

function setFontPreset(idx) {
  state.fontPreset = idx;
  state.customFont = '';
  document.getElementById('custom-font-input').value = '';
  const fp = FONT_PRESETS[idx];
  loadGoogleFont(fp.name !== 'Jakarta (Default)' ? fp.name : null);
  applyFont(fp.body, fp.display);
  document.querySelectorAll('.font-preset-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
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
  const fs = `'${val}', system-ui, sans-serif`;
  applyFont(fs, fs);
  document.querySelectorAll('.font-preset-btn').forEach(b => b.classList.remove('active'));
  saveState();
}

function loadGoogleFont(name) {
  if (!name) {
    return;
  }
  const id = 'gf-' + name.replace(/\s+/g, '-');
  if (document.getElementById(id)) {
    return;
  }
  const l = document.createElement('link');
  l.id = id;
  l.rel = 'stylesheet';
  l.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@400;600;700;800&display=swap`;
  document.head.appendChild(l);
}

function updateFontPreview() {
  const p = document.getElementById('font-preview');
  if (p) {
    p.style.fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font');
  }
}

function buildFontPresets() {
  document.getElementById('font-presets').innerHTML = FONT_PRESETS.map((f, i) => `
    <button class="font-preset-btn ${state.fontPreset === i ? 'active' : ''}"
      onclick="setFontPreset(${i})" style="font-family:${f.body}">${f.name}</button>`).join('');
}


function liveUpdate(field, val) {
  if (field === 'name') {
    document.getElementById('nc-name').textContent = val;
    document.getElementById('sidebar-name').textContent = val.split(' ').slice(-1)[0];
  }
  if (field === 'role') {
    document.getElementById('nc-role').textContent = val;
  }
}

//status
function setStatus(type, badgeText, statusText, btn) {
  document.querySelectorAll('.status-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('nc-status-dot').className = 'status-dot ' + type;
  document.getElementById('nc-status-text').textContent = statusText;
  document.getElementById('status-badge-pill').textContent = badgeText;
  document.getElementById('custom-status-input').value = statusText;
}

function setCustomStatus(val) {
  document.getElementById('nc-status-text').textContent = val || 'Available';
}

//tags
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
  tag.onclick = function() { removeTag(this); };
  c.insertBefore(tag, addBtn);
  tag.style.animation = 'popIn 0.3s ease';
  saveAll();
}

function removeTag(el) {
  if (confirm(`Remove "${el.textContent}"?`)) {
    el.style.opacity = '0';
    el.style.transition = 'all 0.2s';
    setTimeout(() => {
      el.remove();
      saveAll();
    }, 200);
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

//tabs
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

//messages
const msgColors = [
  ['#dce7fd','#1a4fd6'],
  ['#d6f5e7','#146b45'],
  ['#ede8fd','#6d3fb5'],
  ['#fef3dc','#a05a08'],
  ['#fde8e8','#b52424'],
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
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'msg-item';
  div.innerHTML = `
    <div class="msg-av" style="background:${bg};color:${col};">DS</div>
    <div class="msg-body">
      <div><span class="msg-sender">Dr. Sharma (You)</span><span class="msg-time">Now, ${time}</span></div>
      <div class="msg-text">${text.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    </div>`;
  feed.appendChild(div);
  feed.scrollTop = feed.scrollHeight;
  inp.value = '';
}

function buildParticles() {
  const c = document.getElementById('particles-container');
  c.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 4}s;
      opacity: ${Math.random() * 0.06 + 0.02};
    `;
    c.appendChild(p);
  }
}

function buildBannerSparkles() {
  const c = document.getElementById('banner-sparkles');
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('div');
    s.className = 'banner-sparkle';
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 6 + 2}px;
      height: ${Math.random() * 6 + 2}px;
      animation-delay: ${Math.random() * 2}s;
      animation-duration: ${Math.random() * 2 + 1.5}s;
    `;
    c.appendChild(s);
  }
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
    state.mottoText = motto.textContent;
  }
  const sc = document.getElementById('skills-container');
  if (sc) {
    state.skills = Array.from(sc.querySelectorAll('.skill-tag')).map(t => t.textContent);
  }
  saveState();
  showToast('✅ Profile saved!');
}

//saved state application
function applyState() {
  setTheme(state.theme);
  applyBorderStyle(state.borderGrad);
  if (state.animBorder) {
    document.getElementById('anim-border-toggle').checked = true;
    toggleAnimBorder(true);
  }
  setNamecard(state.namecard);
  document.getElementById('custom-c1').value = state.customBorderC1;
  document.getElementById('custom-c2').value = state.customBorderC2;
  document.getElementById('custom-dir').value = state.customBorderDir;
  document.getElementById('av-emoji').textContent = state.currentEmoji;
  document.getElementById('sp-av-emoji').textContent = state.currentEmoji;
  if (state.avatarSrc) {
    ['av-img', 'sp-av-img'].forEach(id => {
      const img = document.getElementById(id);
      img.src = state.avatarSrc;
      img.style.display = 'block';
    });
    document.getElementById('av-emoji').style.display = 'none';
    document.getElementById('sp-av-emoji').style.display = 'none';
  }
  if (state.displayName) {
    document.getElementById('nc-name').textContent = state.displayName;
    document.getElementById('sp-name').value = state.displayName;
  }
  if (state.roleText) {
    document.getElementById('nc-role').textContent = state.roleText;
    document.getElementById('sp-role').value = state.roleText;
  }
  if (state.mottoText) {
    document.getElementById('nc-motto').textContent = state.mottoText;
  }
  if (state.bio) {
    document.getElementById('bio-field').innerHTML = state.bio;
  }
  if (state.skills && state.skills.length) {
    const sc = document.getElementById('skills-container');
    const addBtn = sc.querySelector('.add-tag-btn');
    sc.querySelectorAll('.skill-tag').forEach(t => t.remove());
    state.skills.forEach(txt => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = txt;
      tag.onclick = function() { removeTag(this); };
      sc.insertBefore(tag, addBtn);
    });
  }
  if (state.customFont) {
    loadGoogleFont(state.customFont);
    const fs = `'${state.customFont}', system-ui, sans-serif`;
    applyFont(fs, fs);
    document.getElementById('custom-font-input').value = state.customFont;
  } else if (state.fontPreset >= 0 && FONT_PRESETS[state.fontPreset]) {
    const fp = FONT_PRESETS[state.fontPreset];
    loadGoogleFont(fp.name !== 'Jakarta (Default)' ? fp.name : null);
    applyFont(fp.body, fp.display);
  }
}

//date in topbar
(function() {
  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const el = document.getElementById('topbar-date');
  if (el) {
    el.textContent = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
  }
})();

//activation of sidebar nav items
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
    closeSidebar();
  }
});