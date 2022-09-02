const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.add("color-red");
    contactUser.classList.add("home__form-inputred");

    contactMessage.textContent = "Please check your email ☝️";

    setTimeout(() => {
      contactMessage.textContent = "";
      contactUser.classList.remove("home__form-inputred");
    }, 3000);
  }
};

contactForm.addEventListener("submit", sendEmail);

const accessForm = document.getElementById("access-form"),
  accessMessage = document.getElementById("access-message"),
  accessUser = document.getElementById("access-user");

const accessEmail = (e) => {
  e.preventDefault();

  if (accessUser.value === "") {
    accessMessage.classList.add("color-red");
    accessUser.classList.add("access__form-inputred");

    accessMessage.textContent = "Please check your email ☝️";

    setTimeout(() => {
      accessMessage.textContent = "";
      accessUser.classList.remove("access__form-inputred");
    }, 3000);
  }
};

accessForm.addEventListener("submit", accessEmail);
