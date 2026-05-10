// Sidebar functions for mobile
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

// Set current date in topbar
(function setTopbarDate() {
  var d = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dateEl = document.getElementById('topbar-date');
  if (dateEl) {
    dateEl.textContent = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }
})();

// Load saved settings from localStorage
function loadTeacherSettings() {
  var settings = JSON.parse(localStorage.getItem('teacherSettings')) || {};
  var submissionAlerts = document.getElementById('submissionAlerts');
  var discussionReplies = document.getElementById('discussionReplies');
  var attendanceReminders = document.getElementById('attendanceReminders');
  var facultyProfile = document.getElementById('facultyProfile');
  var analyticsTracking = document.getElementById('analyticsTracking');
  var autoGrades = document.getElementById('autoGrades');
  
  if (submissionAlerts) submissionAlerts.checked = settings.submissionAlerts || false;
  if (discussionReplies) discussionReplies.checked = settings.discussionReplies || false;
  if (attendanceReminders) attendanceReminders.checked = settings.attendanceReminders || false;
  if (facultyProfile) facultyProfile.checked = settings.facultyProfile || false;
  if (analyticsTracking) analyticsTracking.checked = settings.analyticsTracking || false;
  if (autoGrades) autoGrades.checked = settings.autoGrades || false;
}

// Save teacher settings to localStorage
function saveTeacherSettings() {
  var settings = {
    submissionAlerts: document.getElementById('submissionAlerts') ? document.getElementById('submissionAlerts').checked : false,
    discussionReplies: document.getElementById('discussionReplies') ? document.getElementById('discussionReplies').checked : false,
    attendanceReminders: document.getElementById('attendanceReminders') ? document.getElementById('attendanceReminders').checked : false,
    facultyProfile: document.getElementById('facultyProfile') ? document.getElementById('facultyProfile').checked : false,
    analyticsTracking: document.getElementById('analyticsTracking') ? document.getElementById('analyticsTracking').checked : false,
    autoGrades: document.getElementById('autoGrades') ? document.getElementById('autoGrades').checked : false
  };
  
  localStorage.setItem('teacherSettings', JSON.stringify(settings));
  
  var saveStatus = document.getElementById('saveStatus');
  if (saveStatus) {
    saveStatus.style.display = 'block';
    setTimeout(function() {
      saveStatus.style.display = 'none';
    }, 2500);
  }
}

// Modal functions (needed for cross-page compatibility)
function openModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  var modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  loadTeacherSettings();
  
  var overlay = document.getElementById('sidebar-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // Close sidebar when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 820) {
      var sidebar = document.querySelector('.sidebar');
      if (sidebar) sidebar.classList.remove('show');
      if (overlay) overlay.classList.remove('show');
    }
  });
});