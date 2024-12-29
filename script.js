document.addEventListener('DOMContentLoaded', function() {
  const letter = document.querySelector('.letter');
  const contents = document.querySelectorAll('.content');
  let currentPage = 1;
  let isFlipped = false;

  letter.addEventListener('click', () => {
    if (!isFlipped) {
      letter.classList.add('flipped');
      isFlipped = true;
      showContent();
    }
  });

  function showContent() {
    contents.forEach((content, index) => {
      setTimeout(() => {
        content.style.display = 'block';
      }, index * 500);
    });
  }

  window.nextPage = function() {
    if (currentPage < 3) {  // Changed to allow navigation to page 3
      document.getElementById('page' + currentPage).style.display = 'none';
      currentPage++;
      document.getElementById('page' + currentPage).style.display = 'block';
    }
  };

  window.prevPage = function() {
    if (currentPage > 1) {
      document.getElementById('page' + currentPage).style.display = 'none';
      currentPage--;
      document.getElementById('page' + currentPage).style.display = 'block';
    }
  };
});