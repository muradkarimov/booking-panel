const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image:
      "https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567410?e=2147483647&v=beta&t=kfCdZUdTLS654Rtigf8QjpaUXT1DyvbaICarBIonbQg",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpn36OfsQvOj-ntaTZlzZWlpU5hyHpb3ygQ&usqp=CAU",
  },
];
const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "https://www.mitchamdental.com.au/wp-content/uploads/2020/01/Oral-Hygiene.jpg",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "https://www.columbia-smiles.com/wp-content/uploads/2020/12/Veneers.jpg",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];
const date = ["2022-03-04", "2022-03-05", "2022-03-06"];
const time = [
  {
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    start_time: "09:30",
    end_time: "10:00",
  },
];

let staff__members = document.getElementById("staff__members");
let service__types = document.getElementById("service__types");
// let staff__img = document.getElementById("staff__img");
// let staff__info__name = document.getElementById("staff__info__name");
// let staff__info__email = document.getElementById("staff__info__email");
// staff.forEach(e => {
//     console.log(e.image)
//     staff__img.src += e.image
//     staff__info__name.innerHTML += e.name
//     staff__info__email.innerHTML += e.email
// });
staff.forEach((value) => {
  staff__members.innerHTML += ` 
    
    <button class="type" id="staff__member">
    <img src="${value.image}" alt="" id="staff__img">
    <div class="info">
        <h2 id="info__name">${value.name}</h2>
        <h4 id="info__email">${value.email}</h4>
    </div>
</button>`;
});
services.forEach((value) => {
    service__types.innerHTML += ` 
      
      <button class="type" id="staff__member">
      <img src="${value.image}" alt="" id="staff__img">
      <div class="info">
          <h2 id="info__name">${value.name}</h2>
          <h4 id="info__duration">${value.duration} </h4>
      </div>
      <div class="info__price">
      <p>${value.price}$</p>
      </div>
  </button>`;
  });


const prevBtns = document.querySelectorAll(".previous");
const nextBtns = document.querySelectorAll(".next");
const formSteps = document.querySelectorAll(".form__step");


let formStepsNum = 0;
console.log(nextBtns)
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
   
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form__step__active") ?
      formStep.classList.remove("form__step__active"):formStep.classList.add("form__step__active")
  });

 
}