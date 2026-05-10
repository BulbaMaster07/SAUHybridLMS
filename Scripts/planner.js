const calendarGrid =
document.getElementById('calendarGrid');

const todayEventsContainer =
document.getElementById('todayEvents');

const today = new Date();

const monthNames = [
'January','February','March','April','May','June',
'July','August','September','October','November','December'
];

const weekdays = [
'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
];

let currentMonth =
today.getMonth();

let currentYear =
today.getFullYear();



let events =
JSON.parse(
localStorage.getItem('plannerEvents')
) || [];



function saveEvents(){

localStorage.setItem(
'plannerEvents',
JSON.stringify(events)
);

}



function renderCalendar(){

calendarGrid.innerHTML='';

document.getElementById(
'calendarMonth'
).innerText =

`${monthNames[currentMonth]} ${currentYear}`;



const weekdaysRow =
document.createElement('div');

weekdaysRow.className =
'calendar-weekdays';



weekdays.forEach(day=>{

weekdaysRow.innerHTML += `
<div class="weekday">${day}</div>
`;

});



calendarGrid.appendChild(
weekdaysRow
);



const daysGrid =
document.createElement('div');

daysGrid.className =
'calendar-grid';



const firstDay =
new Date(
currentYear,
currentMonth,
1
).getDay();



const totalDays =
new Date(
currentYear,
currentMonth + 1,
0
).getDate();



for(let i=0;i<firstDay;i++){

daysGrid.innerHTML += `
<div class="calendar-empty"></div>
`;

}



for(let day=1;day<=totalDays;day++){

const dateString =

`${currentYear}-${
String(currentMonth+1).padStart(2,'0')
}-${String(day).padStart(2,'0')}`;



const dayEvents =
events.filter(
e=>e.date===dateString
);



const isToday =

day===today.getDate() &&
currentMonth===today.getMonth() &&
currentYear===today.getFullYear();



daysGrid.innerHTML += `

<div class="calendar-day ${isToday?'today':''}">

<div class="calendar-date">
${day}
</div>

<div>

${dayEvents.map(event=>`

<div class="calendar-event">
${event.title}
</div>

`).join('')}

</div>

</div>

`;

}



calendarGrid.appendChild(
daysGrid
);

}



function renderTodayEvents(){

todayEventsContainer.innerHTML='';



const todayString =

`${today.getFullYear()}-${
String(today.getMonth()+1).padStart(2,'0')
}-${String(today.getDate()).padStart(2,'0')}`;



const todayEvents =
events.filter(
event=>event.date===todayString
);



if(todayEvents.length===0){

todayEventsContainer.innerHTML =

`<div class="event-card">
No events scheduled today.
</div>`;

return;

}



todayEvents.forEach((event,index)=>{

todayEventsContainer.innerHTML += `

<div class="event-card">

<div class="event-top">

<div class="event-name">
${event.title}
</div>

<div class="event-date">
${event.date}
</div>

</div>

<div class="event-actions">

<button class="event-btn edit-btn"
onclick="editEvent(${index})">

Edit

</button>

<button class="event-btn delete-btn"
onclick="deleteEvent(${index})">

Delete

</button>

</div>

</div>

`;

});

}



function addEvent(){

const title =
document.getElementById('eventTitle');

const date =
document.getElementById('eventDate');

if(title.value.trim()==='' ||
date.value===''){
return;
}

events.push({
title:title.value,
date:date.value
});

saveEvents();

title.value='';
date.value='';

renderCalendar();
renderTodayEvents();

}



function deleteEvent(index){

events.splice(index,1);

saveEvents();

renderCalendar();
renderTodayEvents();

}



function editEvent(index){

const newTitle =
prompt(
'Edit Event',
events[index].title
);

if(newTitle!==null &&
newTitle.trim()!==''){

events[index].title =
newTitle;

saveEvents();

renderCalendar();
renderTodayEvents();

}

}



function previousMonth(){

currentMonth--;

if(currentMonth<0){

currentMonth=11;
currentYear--;

}

renderCalendar();

}



function nextMonth(){

currentMonth++;

if(currentMonth>11){

currentMonth=0;
currentYear++;

}

renderCalendar();

}



/* TASKS */

let tasks =
JSON.parse(
localStorage.getItem('plannerTasks')
) || [];

const taskList =
document.getElementById('taskList');



function renderTasks(){

taskList.innerHTML='';

tasks.forEach((task,index)=>{

taskList.innerHTML += `

<div class="task-card">

<div class="task-left">

<input type="checkbox"
${task.done?'checked':''}
onclick="toggleTask(${index})">

<div class="${task.done?'completed':''}">
${task.text}
</div>

</div>

<button class="task-delete"
onclick="deleteTask(${index})">

Delete

</button>

</div>

`;

});



localStorage.setItem(
'plannerTasks',
JSON.stringify(tasks)
);

}



function addTask(){

const input =
document.getElementById('taskInput');

if(input.value.trim()==='')
return;

tasks.unshift({
text:input.value,
done:false
});

input.value='';

renderTasks();

}



function toggleTask(index){

tasks[index].done =
!tasks[index].done;

renderTasks();

}



function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}



renderTasks();



/* MINDMAP */

const mindmapGrid =
document.getElementById('mindmapGrid');

let nodes =
JSON.parse(
localStorage.getItem('plannerMindmap')
) || [];



function renderMindmap(){

mindmapGrid.innerHTML = `

<div class="mind-node core">
Semester Goals
</div>

`;

nodes.forEach((node,index)=>{

mindmapGrid.innerHTML += `

<div class="mind-node">

${node}

<div class="node-delete"
onclick="deleteNode(${index})">

✕

</div>

</div>

`;

});



localStorage.setItem(
'plannerMindmap',
JSON.stringify(nodes)
);

}



function addMindNode(){

const input =
document.getElementById(
'mindmapInput'
);

if(input.value.trim()==='')
return;

nodes.push(input.value);

input.value='';

renderMindmap();

}



function deleteNode(index){

nodes.splice(index,1);

renderMindmap();

}



renderCalendar();
renderTodayEvents();
renderMindmap();