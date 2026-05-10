const lectures = [

  {
    title: 'Introduction to HTML',
    duration: '42 mins',
    lecture: 'Lecture 1',
    status: 'Completed'
  },

  {
    title: 'Advanced CSS Layouts',
    duration: '1h 08 mins',
    lecture: 'Lecture 7',
    status: 'Completed'
  },

  {
    title: 'Responsive Dashboards',
    duration: '1h 24 mins',
    lecture: 'Lecture 15',
    status: 'Current'
  },

  {
    title: 'JavaScript DOM Manipulation',
    duration: '58 mins',
    lecture: 'Lecture 16',
    status: 'Upcoming'
  }

];



const resources = [

  {
    type: 'PDF',
    title: 'CSS Flexbox Notes',
    desc:
      'Detailed lecture notes about flexbox systems and alignment.'
  },

  {
    type: 'Slides',
    title: 'Responsive Design PPT',
    desc:
      'Professor uploaded responsive design presentation slides.'
  },

  {
    type: 'Document',
    title: 'Assignment Guidelines',
    desc:
      'Submission instructions and rubric for dashboard project.'
  },

  {
    type: 'ZIP',
    title: 'Starter Project Files',
    desc:
      'Contains starter HTML, CSS and JavaScript assets.'
  }

];



const lectureList =
  document.getElementById('lectureList');

lectures.forEach(lecture => {

  lectureList.innerHTML += `

    <div class="lecture-card">

      <div class="lecture-left">

        <div class="lecture-name">
          ${lecture.title}
        </div>

        <div class="lecture-meta">
          ${lecture.duration} · ${lecture.lecture}
        </div>

      </div>

      <div class="lecture-status
                  ${lecture.status === 'Completed'
                    ? 'completed'
                    : 'current'}">

        ${lecture.status}

      </div>

    </div>

  `;
});



const resourceGrid =
  document.getElementById('resourceGrid');

resources.forEach(resource => {

  resourceGrid.innerHTML += `

    <div class="resource-card">

      <div class="resource-type">
        ${resource.type}
      </div>

      <div class="resource-title">
        ${resource.title}
      </div>

      <div class="resource-desc">
        ${resource.desc}
      </div>

      <button class="resource-btn">
        Open Resource
      </button>

    </div>

  `;
});