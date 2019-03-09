$(".navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      1200
    );
  }
});

// viewport
const items = document.querySelectorAll("#timeline li");

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 35.070329, lng: 32.854614 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc });
}

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.75;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Lightbox Init
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Configure Carousel Slider
$(".carousel").carousel({
  interval: 6000,
  pause: "hover"
});

// Testimonial slider

$(".slider").slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

// Video Play Autoplay
$(function() {
  // Auto play modal video
  $(".video").click(function() {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto =
        videoSRC +
        "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function() {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
});
