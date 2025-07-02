let errorMessage = document.getElementById("errorMessage");
let email = document.getElementById("email");

function validate() {
  if (email.value === "") {
    errorMessage.style.display = "block";
    email.style.border = "2px solid  hsl(0, 100%, 63%)";
    errorMessage.innerHTML = "Email cannot be empty";
  } else if (!email.value.includes("@")) {
    errorMessage.style.display = "block";
    email.style.border = "2px solid  hsl(0, 100%, 63%)";
    errorMessage.innerHTML =
      '"' + email.value + '"' + " is not a valid email";
  } else {
    errorMessage.style.display = "none";
    email.style.border = "none";
  }
}
window.localStorage.setItem=(email.value)
email.addEventListener("input", () => {
  if (email.value.trim() !== "") {
    errorMessage.style.display = "none";
    email.style.border = "none";
  }
});
function save(){
    let emails = []
    const submit ={
        mail :email.value
    }
    console.log(emails)
    emails.push(JSON.stringify(submit))
    localStorage.setItem("email:",emails)
}
