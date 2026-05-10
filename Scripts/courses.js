function toggleCourse(button) {

  const card =
    button.closest('.course-page-card');

  const body =
    card.querySelector('.course-body');

  if (body.style.display === 'block') {

    body.style.display = 'none';

    button.innerText = 'Show Course';

  } else {

    body.style.display = 'block';

    button.innerText = 'Hide Course';

  }
}