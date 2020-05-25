var imgBefore = document.querySelector('.toggle__image--before');
var imgAfter = document.querySelector('.toggle__image--after');
var toggleMark = document.querySelector('.toggle__mark');

var btnBefore = document.querySelector('.toggle__btn--before');
var btnAfter = document.querySelector('.toggle__btn--after');

btnBefore.addEventListener('click', function() {
  if (imgBefore.classList.contains('visually-hidden')) {
      imgBefore.classList.remove('visually-hidden');
      imgAfter.classList.add('visually-hidden');
      toggleMark.classList.remove('toggle__mark--after');
      toggleMark.classList.add('toggle__mark--before');
  }
});

btnAfter.addEventListener('click', function() {
  if (imgAfter.classList.contains('visually-hidden')) {
      imgAfter.classList.remove('visually-hidden');
      imgBefore.classList.add('visually-hidden');
      toggleMark.classList.remove('toggle__mark--before');
      toggleMark.classList.add('toggle__mark--after');
  }
});
