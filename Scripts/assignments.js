let assignments =
JSON.parse(
localStorage.getItem('sauAssignments')
) || [

{
id:1,
subject:'Web Development',
teacher:'Dr. Sharma',
title:'Responsive Dashboard UI',
deadline:'Due: 12 May 2026 · 11:59 PM',
description:'Build a responsive LMS dashboard using HTML, CSS and JavaScript. Include sidebar navigation, analytics cards and adaptive layouts.',
question:'Explain how Flexbox and Grid were used in your layout.',
banner:'linear-gradient(135deg,#2563eb,#60a5fa)'
},

{
id:2,
subject:'Python Programming',
teacher:'Dr. Seth',
title:'File Handling & Data Processing',
deadline:'Due: 15 May 2026 · 9:00 PM',
description:'Create a Python program that reads CSV data, performs analysis and generates summary statistics.',
question:'Describe your exception handling strategy.',
banner:'linear-gradient(135deg,#7c3aed,#c084fc)'
},

{
id:3,
subject:'Data Structures',
teacher:'Dr. Ashwini',
title:'Linked List Visualizer',
deadline:'Due: 18 May 2026 · 6:00 PM',
description:'Implement singly and doubly linked lists with insertion, deletion and traversal visualizations.',
question:'Compare linked lists and arrays with examples.',
banner:'linear-gradient(135deg,#059669,#34d399)'
},

{
id:4,
subject:'Digital Logic Design',
teacher:'Dr. Ahuja',
title:'Logic Gate Simulation',
deadline:'Due: 20 May 2026 · 8:30 PM',
description:'Design and simulate a half adder and full adder using logic gates.',
question:'Explain the truth table of the full adder.',
banner:'linear-gradient(135deg,#ea580c,#fb923c)'
}

];



const assignmentGrid =
document.getElementById('assignmentGrid');



function updateAssignmentBadge(){

const badges =
document.querySelectorAll('#assignmentBadge');

const count =
assignments.length;

badges.forEach((badge)=>{

badge.innerText = count;

});

}



function renderAssignments(){

assignmentGrid.innerHTML='';



if(assignments.length===0){

assignmentGrid.innerHTML=`

<div class="assignment-card">

<div class="assignment-body">

<h2 style="
margin-bottom:12px;
font-family:var(--font-serif);
">
All assignments completed 🎉
</h2>

<div class="assignment-desc">
You currently have no pending coursework submissions.
</div>

</div>

</div>

`;

updateAssignmentBadge();

return;

}



assignments.forEach((assignment,index)=>{

assignmentGrid.innerHTML += `

<div class="assignment-card">

<div class="assignment-banner"
style="background:${assignment.banner}">

<div class="assignment-subject">
${assignment.subject}
</div>

<div class="assignment-title">
${assignment.title}
</div>

<div class="assignment-deadline">
${assignment.deadline}
</div>

<div style="
margin-top:10px;
font-size:13px;
font-weight:700;
opacity:.9;
">

Instructor: ${assignment.teacher}

</div>

</div>



<div class="assignment-body">

<div class="assignment-desc">
${assignment.description}
</div>



<div class="question-block">

<div class="question-label">
${assignment.question}
</div>

<textarea class="answer-input"
placeholder="Write your answer here..."
id="answer-${assignment.id}"></textarea>

</div>



<div class="upload-area">

<div class="upload-label">
📎 Upload Supporting Files
</div>

<label class="custom-file-upload">

<div class="upload-left">

<div class="upload-icon">
↑
</div>

<div class="upload-text">

<div class="upload-main">
Choose Assignment File
</div>

<div class="upload-sub">
PDF, DOCX, ZIP or images
</div>

</div>

</div>

<div class="upload-btn">
Browse
</div>

<input type="file"
class="file-input"
onchange="updateFileName(this,${assignment.id})">

</label>

<div class="file-name"
id="file-name-${assignment.id}">
No file selected
</div>

</div>



<div class="assignment-actions">

<button class="assignment-btn"
onclick="submitAssignment(${index})">

Submit Assignment

</button>

<button class="assignment-btn secondary-btn">

Save Draft

</button>

</div>



<div class="submission-status"
id="status-${assignment.id}">

Assignment submitted successfully.

</div>

</div>

</div>

`;

});



updateAssignmentBadge();

}



function updateFileName(input,id){

const fileName =
document.getElementById(`file-name-${id}`);

if(input.files.length>0){

fileName.innerText =
`Selected: ${input.files[0].name}`;

}else{

fileName.innerText =
'No file selected';

}

}



function submitAssignment(index){

const assignment =
assignments[index];

const status =
document.getElementById(
`status-${assignment.id}`
);

status.style.display='block';



setTimeout(()=>{

assignments.splice(index,1);

localStorage.setItem(
'sauAssignments',
JSON.stringify(assignments)
);

renderAssignments();

updateAssignmentBadge();

},1200);

}



renderAssignments();



localStorage.setItem(
'sauAssignments',
JSON.stringify(assignments)
);



updateAssignmentBadge();