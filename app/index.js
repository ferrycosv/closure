import ExerciseInJsTutor from './in-js-tutor.js';
import LiveStudy from './live-study.js';

fetch('./exercises/index.json')
  .then(res => res.json())
  .then(index => {
    const exercisesDir = ExerciseInJsTutor.populate(index);
    const liveStudyApp = new LiveStudy(exercisesDir);
    const view = liveStudyApp.render();
    document.getElementById('root').appendChild(view);

    document.getElementById('title').innerHTML = index.title;
    document.getElementById('header').innerHTML = index.title;
  })
  .catch(err => console.error(err));

