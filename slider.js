const slider = document.querySelector('.slider');
const slides = slider.getElementsByTagName('img');
const right = document.querySelector('.arrow-right')
const left = document.querySelector('.arrow-left')
const sliderBottom = document.querySelectorAll(".slide-bottom");
(function createSlider() {
    let currentIndex = 0;


    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        sliderBottom[i].classList.remove('active');
      }
      sliderBottom[currentIndex].classList.add('active');
      slides[index].classList.add('active');
    }
    

    right.onclick = function (){
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex)
    }
    

    left.onclick = function (){
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      
    }
    

    sliderBottom.forEach((dot, index) => {
      dot.addEventListener('click', function(){
         goToSlide(index);
        });
    });


    function goToSlide(slideIndex) {
      currentIndex = slideIndex;
      showSlide(currentIndex);
    }


        showSlide(currentIndex);

      })();