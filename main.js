const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    
    const answer = question.nextElementSibling;
    const arrowIcon = question.querySelector('.arrow-icon');
    
    if (answer.classList.contains('show')) {
        question.style.fontWeight = '400';
        question.style.color = 'hsl(237, 12%, 33%)';
        answer.classList.remove('show');
        arrowIcon.classList.remove('rotate');
    } else {
        question.style.fontWeight = '700';
        question.style.color = 'black';
        answer.classList.add('show');
        arrowIcon.classList.add('rotate');
    }

  });
});
