// Start of Navigation Section
$("body").scrollspy({
  target: "#navbarNav",
});

$(window).scroll(function () {
  var navigationHeight = $(window).height() - 50;

  if ($(window).scrollTop() > navigationHeight) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
// End of Navigation Section

// Start of Portfolio Section
$(document).ready(function () {
  $(".navigation .btn").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("1000");
      $(".filter")
        .filter("." + value)
        .show("1000");
    }
    $(".navigation .btn").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".wrapItem a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade",
  });

  $(document).on("click", ".popupModal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
// End of Portfolio Section

// Start of Smooth Scroll
const scrollDown = document.querySelectorAll(".scrolldown");
scrollDown.forEach((scrollEvent) =>
  scrollEvent.addEventListener("click", scrollingClick)
);

const scrollDownMore = document.getElementById("scrolldownMore");
scrollDownMore.addEventListener("click", scrollingClick);

const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((elem) => elem.addEventListener("click", scrollingClick));

function scrollingClick(event) {
  smoothScroll(event);
}

function smoothScroll(e) {
  e.preventDefault();
  const IdTarget = e.currentTarget.getAttribute("href");
  const targetPos = document.querySelector(IdTarget).offsetTop;
  const startPos = window.pageYOffset;
  const dist = targetPos - startPos;
  const duration = 2000;

  let start = null;

  window.requestAnimationFrame(step);

  function step(timeStamp) {
    if (!start) start = timeStamp;
    const progress = timeStamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPos, dist, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
// End of Smooth Scroll
