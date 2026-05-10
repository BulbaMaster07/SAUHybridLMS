const saveStatus =
document.getElementById('saveStatus');

window.onload = function(){

const settings = JSON.parse(
localStorage.getItem('sauSettings')
) || {};

const dn = document.getElementById('displayName');
const sm = document.getElementById('statusMessage');

if(dn && settings.displayName) dn.value = settings.displayName;
if(sm && settings.statusMessage) sm.value = settings.statusMessage;

if(settings.assignmentAlerts)
document.getElementById('assignmentAlerts').checked = true;

if(settings.quizAlerts)
document.getElementById('quizAlerts').checked = true;

if(settings.discussionAlerts)
document.getElementById('discussionAlerts').checked = true;

if(settings.publicProfile)
document.getElementById('publicProfile').checked = true;

if(settings.tracking)
document.getElementById('tracking').checked = true;

};

function saveSettings(){

const dn = document.getElementById('displayName');
const sm = document.getElementById('statusMessage');

const settings = {

displayName: dn ? dn.value : '',
statusMessage: sm ? sm.value : '',

assignmentAlerts:
document.getElementById('assignmentAlerts').checked,

quizAlerts:
document.getElementById('quizAlerts').checked,

discussionAlerts:
document.getElementById('discussionAlerts').checked,

publicProfile:
document.getElementById('publicProfile').checked,

tracking:
document.getElementById('tracking').checked

};

localStorage.setItem(
'sauSettings',
JSON.stringify(settings)
);
saveStatus.style.display='block';

setTimeout(()=>{
saveStatus.style.display='none';
},2500);

}

function setTheme(theme,element){

const allThemes =
document.querySelectorAll('.theme-option');

allThemes.forEach(item=>{
item.classList.remove('active-theme');
});

element.classList.add('active-theme');

localStorage.setItem('theme',theme);

}