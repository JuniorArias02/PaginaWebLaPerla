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
  