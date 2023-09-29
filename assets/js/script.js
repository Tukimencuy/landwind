window.onload = function () {
  setTimeout(function () {
    var element = document.getElementById('ghmain');
    element.style.display = 'block';
    element.style.transition = 'opacity 1s';
    element.style.opacity = 1;
  }, 700); // Jeda 500 milidetik (0.5 detik) sebelum efek fade dimulai
};

ScrollReveal().reveal('.about');
ScrollReveal().reveal('.lomba');

// Data Aos Javascript
