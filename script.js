// About me (Age)
function Age() {
  const newAge = new Date().getFullYear();
  document.getElementById("about-me-age").innerHTML = newAge - 2000;
  document.getElementById("footer-year").innerHTML = newAge;
}
Age();

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".grid-image");
images.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal image, close it
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// faqs functionality
document.addEventListener("DOMContentLoaded", function () {
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    var toggle = item.querySelector(".faq-toggle");

    question.addEventListener("click", function () {
      var isVisible = answer.style.display === "block";

      // Close all open answers
      faqItems.forEach(function (i) {
        i.querySelector(".faq-answer").style.display = "none";
        i.querySelector(".faq-toggle").textContent = "+";
      });

      // Toggle current answer
      if (!isVisible) {
        answer.style.display = "block";
        toggle.textContent = "-";
        toggle.style.padding = "5px 12px";
      } else {
        answer.style.display = "none";
        toggle.textContent = "+";
        toggle.style.padding = "5px 10px";
      }
    });
  });
});

// nav bar functionality
function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// send message functionality
function sendMail() {
  var params = {
    senderName: document
      .getElementById("first-name")
      .value.concat(" ", document.getElementById("last-name").value),
    senderEmail: document.getElementById("email").value,
    senderSubject: document.getElementById("subject").value,
    senderMessage: document.getElementById("message").value,
  };
  emailjs
    .send("service_n49hveh", "template_9m4uoev", params)
    .then(function (res) {
      // alert("Success! " + res.status);
      alert("Message Sent!");
    });
}
