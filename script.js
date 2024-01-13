function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', function () {
  var aboutPics = document.querySelectorAll('.about-pic');
  var tooltips = document.querySelectorAll('.js-tooltip');

  aboutPics.forEach(function(aboutPic, index) {
      aboutPic.addEventListener('mousemove', function (event) {
          // Show the tooltip corresponding to this .about-pic
          var tooltip = tooltips[index];
          tooltip.style.display = 'block';
          tooltip.style.left = (event.clientX + 5) + 'px';
          tooltip.style.top = (event.clientY + 5) + 'px';
      });

      aboutPic.addEventListener('mouseout', function () {
          // Hide the tooltip corresponding to this .about-pic
          var tooltip = tooltips[index];
          tooltip.style.display = 'none';
      });
  });
});
