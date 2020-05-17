var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000)
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
