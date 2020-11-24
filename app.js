/* carousel 
1. grab carousel items - store values in 'slides'
2. set slide position tp 0 
3. store const totalSlides to length of slides 
4. add event listeners to buttons and create functions for buttons
5. check if (slidePosition === totalslides - 1)
    - if condition is true, reset slidePosition to 0  
    - if false, increment slidePosition by 1 (so we go to next slide)
6. in nextSlide function, add class name of 'carousel-item-visible' to current slide after conditional
    - use slidePosition to access current array element in 'slides' and then add class name 'carousel-item-visible' 
7. Hide nonactive slides 
    - make a style class that hides the images 
    - create a function that hides all slides
    - use for of loop to iterate through the slides (which gives you direct access to each slide)
    -inside for of loop, remove the 'visible' class and add the 'hidden' class 
    - call "hide" function inside of "next slide" function at the very top 
8. Move to previous slide 
   1) As we did with 'moveToNextSlide', call 'hideAllSlides' within 'moveToPrevSlide'
    2) Check if the slidePosition === 0, if it is, we know that we're on the first slide, so to go back, we take 'totalSlides' and decrease the value by 1. An example: 3-1 = 2, which gives us slidePosition 2 which is the last item in our array of slides [0, 1, 2] <- these are the indexes in the array, the actual values can be accessed by 'slides[slidePosition]' as we did for 'moveToNextSlide'
    3) If we are not on the 'slidePosition' of 0, we are not on the first slide item, therefore we just decrease 'slidePosition'. This is the reason we check for 0 prior, because if we are on 0 and try decrease from 0, we'll end up passing an index value to the 'slides' that doesn't exist - 'slides[-1]' <- like so! This will cause an error!
    4) As we did in 'moveToNextSlide', we want to add the class of 'carousel-item-visible'

*/

const slides = document.querySelectorAll('.mySlides');
let slidePosition = 0;
const totalSlides = slides.length;
const nextBtn = document.getElementById('nextButton');
const prevBtn = document.getElementById('prevButton');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function nextSlide() {

  hideAllSlides();

  if (slidePosition === totalSlides - 1){
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
  
  /* console.log(slides[slidePosition]); */
}

function prevSlide() {
  hideAllSlides();

  if (slidePosition === 0){
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides (){
  for (let slide of slides){
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
function initMap() {
  // The location of Uluru
  var longmont = {lat: 40.10, lng: -105.109};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: longmont});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: longmont, map: map});
}
