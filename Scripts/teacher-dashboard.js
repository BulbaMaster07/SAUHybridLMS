// ========== SIDEBAR FUNCTIONS ==========
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('show');
  if (overlay) overlay.classList.toggle('show');
}

function closeSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('show');
  if (overlay) overlay.classList.remove('show');
}

// Set topbar date
(function() {
  var d = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dateEl = document.getElementById('topbar-date');
  if (dateEl) {
    dateEl.textContent = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }
})();

// ========== VIEW SWITCHING ==========
function showView(name, navEl) {
  document.querySelectorAll('.view').forEach(function(v) {
    v.classList.remove('active');
  });
  var target = document.getElementById('view-' + name);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(function(n) {
    n.classList.remove('active');
  });
  if (navEl) {
    navEl.classList.add('active');
  } else {
    document.querySelectorAll('.nav-item').forEach(function(n) {
      var clickAttr = n.getAttribute('onclick');
      if (clickAttr && clickAttr.indexOf("'" + name + "'") !== -1) {
        n.classList.add('active');
      }
    });
  }
  if (window.innerWidth <= 820) closeSidebar();
}

// Handle URL hash navigation
(function handleHashNavigation() {
  function getViewFromHash() {
    var hash = window.location.hash.substring(1);
    var validViews = ['overview', 'courses', 'students', 'assignments', 'grades', 'quizzes', 'planner', 'announcements'];
    return validViews.indexOf(hash) !== -1 ? hash : 'overview';
  }
  function navigateToView(viewName) {
    var navItems = document.querySelectorAll('.nav-item');
    var targetNavItem = null;
    for (var i = 0; i < navItems.length; i++) {
      var item = navItems[i];
      var onclickAttr = item.getAttribute('onclick');
      if (onclickAttr && onclickAttr.indexOf("'" + viewName + "'") !== -1) {
        targetNavItem = item;
        break;
      }
    }
    if (targetNavItem && typeof showView === 'function') {
      showView(viewName, targetNavItem);
    }
  }
  navigateToView(getViewFromHash());
  window.addEventListener('hashchange', function() {
    navigateToView(getViewFromHash());
  });
})();

// ========== QUIZ TABS ==========
function switchQuizTab(el, id) {
  document.querySelectorAll('#view-quizzes .tab').forEach(function(t) {
    t.classList.remove('active');
  });
  el.classList.add('active');
  var tabs = ['qt-all', 'qt-active', 'qt-closed'];
  for (var i = 0; i < tabs.length; i++) {
    var d = document.getElementById(tabs[i]);
    if (d) d.style.display = (tabs[i] === id) ? 'block' : 'none';
  }
}

// ========== MODALS ==========
function openModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
  if (id === 'modal-create-quiz') initQuizModal();
}

function closeModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

// ========== QUICK NOTES ==========
function saveNote() {
  var note = document.getElementById('teacher-notes');
  if (note) localStorage.setItem('teacher-note', note.value);
  var saved = document.getElementById('note-saved');
  if (saved) {
    saved.style.opacity = '1';
    setTimeout(function() { saved.style.opacity = '0'; }, 1800);
  }
}

function clearNote() {
  var note = document.getElementById('teacher-notes');
  if (note) note.value = '';
  localStorage.removeItem('teacher-note');
}

(function() {
  var note = document.getElementById('teacher-notes');
  if (note && localStorage.getItem('teacher-note')) note.value = localStorage.getItem('teacher-note');
})();

// ========== MINI CALENDAR ==========
var calYear, calMonth;
(function() {
  var now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth();
  renderCal();
})();

function changeMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCal();
}

function renderCal() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthLabel = document.getElementById('cal-month-label');
  if (monthLabel) monthLabel.textContent = months[calMonth] + ' ' + calYear;

  var grid = document.getElementById('cal-grid');
  if (!grid) return;
  grid.innerHTML = '';

  var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  for (var i = 0; i < weekdays.length; i++) {
    var el = document.createElement('div');
    el.className = 'cal-dow';
    el.textContent = weekdays[i];
    grid.appendChild(el);
  }

  var first = new Date(calYear, calMonth, 1).getDay();
  var days = new Date(calYear, calMonth + 1, 0).getDate();
  var today = new Date();
  var events = [10, 12, 14, 18, 22];

  for (var i = 0; i < first; i++) {
    var empty = document.createElement('div');
    empty.className = 'cal-day other-month';
    grid.appendChild(empty);
  }

  for (var d = 1; d <= days; d++) {
    var el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;
    if (d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear()) {
      el.classList.add('today');
    }
    if (events.indexOf(d) !== -1) el.classList.add('has-event');
    grid.appendChild(el);
  }
}

// ========== STUDENTS PAGINATION ==========
var allStudents = [
  { name: 'Aryan Kumar', course: 'Web Dev, ML', att: '92%', cgpa: '8.7', last: 'Today', status: 'Excellent', badge: 'badge-green' },
  { name: 'Priya Nair', course: 'ML, DBMS', att: '88%', cgpa: '8.2', last: 'Today', status: 'Active', badge: 'badge-green' },
  { name: 'Rohit Singh', course: 'DBMS, Networks', att: '74%', cgpa: '6.8', last: 'Yesterday', status: 'At Risk', badge: 'badge-amber' },
  { name: 'Sneha Rao', course: 'ML', att: '95%', cgpa: '9.1', last: 'Today', status: 'Excellent', badge: 'badge-green' },
  { name: 'Karan Mehta', course: 'Networks, Web Dev', att: '81%', cgpa: '7.9', last: '2 days ago', status: 'Active', badge: 'badge-green' }
];
var filteredStudents = allStudents.slice();
var studentsPage = 1;
var studentsPerPage = 5;

function renderStudentsTable() {
  var tbody = document.getElementById('students-tbody');
  if (!tbody) return;
  var total = filteredStudents.length;
  var totalPages = Math.max(1, Math.ceil(total / studentsPerPage));
  if (studentsPage > totalPages) studentsPage = totalPages;
  var start = (studentsPage - 1) * studentsPerPage;
  var end = Math.min(start + studentsPerPage, total);
  var slice = filteredStudents.slice(start, end);

  tbody.innerHTML = slice.map(function(s) {
    return '<tr><td><strong>' + s.name + '</strong></td><td>' + s.course + '</td><td>' + s.att + '</td><td>' + s.cgpa + '</td><td>' + s.last + '</td><td><span class="badge ' + s.badge + '">' + s.status + '</span></td></tr>';
  }).join('');

  var countLabel = document.getElementById('students-count-label');
  if (countLabel) countLabel.textContent = 'Showing ' + (total === 0 ? 0 : start + 1) + '-' + end + ' of ' + total;

  var pageInfo = document.getElementById('students-page-info');
  if (pageInfo) pageInfo.textContent = 'Page ' + studentsPage + ' of ' + totalPages;

  renderStudentsPagination(totalPages);
}

function renderStudentsPagination(totalPages) {
  var ctrl = document.getElementById('students-pagination');
  if (!ctrl) return;
  var html = '<button class="page-btn" onclick="studentsGoPage(' + (studentsPage - 1) + ')" ' + (studentsPage === 1 ? 'disabled' : '') + '>&#8249;</button>';
  for (var i = 1; i <= totalPages; i++) {
    html += '<button class="page-btn ' + (i === studentsPage ? 'active' : '') + '" onclick="studentsGoPage(' + i + ')">' + i + '</button>';
  }
  html += '<button class="page-btn" onclick="studentsGoPage(' + (studentsPage + 1) + ')" ' + (studentsPage === totalPages ? 'disabled' : '') + '>&#8250;</button>';
  ctrl.innerHTML = html;
}

function studentsGoPage(p) {
  var totalPages = Math.max(1, Math.ceil(filteredStudents.length / studentsPerPage));
  if (p < 1 || p > totalPages) return;
  studentsPage = p;
  renderStudentsTable();
}

function filterStudents(q) {
  filteredStudents = allStudents.filter(function(s) {
    return s.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 || s.course.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  studentsPage = 1;
  renderStudentsTable();
}
renderStudentsTable();

// ========== QUIZ BUILDER ==========
var questionCount = 0;

function initQuizModal() {
  var c = document.getElementById('questions-container');
  if (c.children.length === 0) addQuestionBlock();
}

function addQuestionBlock() {
  questionCount++;
  var idx = questionCount;
  var c = document.getElementById('questions-container');
  var div = document.createElement('div');
  div.className = 'question-block';
  div.id = 'qblock-' + idx;
  div.innerHTML = '<div class="question-block-header"><span class="question-block-title">Question ' + idx + '</span><button class="question-remove-btn" onclick="removeQuestionBlock(' + idx + ')" title="Remove question">&#10005;</button></div>' +
    '<select class="form-select" style="margin-bottom:8px;" id="qtype-' + idx + '"><option value="mcq">Multiple Choice</option><option value="tf">True / False</option><option value="short">Short Answer</option></select>' +
    '<input class="form-input" id="qtext-' + idx + '" placeholder="Enter question text..." style="margin-bottom:8px;">' +
    '<div class="q-options-grid" id="qopts-' + idx + '"><input class="form-input" id="qa-' + idx + '" placeholder="Option A"><input class="form-input" id="qb-' + idx + '" placeholder="Option B"><input class="form-input" id="qc-' + idx + '" placeholder="Option C"><input class="form-input" id="qd-' + idx + '" placeholder="Option D"></div>' +
    '<select class="form-select" style="margin-top:8px;" id="qans-' + idx + '"><option>Option A</option><option>Option B</option><option>Option C</option><option>Option D</option></select>';
  c.appendChild(div);

  document.getElementById('qtype-' + idx).addEventListener('change', function() {
    var opts = document.getElementById('qopts-' + idx);
    var ans = document.getElementById('qans-' + idx);
    if (this.value === 'tf') {
      opts.innerHTML = '<input class="form-input" value="True" readonly><input class="form-input" value="False" readonly>';
      ans.innerHTML = '<option>True</option><option>False</option>';
    } else if (this.value === 'short') {
      opts.style.display = 'none';
      ans.style.display = 'none';
    } else {
      opts.style.display = '';
      ans.style.display = '';
      opts.innerHTML = '<input class="form-input" id="qa-' + idx + '" placeholder="Option A"><input class="form-input" id="qb-' + idx + '" placeholder="Option B"><input class="form-input" id="qc-' + idx + '" placeholder="Option C"><input class="form-input" id="qd-' + idx + '" placeholder="Option D">';
      ans.innerHTML = '<option>Option A</option><option>Option B</option><option>Option C</option><option>Option D</option>';
    }
  });
  c.scrollTop = c.scrollHeight;
}

function removeQuestionBlock(idx) {
  var b = document.getElementById('qblock-' + idx);
  if (b) b.remove();
  var blocks = document.querySelectorAll('#questions-container .question-block');
  blocks.forEach(function(block, i) {
    var title = block.querySelector('.question-block-title');
    if (title) title.textContent = 'Question ' + (i + 1);
  });
}

function publishQuiz() {
  var title = document.getElementById('quiz-title').value.trim();
  var course = document.getElementById('quiz-course').value;
  var time = document.getElementById('quiz-time').value || '30';
  var due = document.getElementById('quiz-due').value;
  if (!title) { alert('Please enter a quiz title.'); return; }

  var qCount = document.querySelectorAll('#questions-container .question-block').length;
  var dueLabel = due ? due : 'No due date';
  var icons = { 'Web Development': '&#128187;', 'Machine Learning': '&#9999;&#65039;', 'DBMS': '&#128451;', 'Computer Networks': '&#128268;' };
  var icon = icons[course] || '&#9999;&#65039;';

  var itemHTML = '<div class="quiz-item dynamic-quiz-item"><div class="quiz-icon">' + icon + '</div><div class="quiz-body"><div class="quiz-name">' + title + '</div><div class="quiz-meta">' + course + ' &middot; ' + qCount + ' Question' + (qCount !== 1 ? 's' : '') + ' &middot; ' + time + ' min &middot; Due ' + dueLabel + '</div></div><div style="display:flex;align-items:center;gap:16px;"><div style="text-align:center;"><div style="font-size:22px;font-weight:700;font-family:var(--font-serif);color:var(--accent);">0/—</div><div style="font-size:10px;color:var(--muted);">Attempted</div></div><div style="text-align:center;"><div style="font-size:22px;font-weight:700;font-family:var(--font-serif);color:var(--muted);">—</div><div style="font-size:10px;color:var(--muted);">Avg Score</div></div><span class="badge badge-green">Active</span><span class="card-action" onclick="openModal(\'modal-quiz-results\')">Results</span></div></div>';
  var activeHTML = '<div class="quiz-item dynamic-quiz-item"><div class="quiz-icon">' + icon + '</div><div class="quiz-body"><div class="quiz-name">' + title + '</div><div class="quiz-meta">' + course + ' &middot; Due ' + dueLabel + '</div></div><span class="badge badge-green">Active</span></div>';
  var overviewHTML = '<div class="quiz-item dynamic-quiz-item"><div class="quiz-icon">' + icon + '</div><div class="quiz-body"><div class="quiz-name">' + title + '</div><div class="quiz-meta">' + course + ' &middot; Due ' + dueLabel + ' &middot; 0/— attempted</div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;"><span class="badge badge-green">Active</span><div class="quiz-stats"><div class="quiz-score">—</div><div class="quiz-score-label">avg score</div></div></div></div>';

  var savedQuizzes = JSON.parse(localStorage.getItem('lms-quizzes') || '[]');
  savedQuizzes.unshift({ title: title, course: course, time: time, due: dueLabel, qCount: qCount });
  localStorage.setItem('lms-quizzes', JSON.stringify(savedQuizzes));

  var allList = document.getElementById('quiz-list-all');
  if (allList) allList.insertAdjacentHTML('afterbegin', itemHTML);
  var activeList = document.getElementById('quiz-list-active');
  if (activeList) activeList.insertAdjacentHTML('afterbegin', activeHTML);
  var overviewList = document.getElementById('overview-quiz-list');
  if (overviewList) overviewList.insertAdjacentHTML('afterbegin', overviewHTML);

  document.getElementById('quiz-title').value = '';
  document.getElementById('quiz-time').value = '';
  document.getElementById('quiz-due').value = '';
  document.getElementById('questions-container').innerHTML = '';
  questionCount = 0;
  closeModal('modal-create-quiz');
}

function saveQuizDraft() {
  alert('Quiz saved as draft.');
  closeModal('modal-create-quiz');
}

// Load saved quizzes
(function() {
  var savedQuizzes = JSON.parse(localStorage.getItem('lms-quizzes') || '[]');
  var icons = { 'Web Development': '&#128187;', 'Machine Learning': '&#9999;&#65039;', 'DBMS': '&#128451;', 'Computer Networks': '&#128268;' };
  savedQuizzes.forEach(function(q) {
    var icon = icons[q.course] || '&#9999;&#65039;';
    var itemHTML = '<div class="quiz-item dynamic-quiz-item"><div class="quiz-icon">' + icon + '</div><div class="quiz-body"><div class="quiz-name">' + q.title + '</div><div class="quiz-meta">' + q.course + ' &middot; ' + q.qCount + ' Questions &middot; ' + q.time + ' min &middot; Due ' + q.due + '</div></div><div style="display:flex;align-items:center;gap:16px;"><div style="text-align:center;"><div style="font-size:22px;font-weight:700;font-family:var(--font-serif);color:var(--accent);">0/—</div><div style="font-size:10px;color:var(--muted);">Attempted</div></div><div style="text-align:center;"><div style="font-size:22px;font-weight:700;font-family:var(--font-serif);color:var(--muted);">—</div><div style="font-size:10px;color:var(--muted);">Avg Score</div></div><span class="badge badge-green">Active</span><span class="card-action" onclick="openModal(\'modal-quiz-results\')">Results</span></div></div>';
    var allList = document.getElementById('quiz-list-all');
    if (allList) allList.insertAdjacentHTML('afterbegin', itemHTML);
  });
})();

// ========== ASSIGNMENT CREATOR ==========
function createAssignment() {
  var title = document.getElementById('assign-title').value.trim();
  var course = document.getElementById('assign-course').value;
  var due = document.getElementById('assign-due').value;
  var marks = document.getElementById('assign-marks').value || '100';
  if (!title) { alert('Please enter an assignment title.'); return; }

  var courseShort = { 'Web Development': 'Web Dev', 'Machine Learning': 'ML', 'DBMS': 'DBMS', 'Computer Networks': 'Networks' };
  var dueLabel = due || 'TBD';
  var rowHTML = '<tr class="dynamic-assign-item">' +
    '<td><strong>' + title + '</strong></td>' +
    '<td>' + courseShort[course] + '</td>' +
    '<td>' + dueLabel + '</td>' +
    '<td>0/—</td><td>0/0</td><td style="color:var(--muted);">—</td>' +
    '<td><span class="card-action">Grade</span></td></tr>';

  var tbody = document.getElementById('assignments-tbody');
  if (tbody) tbody.insertAdjacentHTML('afterbegin', rowHTML);

  var saved = JSON.parse(localStorage.getItem('lms-assignments') || '[]');
  saved.unshift({ title: title, course: course, due: dueLabel, marks: marks });
  localStorage.setItem('lms-assignments', JSON.stringify(saved));

  document.getElementById('assign-title').value = '';
  document.getElementById('assign-due').value = '';
  document.getElementById('assign-marks').value = '';
  document.getElementById('assign-desc').value = '';
  closeModal('modal-create-assignment');
}

// Load saved assignments
(function() {
  var saved = JSON.parse(localStorage.getItem('lms-assignments') || '[]');
  var courseShort = { 'Web Development': 'Web Dev', 'Machine Learning': 'ML', 'DBMS': 'DBMS', 'Computer Networks': 'Networks' };
  var tbody = document.getElementById('assignments-tbody');
  saved.forEach(function(a) {
    var rowHTML = '<tr class="dynamic-assign-item">' +
      '<td><strong>' + a.title + '</strong></td>' +
      '<td>' + courseShort[a.course] + '</td>' +
      '<td>' + a.due + '</td><td>0/—</td><td>0/0</td><td style="color:var(--muted);">—</td>' +
      '<td><span class="card-action">Grade</span></td></tr>';
    if (tbody) tbody.insertAdjacentHTML('afterbegin', rowHTML);
  });
})();

// ========== ANNOUNCEMENTS ==========
var tagStyles = {
  'General': { bg: 'var(--accent-light)', color: 'var(--accent)', icon: '&#128226;', iconBg: 'var(--accent-light)' },
  'Reminder': { bg: 'var(--amber-light)', color: 'var(--amber)', icon: '&#9888;&#65039;', iconBg: 'var(--amber-light)' },
  'Update': { bg: 'var(--green-light)', color: 'var(--green)', icon: '&#128203;', iconBg: 'var(--green-light)' },
  'Urgent': { bg: 'var(--red-light)', color: 'var(--red)', icon: '&#128680;', iconBg: 'var(--red-light)' },
  'Event': { bg: 'var(--accent-light)', color: 'var(--accent)', icon: '&#127942;', iconBg: 'var(--accent-light)' }
};

function sendAnnouncement() {
  var title = document.getElementById('announce-title').value.trim();
  var to = document.getElementById('announce-to').value;
  var tag = document.getElementById('announce-tag').value;
  if (!title) { alert('Please enter an announcement title.'); return; }

  var ts = tagStyles[tag] || tagStyles['General'];
  var today = new Date();
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dateStr = today.getDate() + ' ' + months[today.getMonth()];

  var itemHTML = '<div class="feed-item dynamic-announce-item">' +
    '<div class="feed-icon-wrap" style="background:' + ts.iconBg + ';">' + ts.icon + '</div>' +
    '<div style="flex:1;min-width:0;"><div class="feed-title">' + title + '</div><div class="feed-meta">' + to + ' &middot; Posted ' + dateStr + '</div></div>' +
    '<span class="feed-badge" style="background:' + ts.bg + ';color:' + ts.color + ';">' + tag + '</span></div>';

  var list = document.getElementById('announcements-list');
  if (list) list.insertAdjacentHTML('afterbegin', itemHTML);

  var saved = JSON.parse(localStorage.getItem('lms-announcements') || '[]');
  saved.unshift({ title: title, to: to, tag: tag, date: dateStr });
  localStorage.setItem('lms-announcements', JSON.stringify(saved));

  document.getElementById('announce-title').value = '';
  document.getElementById('announce-msg').value = '';
  closeModal('modal-announcement');
}

// Load saved announcements
(function() {
  var saved = JSON.parse(localStorage.getItem('lms-announcements') || '[]');
  var list = document.getElementById('announcements-list');
  saved.forEach(function(a) {
    var ts = tagStyles[a.tag] || tagStyles['General'];
    var itemHTML = '<div class="feed-item dynamic-announce-item">' +
      '<div class="feed-icon-wrap" style="background:' + ts.iconBg + ';">' + ts.icon + '</div>' +
      '<div style="flex:1;min-width:0;"><div class="feed-title">' + a.title + '</div><div class="feed-meta">' + a.to + ' &middot; Posted ' + a.date + '</div></div>' +
      '<span class="feed-badge" style="background:' + ts.bg + ';color:' + ts.color + ';">' + a.tag + '</span></div>';
    if (list) list.insertAdjacentHTML('afterbegin', itemHTML);
  });
})();

// ========== PLANNER ==========
var plannerToday = new Date();
var plannerMonth = plannerToday.getMonth();
var plannerYear = plannerToday.getFullYear();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var plannerEvents = JSON.parse(localStorage.getItem('plannerEvents') || '[]');
var plannerTasks = JSON.parse(localStorage.getItem('plannerTasks') || '[]');
var plannerNodes = JSON.parse(localStorage.getItem('plannerMindmap') || '[]');

function savePlannerEvents() { localStorage.setItem('plannerEvents', JSON.stringify(plannerEvents)); }

function renderPlannerCalendar() {
  var grid = document.getElementById('plannerCalGrid');
  if (!grid) return;
  grid.innerHTML = '';
  document.getElementById('plannerCalMonth').textContent = monthNames[plannerMonth] + ' ' + plannerYear;

  var wRow = document.createElement('div');
  wRow.className = 'planner-weekdays';
  for (var i = 0; i < weekdayNames.length; i++) {
    wRow.innerHTML += '<div class="planner-weekday">' + weekdayNames[i] + '</div>';
  }
  grid.appendChild(wRow);

  var daysGrid = document.createElement('div');
  daysGrid.className = 'planner-cal-grid';

  var firstDay = new Date(plannerYear, plannerMonth, 1).getDay();
  var totalDays = new Date(plannerYear, plannerMonth + 1, 0).getDate();

  for (var i = 0; i < firstDay; i++) daysGrid.innerHTML += '<div class="planner-cal-empty"></div>';

  for (var d = 1; d <= totalDays; d++) {
    var ds = plannerYear + '-' + String(plannerMonth + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    var dayEvts = plannerEvents.filter(function(e) { return e.date === ds; });
    var isToday = (d === plannerToday.getDate() && plannerMonth === plannerToday.getMonth() && plannerYear === plannerToday.getFullYear());
    var evHTML = '';
    for (var j = 0; j < Math.min(dayEvts.length, 2); j++) {
      evHTML += '<div class="planner-cal-event">' + dayEvts[j].title + '</div>';
    }
    daysGrid.innerHTML += '<div class="planner-cal-day' + (isToday ? ' p-today' : '') + '"><div class="planner-cal-date">' + d + '</div>' + evHTML + '</div>';
  }
  grid.appendChild(daysGrid);
}

function renderPlannerTodayEvents() {
  var cont = document.getElementById('todayEvents');
  if (!cont) return;
  cont.innerHTML = '';
  var ts = plannerYear + '-' + String(plannerMonth + 1).padStart(2, '0') + '-' + String(plannerToday.getDate()).padStart(2, '0');
  var todayEvts = plannerEvents.filter(function(e) { return e.date === ts; });
  if (todayEvts.length === 0) {
    cont.innerHTML = '<div class="p-event-card" style="color:var(--muted);font-size:13px;">No events scheduled today.</div>';
    return;
  }
  for (var i = 0; i < todayEvts.length; i++) {
    (function(idx) {
      var ev = todayEvts[idx];
      cont.innerHTML += '<div class="p-event-card"><div class="p-event-top"><div class="p-event-name">' + ev.title + '</div><div class="p-event-date">' + ev.date + '</div></div><div class="p-event-actions"><button class="p-event-btn p-edit-btn" onclick="editPlannerEvent(' + idx + ')">Edit</button><button class="p-event-btn p-delete-btn" onclick="deletePlannerEvent(' + idx + ')">Delete</button></div></div>';
    })(i);
  }
}

function addPlannerEvent() {
  var title = document.getElementById('eventTitle');
  var date = document.getElementById('eventDate');
  if (!title.value.trim() || !date.value) return;
  plannerEvents.push({ title: title.value, date: date.value });
  savePlannerEvents();
  title.value = '';
  date.value = '';
  renderPlannerCalendar();
  renderPlannerTodayEvents();
}

function deletePlannerEvent(idx) {
  var ts = plannerYear + '-' + String(plannerMonth + 1).padStart(2, '0') + '-' + String(plannerToday.getDate()).padStart(2, '0');
  var todayEvts = plannerEvents.filter(function(e) { return e.date === ts; });
  var evToRemove = todayEvts[idx];
  if (evToRemove) {
    var globalIdx = plannerEvents.indexOf(evToRemove);
    if (globalIdx !== -1) plannerEvents.splice(globalIdx, 1);
  }
  savePlannerEvents();
  renderPlannerCalendar();
  renderPlannerTodayEvents();
}

function editPlannerEvent(idx) {
  var ts = plannerYear + '-' + String(plannerMonth + 1).padStart(2, '0') + '-' + String(plannerToday.getDate()).padStart(2, '0');
  var todayEvts = plannerEvents.filter(function(e) { return e.date === ts; });
  var ev = todayEvts[idx];
  if (!ev) return;
  var newTitle = prompt('Edit Event', ev.title);
  if (newTitle !== null && newTitle.trim() !== '') {
    ev.title = newTitle;
    savePlannerEvents();
    renderPlannerCalendar();
    renderPlannerTodayEvents();
  }
}

function plannerPrevMonth() { plannerMonth--; if (plannerMonth < 0) { plannerMonth = 11; plannerYear--; } renderPlannerCalendar(); }
function plannerNextMonth() { plannerMonth++; if (plannerMonth > 11) { plannerMonth = 0; plannerYear++; } renderPlannerCalendar(); }

function renderPlannerTasks() {
  var list = document.getElementById('plannerTaskList');
  if (!list) return;
  list.innerHTML = '';
  for (var i = 0; i < plannerTasks.length; i++) {
    (function(idx) {
      var task = plannerTasks[idx];
      list.innerHTML += '<div class="p-task-card"><div class="p-task-left"><input type="checkbox" ' + (task.done ? 'checked' : '') + ' onchange="togglePlannerTask(' + idx + ')"><div class="' + (task.done ? 'p-completed' : '') + '">' + task.text + '</div></div><button class="p-task-delete" onclick="deletePlannerTask(' + idx + ')">Delete</button></div>';
    })(i);
  }
  localStorage.setItem('plannerTasks', JSON.stringify(plannerTasks));
}

function addPlannerTask() {
  var input = document.getElementById('plannerTaskInput');
  if (!input || !input.value.trim()) return;
  plannerTasks.unshift({ text: input.value, done: false });
  input.value = '';
  renderPlannerTasks();
}

function togglePlannerTask(idx) { plannerTasks[idx].done = !plannerTasks[idx].done; renderPlannerTasks(); }
function deletePlannerTask(idx) { plannerTasks.splice(idx, 1); renderPlannerTasks(); }

function renderMindmap() {
  var grid = document.getElementById('mindmapGrid');
  if (!grid) return;
  grid.innerHTML = '<div class="mind-node mind-core">Semester Goals</div>';
  for (var i = 0; i < plannerNodes.length; i++) {
    (function(idx) {
      grid.innerHTML += '<div class="mind-node">' + plannerNodes[idx] + '<button class="node-delete" onclick="deleteNode(' + idx + ')">&#10005;</button></div>';
    })(i);
  }
  localStorage.setItem('plannerMindmap', JSON.stringify(plannerNodes));
}

function addMindNode() {
  var input = document.getElementById('mindmapInput');
  if (!input || !input.value.trim()) return;
  plannerNodes.push(input.value);
  input.value = '';
  renderMindmap();
}

function deleteNode(idx) { plannerNodes.splice(idx, 1); renderMindmap(); }

renderPlannerCalendar();
renderPlannerTodayEvents();
renderPlannerTasks();
renderMindmap();

// ========== COURSE MANAGEMENT ==========
var teacherCourses = [
  { id: "course_1", name: "Web Development", code: "CS301", icon: "&#128187;", iconBg: "#dce7fd", room: "Room 302", schedule: "Mon, Wed 9:00 AM", students: 28, lessons: 22, avgScore: 85, syllabusCovered: 65, description: "Full-stack web development using HTML, CSS, JavaScript, React, and Node.js.", gradingPolicy: "Assignments: 30%, Midterm: 30%, Final Project: 40%", instructor: "Dr. Sharma", resources: [{ id: "res1", name: "Syllabus_WebDev_2026.pdf", type: "pdf", size: "2.4 MB", date: "2026-01-15" }], syllabus: [{ week: "Week 1", topic: "HTML5 & CSS3 Fundamentals" }, { week: "Week 2", topic: "JavaScript ES6+ Basics" }] },
  { id: "course_2", name: "Machine Learning", code: "CS401", icon: "&#129302;", iconBg: "#fef3dc", room: "Lab 101", schedule: "Tue, Thu 11:00 AM", students: 24, lessons: 18, avgScore: 78, syllabusCovered: 44, description: "Introduction to machine learning algorithms including regression and classification.", gradingPolicy: "Quizzes: 20%, Assignments: 40%, Final Exam: 40%", instructor: "Dr. Sharma", resources: [{ id: "res3", name: "ML_Algorithms_Cheatsheet.pdf", type: "pdf", size: "3.2 MB", date: "2026-01-10" }], syllabus: [{ week: "Week 1", topic: "Introduction to ML & Python" }, { week: "Week 2", topic: "Linear Regression" }] },
  { id: "course_3", name: "Database Management Systems", code: "CS201", icon: "&#128451;", iconBg: "#d6f5e7", room: "Room 204", schedule: "Mon, Fri 2:00 PM", students: 22, lessons: 20, avgScore: 88, syllabusCovered: 55, description: "Database design, SQL queries, normalization, and transaction management.", gradingPolicy: "Lab Work: 30%, Midterm: 30%, Final: 40%", instructor: "Dr. Sharma", resources: [], syllabus: [{ week: "Week 1", topic: "ER Diagrams & Database Design" }, { week: "Week 2", topic: "SQL Basics" }] },
  { id: "course_4", name: "Computer Networks", code: "CS305", icon: "&#128268;", iconBg: "#fde8e8", room: "Room 410", schedule: "Wed, Fri 3:00 PM", students: 20, lessons: 24, avgScore: 72, syllabusCovered: 72, description: "Network protocols, OSI model, TCP/IP, routing, and network security basics.", gradingPolicy: "Quizzes: 15%, Assignments: 35%, Final Exam: 50%", instructor: "Dr. Sharma", resources: [], syllabus: [{ week: "Week 1", topic: "OSI Model & TCP/IP" }, { week: "Week 2", topic: "IP Addressing & Subnetting" }] }
];

function loadCoursesFromStorage() {
  var saved = localStorage.getItem('teacherCoursesData');
  if (saved) teacherCourses = JSON.parse(saved);
  renderAllCourses();
}

function saveCoursesToStorage() {
  localStorage.setItem('teacherCoursesData', JSON.stringify(teacherCourses));
}

function renderAllCourses() {
  var container = document.getElementById('courses-grid-container');
  if (!container) return;
  container.innerHTML = '';
  for (var i = 0; i < teacherCourses.length; i++) {
    var course = teacherCourses[i];
    var card = document.createElement('div');
    card.className = 'course-detail-card';
    card.id = 'course-card-' + course.id;
    card.innerHTML = '<div class="course-detail-header" onclick="toggleCourseDetails(\'' + course.id + '\')"><div class="course-detail-title"><div class="course-icon" style="background:' + course.iconBg + '; width:48px; height:48px; font-size:24px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-sm);">' + course.icon + '</div><div><h3>' + course.name + ' <span style="font-size:12px; color:var(--muted); font-weight:normal;">(' + course.code + ')</span></h3><div style="font-size:12px; color:var(--muted);">' + course.schedule + ' • ' + course.room + '</div></div></div><div class="course-detail-toggle">▼</div></div><div class="course-detail-body"><div class="course-tabs"><button class="course-tab-btn active" onclick="switchCourseTab(\'' + course.id + '\', \'details\')">📋 Course Details</button><button class="course-tab-btn" onclick="switchCourseTab(\'' + course.id + '\', \'syllabus\')">📚 Syllabus</button><button class="course-tab-btn" onclick="switchCourseTab(\'' + course.id + '\', \'resources\')">📎 Resources (' + course.resources.length + ')</button></div><div id="course-tab-details-' + course.id + '" class="course-tab-content active">' + renderCourseDetailsTab(course) + '</div><div id="course-tab-syllabus-' + course.id + '" class="course-tab-content">' + renderCourseSyllabusTab(course) + '</div><div id="course-tab-resources-' + course.id + '" class="course-tab-content">' + renderCourseResourcesTab(course) + '</div></div>';
    container.appendChild(card);
  }
}

function renderCourseDetailsTab(course) {
  return '<div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:24px;"><div style="text-align:center; background:var(--surface2); border-radius:var(--radius-sm); padding:16px;"><div style="font-size:28px; font-weight:bold; font-family:var(--font-serif);">' + course.students + '</div><div style="font-size:11px; color:var(--muted);">Enrolled Students</div></div><div style="text-align:center; background:var(--surface2); border-radius:var(--radius-sm); padding:16px;"><div style="font-size:28px; font-weight:bold; font-family:var(--font-serif);">' + course.lessons + '</div><div style="font-size:11px; color:var(--muted);">Total Lessons</div></div><div style="text-align:center; background:var(--surface2); border-radius:var(--radius-sm); padding:16px;"><div style="font-size:28px; font-weight:bold; font-family:var(--font-serif); color:var(--green);">' + course.avgScore + '%</div><div style="font-size:11px; color:var(--muted);">Class Average</div></div><div style="text-align:center; background:var(--surface2); border-radius:var(--radius-sm); padding:16px;"><div style="font-size:28px; font-weight:bold; font-family:var(--font-serif);">' + course.syllabusCovered + '%</div><div style="font-size:11px; color:var(--muted);">Syllabus Covered</div><div class="progress-bar" style="margin-top:8px;"><div class="progress-fill" style="width:' + course.syllabusCovered + '%;"></div></div></div></div><div class="info-row"><div class="info-label">Course Code</div><div class="info-value">' + course.code + '</div></div><div class="info-row"><div class="info-label">Instructor</div><div class="info-value">' + course.instructor + '</div></div><div class="info-row"><div class="info-label">Schedule</div><div class="info-value">' + course.schedule + ' • ' + course.room + '</div></div><div class="info-row"><div class="info-label">Description</div><div class="info-value">' + course.description + '</div></div><div class="info-row"><div class="info-label">Grading Policy</div><div class="info-value"><span class="badge-grade">' + course.gradingPolicy + '</span></div></div>';
}

function renderCourseSyllabusTab(course) {
  var html = '<div style="margin-bottom:16px;"><button class="btn-primary" onclick="editSyllabus(\'' + course.id + '\')" style="padding:6px 14px; font-size:12px;">✏️ Edit Syllabus</button></div><div class="syllabus-list">';
  for (var i = 0; i < course.syllabus.length; i++) {
    html += '<div class="syllabus-item"><div class="syllabus-week">' + course.syllabus[i].week + '</div><div class="syllabus-desc">' + course.syllabus[i].topic + '</div></div>';
  }
  html += '</div>';
  return html;
}

function renderCourseResourcesTab(course) {
  var html = '<div class="upload-area" onclick="document.getElementById(\'file-input-' + course.id + '\').click()">📁 Click to Upload Course Material (PDF, DOC, PPT, ZIP)<input type="file" id="file-input-' + course.id + '" accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.txt" onchange="uploadResourceToCourse(\'' + course.id + '\', this)"></div>';
  if (course.resources.length === 0) {
    html += '<div style="text-align:center; padding:40px; color:var(--muted);">No resources uploaded yet. Click above to add course materials.</div>';
  } else {
    html += '<div class="resources-grid">';
    for (var i = 0; i < course.resources.length; i++) {
      var res = course.resources[i];
      var fileIcon = (res.type === 'pdf' ? '&#128196;' : (res.type.indexOf('doc') !== -1 ? '&#128221;' : '&#128190;'));
      html += '<div class="resource-item"><div class="resource-icon">' + fileIcon + '</div><div class="resource-info"><div class="resource-name">' + res.name + '</div><div class="resource-meta">' + res.size + ' • Uploaded ' + res.date + '</div></div><div class="resource-actions"><button class="resource-download" onclick="downloadResource(\'' + course.id + '\', \'' + res.id + '\')">Download</button><button class="resource-delete" onclick="deleteResource(\'' + course.id + '\', \'' + res.id + '\')">Delete</button></div></div>';
    }
    html += '</div>';
  }
  return html;
}

function toggleCourseDetails(courseId) {
  var card = document.getElementById('course-card-' + courseId);
  if (card) card.classList.toggle('open');
}

function switchCourseTab(courseId, tabName) {
  var card = document.getElementById('course-card-' + courseId);
  var tabs = card.querySelectorAll('.course-tab-btn');
  for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
  var targetBtn = null;
  for (var i = 0; i < tabs.length; i++) {
    if ((tabName === 'details' && tabs[i].textContent.includes('Course Details')) ||
        (tabName === 'syllabus' && tabs[i].textContent.includes('Syllabus')) ||
        (tabName === 'resources' && tabs[i].textContent.includes('Resources'))) {
      targetBtn = tabs[i];
      break;
    }
  }
  if (targetBtn) targetBtn.classList.add('active');

  var detailsTab = document.getElementById('course-tab-details-' + courseId);
  var syllabusTab = document.getElementById('course-tab-syllabus-' + courseId);
  var resourcesTab = document.getElementById('course-tab-resources-' + courseId);
  if (detailsTab) detailsTab.classList.remove('active');
  if (syllabusTab) syllabusTab.classList.remove('active');
  if (resourcesTab) resourcesTab.classList.remove('active');
  if (tabName === 'details') detailsTab.classList.add('active');
  else if (tabName === 'syllabus') syllabusTab.classList.add('active');
  else if (tabName === 'resources') resourcesTab.classList.add('active');
}

function uploadResourceToCourse(courseId, fileInput) {
  var file = fileInput.files[0];
  if (!file) return;
  var course = null;
  for (var i = 0; i < teacherCourses.length; i++) {
    if (teacherCourses[i].id === courseId) { course = teacherCourses[i]; break; }
  }
  if (!course) return;

  var reader = new FileReader();
  reader.onload = function(e) {
    var newResource = {
      id: Date.now().toString(),
      name: file.name,
      type: file.name.split('.').pop(),
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      date: new Date().toISOString().split('T')[0],
      data: e.target.result
    };
    course.resources.unshift(newResource);
    saveCoursesToStorage();
    var resourcesContainer = document.getElementById('course-tab-resources-' + courseId);
    if (resourcesContainer) resourcesContainer.innerHTML = renderCourseResourcesTab(course);
    var card = document.getElementById('course-card-' + courseId);
    var resourcesBtn = card.querySelector('.course-tab-btn:nth-child(3)');
    if (resourcesBtn) resourcesBtn.textContent = '📎 Resources (' + course.resources.length + ')';
    alert('✅ "' + file.name + '" uploaded successfully to ' + course.name + '!');
  };
  reader.readAsDataURL(file);
  fileInput.value = '';
}

function downloadResource(courseId, resourceId) {
  var course = null;
  for (var i = 0; i < teacherCourses.length; i++) {
    if (teacherCourses[i].id === courseId) { course = teacherCourses[i]; break; }
  }
  var resource = null;
  if (course) {
    for (var j = 0; j < course.resources.length; j++) {
      if (course.resources[j].id === resourceId) { resource = course.resources[j]; break; }
    }
  }
  if (resource && resource.data) {
    var link = document.createElement('a');
    link.href = resource.data;
    link.download = resource.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert('File data not available for download.');
  }
}

function deleteResource(courseId, resourceId) {
  if (confirm('Are you sure you want to delete this resource?')) {
    var course = null;
    for (var i = 0; i < teacherCourses.length; i++) {
      if (teacherCourses[i].id === courseId) { course = teacherCourses[i]; break; }
    }
    if (course) {
      var newResources = [];
      for (var j = 0; j < course.resources.length; j++) {
        if (course.resources[j].id !== resourceId) newResources.push(course.resources[j]);
      }
      course.resources = newResources;
      saveCoursesToStorage();
      var resourcesContainer = document.getElementById('course-tab-resources-' + courseId);
      if (resourcesContainer) resourcesContainer.innerHTML = renderCourseResourcesTab(course);
      var card = document.getElementById('course-card-' + courseId);
      var resourcesBtn = card.querySelector('.course-tab-btn:nth-child(3)');
      if (resourcesBtn) resourcesBtn.textContent = '📎 Resources (' + course.resources.length + ')';
      alert('Resource deleted successfully.');
    }
  }
}

function editSyllabus(courseId) {
  var course = null;
  for (var i = 0; i < teacherCourses.length; i++) {
    if (teacherCourses[i].id === courseId) { course = teacherCourses[i]; break; }
  }
  if (!course) return;
  var syllabusText = '';
  for (var i = 0; i < course.syllabus.length; i++) {
    syllabusText += course.syllabus[i].week + ': ' + course.syllabus[i].topic + '\n';
  }
  var newSyllabus = prompt('Edit Syllabus (Format: Week X: Topic Description)', syllabusText);
  if (newSyllabus) {
    var lines = newSyllabus.split('\n');
    var updatedSyllabus = [];
    for (var i = 0; i < lines.length; i++) {
      var colonIndex = lines[i].indexOf(':');
      if (colonIndex > 0) {
        updatedSyllabus.push({ week: lines[i].substring(0, colonIndex).trim(), topic: lines[i].substring(colonIndex + 1).trim() });
      }
    }
    if (updatedSyllabus.length > 0) {
      course.syllabus = updatedSyllabus;
      saveCoursesToStorage();
      var syllabusContainer = document.getElementById('course-tab-syllabus-' + courseId);
      if (syllabusContainer) syllabusContainer.innerHTML = renderCourseSyllabusTab(course);
      alert('Syllabus updated successfully!');
    }
  }
}

function openAddCourseModal() {
  openModal('modal-add-course');
}

function addNewCourseFromModal() {
  var name = document.getElementById('new-course-name').value;
  var code = document.getElementById('new-course-code').value;
  var room = document.getElementById('new-course-room').value;
  if (!name || !code) { alert('Please fill course name and code'); return; }
  var newCourse = {
    id: 'course_' + Date.now(),
    name: name,
    code: code,
    icon: '&#128214;',
    iconBg: '#e8f0fe',
    room: room || 'TBD',
    schedule: 'Schedule TBD',
    students: 0,
    lessons: 0,
    avgScore: 0,
    syllabusCovered: 0,
    description: 'Course description goes here.',
    gradingPolicy: 'To be defined',
    instructor: 'Dr. Sharma',
    resources: [],
    syllabus: [{ week: "Week 1", topic: "Introduction" }]
  };
  teacherCourses.push(newCourse);
  saveCoursesToStorage();
  renderAllCourses();
  closeModal('modal-add-course');
  alert('✅ Course "' + name + '" created!');
  document.getElementById('new-course-name').value = '';
  document.getElementById('new-course-code').value = '';
  document.getElementById('new-course-room').value = '';
}

loadCoursesFromStorage();
(function initCourses() {
  setTimeout(function() {
    if (document.getElementById('courses-grid-container')) {
      loadCoursesFromStorage();
    }
  }, 100);
})();