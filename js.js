document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typed-text", {
      strings: ["PROGRAMMING WEB"],
      speed:150,
      loop:true
    })
    .pause(300)
    .delete(1)
    .pause(200)
    .move(-1)
    .pause(300)
    .delete(13)
    .pause(200)
    .type("STUD")
    .pause(200)
    .move(1)
    .pause(300)
    .type("NT")
    .type(" | ")
    .pause(350)
    .type("SMKN")
    .pause(250)
    .type("2")
    .pause(200)
    .type("surabaya")
    .pause(200)
    .go();
    
  });


document.addEventListener('DOMContentLoaded', function() {
        var progressBars = document.querySelectorAll('.progress-bar-fill');
        progressBars.forEach(function(bar) {
            bar.parentElement.parentElement.classList.add('visible');
        });
    });
    

    window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").classList.add("scrolled");
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
    }
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbzt7OGNvhsAa0fVpGBzV0LgxJ1u7r8EjBDo7CcxKJm4J4U-6tDLtmeBiBxgPsaqISY3/exec';
      const form = document.forms['adi-contact-form'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // ketika tombol submit diklik
        // tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset formnya
            form.reset();
            console.log('Success!', response);
          })
          .catch((error) => console.error('Error!', error.message));
      });
      
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav a");

  function getScrollOffsets() {
    return window.innerWidth < 768 ? 100 : 100; // Sesuaikan tinggi scroll dengan ukuran layar
  }

  function onScroll() {
    let current = "";
    const scrollOffset = getScrollOffsets();
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 2 - scrollOffset) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
});


document.addEventListener("DOMContentLoaded", function(){
  gsap.from(".progress-bar", {
scrollTrigger: ".progress-bar",
width: "0px",
ease: Power2.easeInOut,
duration: 3,
opacity:0.5,
stagger: 0.1
});
})


