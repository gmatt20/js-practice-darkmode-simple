const buttonElement = document.querySelector(".js-button");
buttonElement.addEventListener("click", clickDM);
buttonElement.innerHTML = "Activate Dark Mode";

function clickDM() {
  const htmlElements = {
    body: document.querySelector(".js-body"),
    container: document.querySelector(".js-container"),
    title: document.querySelector(".js-title"),
    button: document.querySelector(".js-button"),
  };

  if (htmlElements.body.classList.contains("js-bg")) {
    htmlElements.body.classList.remove("js-bg");
    htmlElements.container.classList.remove("js-container-bg");
    htmlElements.title.classList.remove("js-title-color");
    htmlElements.title.innerHTML = "Light Mode";
    htmlElements.button.classList.remove("js-button-bg");
    htmlElements.button.innerHTML = "Activate Dark Mode";
  } else {
    htmlElements.body.classList.add("js-bg");
    htmlElements.container.classList.add("js-container-bg");
    htmlElements.title.classList.add("js-title-color");
    htmlElements.title.innerHTML = "Dark Mode";
    htmlElements.button.classList.add("js-button-bg");
    htmlElements.button.innerHTML = "Activate Light Mode";
  }
}
