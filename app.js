/* carousel 
grab carousel items - store values in 'slides'
set slide position tp 0 
store const totalSlides to length of slides 
add event listeners to buttons and create functions for buttons
check if (slidePosition === 1)

*/

const slides = document.getElementsByClass('mySlides');
let slidePosition = 0;
const totalSlides = slides.length;
const nextBtn = document.getElementById('nextButton');
const prevBtn = document.getElementById('prevButton');

nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
  if (slidePosition === slides.length - 1){
    slidePosition = 0;
  } else {
    slidePosition++;
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
