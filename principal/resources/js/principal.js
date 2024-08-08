// alert("hola");
document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
  
      
      document.querySelectorAll('.faq-item').forEach((faq) => {
        faq.classList.remove('active');
        faq.querySelector('.faq-answer').style.maxHeight = '0';
      });
  
      
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var enlaces = document.querySelectorAll('.navegacion a');

    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function (e) {
            // Comprobar si el enlace apunta a una sección en la misma página
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var destino = this.getAttribute('href');
                document.querySelector(destino).scrollIntoView({
                    behavior: 'smooth'
                });
            } 
        });
    }
});