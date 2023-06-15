const email = document.querySelector(".mail")
const password = document.querySelector(".password")
const inputEmail = document.querySelector(".email")
const inputPassword = document.querySelector(".pass")
const iconMail = document.querySelector(".input #icon-mail")
const iconEye = document.querySelector(".input #icon-eye")
const iconPassword = document.querySelector(".input #icon-password")
const html = document.querySelector("html")

inputEmail.addEventListener("focus", () => {
  if (html.classList.contains("ligth")) {
    email.classList.add("ok")
    iconMail.style.color = "#574c3a"
  } else {
    email.classList.add("ok")
    iconMail.style.color = "#ffc632"
  }
})
inputEmail.addEventListener("blur", () => {
  email.classList.remove("ok")
  iconMail.style.color = "#d4ccb6"
})

inputPassword.addEventListener("focus", () => {
  if (html.classList.contains("ligth")) {
    password.classList.add("ok")
    iconPassword.style.color = "#574c3a"
    iconEye.style.color = "#574c3a"
  } else {
    password.classList.add("ok")
    iconPassword.style.color = "#ffc632"
    iconEye.style.color = "#ffc632"
  }
})
inputPassword.addEventListener("blur", () => {
  password.classList.remove("ok")
  iconPassword.style.color = "#d4ccb6"
  iconEye.style.color = "#d4ccb6"
})

//Switch mode
const switchArea = document.querySelector(".switch")
const btnSwitch = document.querySelector(".left")

switchArea.addEventListener("click", () => {
  html.classList.toggle("ligth")

  btnSwitch.style.right === "-50%"
    ? (btnSwitch.style.right = "10%")
    : (btnSwitch.style.right = "-50%")
})
