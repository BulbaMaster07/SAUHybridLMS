(function syncProfileData() {
  try {
    const saved = localStorage.getItem('aryan_profile_v3');
    if (!saved) return;
    const state = JSON.parse(saved);

    // Sync display name in sidebar
    if (state.displayName) {
      const nameEl = document.getElementById('dashboard-user-name');
      if (nameEl) nameEl.textContent = state.displayName;

      // Update greeting with first name
      const greetingEl = document.getElementById('dashboard-greeting');
      if (greetingEl) {
        const hour = new Date().getHours();
        const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
        const firstName = state.displayName.split(' ')[0];
        greetingEl.textContent = `Good ${timeOfDay}, ${firstName} \u{1F44B}`;
      }
    }
  } catch(e) {}
})();
/* mobile sidebar */
function toggleSidebar(){
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('show');
  if(overlay) overlay.classList.toggle('show');
}

function closeSidebar(){
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.remove('show');
  if(overlay) overlay.classList.remove('show');
}
//date functions
(function setDate() {
  const now   = new Date();
  const days  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const el = document.getElementById('topbar-date');
  if (el) el.textContent = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();
})();


//side bar navigation
document.querySelectorAll('.nav-item').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
    item.classList.add('active');
  });
});

//tabs
function switchTab(el, tabId) {
  var parent = el.closest('.card-pad');
  parent.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
  el.classList.add('active');
  ['tab-assign', 'tab-grades', 'tab-sched'].forEach(function(id) {
    var panel = document.getElementById(id);
    if (panel) panel.style.display = (id === tabId) ? '' : 'none';
  });
}

//calendar
var now       = new Date();
var calYear   = now.getFullYear();
var calMonth  = now.getMonth();
var eventDays = [10, 12, 14, 18, 20];

var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function renderCal() {
  var label = document.getElementById('cal-month-label');
  if (label) label.textContent = MONTHS[calMonth] + ' ' + calYear;

  var grid = document.getElementById('cal-grid');
  if (!grid) return;

  var dows = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  var html = dows.map(function(d) { return '<div class="cal-dow">' + d + '</div>'; }).join('');

  var firstDay   = new Date(calYear, calMonth, 1).getDay();
  var daysInMo   = new Date(calYear, calMonth + 1, 0).getDate();
  var prevMonDays = new Date(calYear, calMonth, 0).getDate();

  for (var i = 0; i < firstDay; i++) {
    html += '<div class="cal-day other-month">' + (prevMonDays - firstDay + 1 + i) + '</div>';
  }
  for (var d = 1; d <= daysInMo; d++) {
    var isToday = (d === now.getDate() && calMonth === now.getMonth() && calYear === now.getFullYear());
    var hasEv   = (calMonth === now.getMonth() && calYear === now.getFullYear() && eventDays.indexOf(d) !== -1);
    var cls = (isToday ? ' today' : '') + (hasEv ? ' has-event' : '');
    html += '<div class="cal-day' + cls + '">' + d + '</div>';
  }

  var total = firstDay + daysInMo;
  var rem   = (total % 7 === 0) ? 0 : 7 - (total % 7);
  for (var j = 1; j <= rem; j++) {
    html += '<div class="cal-day other-month">' + j + '</div>';
  }

  grid.innerHTML = html;
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth <  0) { calMonth = 11; calYear--; }
  renderCal();
}

renderCal();


//notes section
function saveNote() {
  var indicator = document.getElementById('note-saved');
  if (!indicator) return;
  indicator.style.opacity = '1';
  setTimeout(function() { indicator.style.opacity = '0'; }, 2200);
}

function clearNote() {
  var ta = document.querySelector('.notes-area');
  if (ta) ta.value = '';
}