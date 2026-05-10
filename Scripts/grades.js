const grades = [

  {
    subject: 'Web Development',
    credits: 4,
    midterm: 88,
    assignment: 93,
    final: 90,
    grade: 'A'
  },

  {
    subject: 'Python Programming',
    credits: 4,
    midterm: 84,
    assignment: 91,
    final: 87,
    grade: 'A'
  },

  {
    subject: 'Digital Logic Design',
    credits: 3,
    midterm: 79,
    assignment: 82,
    final: 80,
    grade: 'B+'
  },

  {
    subject: 'Mathematics',
    credits: 4,
    midterm: 95,
    assignment: 92,
    final: 94,
    grade: 'A+'
  },

  {
    subject: 'Physics',
    credits: 3,
    midterm: 81,
    assignment: 85,
    final: 83,
    grade: 'B+'
  }

];



const gradesBody =
  document.getElementById('gradesBody');



grades.forEach(subject => {

  gradesBody.innerHTML += `

    <tr>

      <td>
        ${subject.subject}
      </td>

      <td>
        ${subject.credits}
      </td>

      <td>
        ${subject.midterm}
      </td>

      <td>
        ${subject.assignment}
      </td>

      <td>
        ${subject.final}
      </td>

      <td>

        <span class="grade-pill">
          ${subject.grade}
        </span>

      </td>

    </tr>

  `;
});



function openPadlet(){

  window.open(

    'https://padlet.com/',

    '_blank'

  );
}