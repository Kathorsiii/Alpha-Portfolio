// Start of Preloader Section
$(function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(this).remove();
    });
  }, 2000);
});
// End of Preloader Section

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

// Start of Carousel Section
$(".carousel").carousel({
  interval: 2000,
});
// End of Carousel Section

//Start of Feature Section
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});
//End of Feature Section

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

// Start of Contact Section
const regForm = document.querySelector("form#contact");
const errorsForm = document.querySelector("form#contact .errors");

regForm.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const firstname = document.querySelector("#contact #firstname");
  const lastname = document.querySelector("#contact #lastname");
  const email = document.querySelector("#contact #email");
  const phoneNumber = document.querySelector("#contact #phoneNumber");
  const message = document.querySelector("#contact #message");

  var frm = document.getElementsByName("form-name")[0];

  let errors = [];

  const emailContact = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneContact = /^[0-9]{11}$/;

  if (firstname.value === "") {
    errors.push({ text: "First Name", el: firstname });
  }

  if (lastname.value === "") {
    errors.push({ text: "Last Name", el: lastname });
  }

  if (email.value === "") {
    errors.push({ text: "Email", el: email });
  } else if (!emailContact.test(email.value)) {
    errors.push({ text: "Email", el: email });
  }

  if (phoneNumber.value == "") {
    errors.push({ text: "Phone Number", el: phoneNumber });
  } else if (!phoneContact.test(phoneNumber.value)) {
    errors.push({ text: "Phone Number", el: phoneNumber });
  }

  if (message.value === "") {
    errors.push({ text: "Message", el: message });
  }

  if (errors.length > 0) {
    errorContact(errors);
    return false;
  }

  Swal.fire({
    title: "Success!",
    text: "Thank you! Form submitted!",
    icon: "success",
  });

  regForm.reset();
  return false;
}

function errorContact(error) {
  let errorStr = "You have errors in the following fields: ";

  error.map((err) => {
    err.el.classList.add("error");
    errorStr += err.text + " ";
  });

  error[0].el.focus();

  let errorEl = document.createElement("div");
  errorEl.classList.add("error");
  errorEl.innerText = errorStr;

  errorEl.addEventListener("click", function () {
    errorsForm.removeChild(errorEl);
  });

  errorsForm.appendChild(errorEl);
}

// End of Contact Section

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
