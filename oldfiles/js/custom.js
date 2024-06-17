// mobile navigatino
let toggeBtn = document.getElementById("nav_togge_btn");
let mobileNav = document.querySelector(".nav_menu");
toggeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});


// sticky_header
// on scroll add class
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > (720)) {
//       $("body").addClass("sticky_hdr");
//     } else {
//       $("body").removeClass("sticky_hdr");
//     }
//   });
// });
$(document).ready(function () {
  var windowheight = window.innerHeight;
  $(window).scroll(function () {
    if ($(document).scrollTop() > windowheight - 160) {
      $("body").addClass("sticky_hdr");
    } else {
      $("body").removeClass("sticky_hdr");
    }
  });
});
// remove # from url
// Select all links with hashes
// toggle class
$(document).ready(function () {
  $("#nav_togge_btn").click(function () {
    $("body").toggleClass("opn_nav");
  });
});

