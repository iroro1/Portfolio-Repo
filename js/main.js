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
