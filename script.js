const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "../images/unsplash_279xIHymPYY.png",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "../images/unsplash_IF9TK5Uy-KI.png",
  },
];
const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "../images/unsplash_MLJHxQ5qxxY.png",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "../images/unsplash_fmB7IdFjhTM.png",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];
const date = ["2022-03-04", "2022-03-05", "2022-03-06"];
const time = [
  {
    id:"1",
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    id:"2",
    start_time: "09:30",
    end_time: "10:00",
  },
  {
    id:"3",
    start_time: "10:00",
    end_time: "10:30",
  },
];
let object = {staff:"", service:"", date:"", price:"", name:"", surname:"", email:""}

const staff__members = document.getElementById("staff__members");
const service__types = document.getElementById("service__types");
const timeDiv = document.getElementById("time");
const timeHeader = document.getElementById("time__header");
const dark = document.querySelectorAll(".dark");
const dark1 = document.getElementById("dark1");
const dark2 = document.getElementById("dark2");
const dark3 = document.getElementById("dark3");

let count = 0;
staff.forEach((value) => {
  staff__members.innerHTML += ` 
    
    <button class="type" id="staff__member${value.id}" value=${value.name}>
    <img src="${value.image}" alt="" id="staff__img">
    <div class="info">
        <h2 id="info__name${value.id}">${value.name}</h2>
        <h4 id="info__email">${value.email}</h4>
    </div>
</button>`;
console.log(value.name)
});
services.forEach((value) => {
  service__types.innerHTML += ` 
      <button class="type" id="service__type${value.id}" value=${value.name} >
      <img src="${value.image}" alt="" id="staff__img">
      <div class="info">
          <h2 id="info__name${value.id+2}">${value.name}</h2>
          <h4 id="info__duration">${value.duration} </h4>
      </div>
      <div class="info__price">
      <p value=${value.price} id="price${value.id}">${value.price}$</p>
      </div>
  </button>`;
});


for (var i = 0; i < dark.length; i++) {
  dark[i].addEventListener("click", function () {
    
console.log(exactTime1, exactTime2, exactTime3, exactTime)
    if (count != 0) {
        timeDiv.innerHTML = "";
      time.forEach((value) => {
        timeDiv.innerHTML += ` 
            <div class="exact__time" id="exact__time${value.id}">
            <p>${value.start_time}</p>
            <p>${value.end_time}</p>
            </div>
            `;
            console.log()
      });
      timeHeader.innerHTML = "2023-03-04";
     
    } else {
      time.forEach((value) => {
        timeDiv.innerHTML += ` 
            <div class="exact__time" id="exact__time${value.id}">
            <p>${value.start_time}</p>
            <p>${value.end_time}</p>
            </div>
            `;
      });
      timeHeader.innerHTML = "2023-03-04";
      count ++;
    }
  });
}

dark1.addEventListener("click", function(){
    dark1.classList.add("dark__active")
    dark2.classList.remove("dark__active")
    dark3.classList.remove("dark__active")
})
dark2.addEventListener("click", function(){
    dark2.classList.add("dark__active")
    dark1.classList.remove("dark__active")
    dark3.classList.remove("dark__active")
})

dark3.addEventListener("click", function(){
    dark3.classList.add("dark__active")
    dark1.classList.remove("dark__active")
    dark2.classList.remove("dark__active")
})

// exactTime1.addEventListener("click", function(){
//     exactTime1.classList.add("exact__time__active")
//     exactTime2.classList.remove("exact__time__active")
//     exactTime3.classList.remove("exact__time__active")
// })
// exactTime2.addEventListener("click", function(){
//     exactTime2.classList.add("exact__time__active")
//     exactTime1.classList.remove("exact__time__active")
//     exactTime3.classList.remove("exact__time__active")
// })

// exactTime3.addEventListener("click", function(){
//     exactTime3.classList.add("exact__time__active")
//     exactTime1.classList.remove("exact__time__active")
//     exactTime2.classList.remove("exact__time__active")
// })


const infoName1= document.getElementById("info__name1");
const infoName2= document.getElementById("info__name2");
const infoName3= document.getElementById("info__name3");
const infoName4= document.getElementById("info__name4");
const exactTime1 = document.getElementById("exact__time1");
const exactTime2 = document.getElementById("exact__time2");
const exactTime3 = document.getElementById("exact__time3");
const exactTime = document.querySelectorAll(".exact__time")
console.log(exactTime1, exactTime2, exactTime3, exactTime)
const staffMember1 = document.getElementById("staff__member1");
const staffMember2 = document.getElementById("staff__member2");
const serviceType1 = document.getElementById("service__type1");
const serviceType2 = document.getElementById("service__type2");
const restriction = document.getElementById("restriction");
const restriction1 = document.getElementById("restriction1");
const restriction2 = document.getElementById("restriction2");
const objectStaff = document.getElementById("object__staff");
const objectService = document.getElementById("object__service");
const objectDate = document.getElementById("object__date");
const objectPrice = document.getElementById("object__price");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const message = document.getElementById("message");
const messageText = document.getElementById("message__text");
const closeBtn = document.getElementById("close");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formSurname = document.getElementById("surname");
const next = document.getElementById("next");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const prevBtns = document.querySelectorAll(".previous");
const typeBtns = document.querySelectorAll(".type");
const nextBtns = document.querySelectorAll(".next");
const formSteps = document.querySelectorAll(".form__step");
const progressSteps = document.querySelectorAll(".progress__bar__step");
const icon = document.querySelectorAll(".fa-solid");
const stageNumber = document.querySelectorAll(".stage__number");
const btn = document.querySelectorAll(".btn");
let timerInSeconds = 0;


staffMember1.addEventListener("click", function () {
  staffMember1.classList.add("green__border");
  staffMember2.classList.remove("green__border");
  restriction.classList.remove("active");
  object.staff = infoName1.innerHTML;
  objectStaff.innerHTML = `${object.staff}`

  
  progressSteps[formStepsNum+1].classList.add("progress__bar__step__active")
  progressSteps[0].classList.add("progress__bar__step__done")
  progressSteps[0].style.setProperty("--check-primary", "#fff")
  icon[0].classList.add("active")
  stageNumber[0].classList.add("none")
  console.log(progressSteps[0])
});

staffMember2.addEventListener("click", function () {
  staffMember2.classList.add("green__border");
  staffMember1.classList.remove("green__border");
  restriction.classList.remove("active");
  object.staff = infoName2.innerHTML;
  objectStaff.innerHTML = `${object.staff}`

  progressSteps[formStepsNum+1].classList.add("progress__bar__step__active")
  progressSteps[0].classList.add("progress__bar__step__done")
  progressSteps[0].style.setProperty("--check-primary", "#fff")
  icon[0].classList.add("active")
  stageNumber[0].classList.add("none")
});
serviceType1.addEventListener("click", function () {
  serviceType1.classList.add("green__border");
  serviceType2.classList.remove("green__border");
  restriction1.classList.remove("active");
  object.service = infoName3.innerHTML;
  object.price = price1.innerHTML;
  objectService.innerHTML = `${object.service}`
  objectPrice.innerHTML = `${object.price}`

  progressSteps[formStepsNum+1].classList.add("progress__bar__step__active")
  progressSteps[1].classList.add("progress__bar__step__done")
  progressSteps[1].style.setProperty("--check-primary", "#fff")
  icon[1].classList.add("active")
  stageNumber[1].classList.add("none")
});
serviceType2.addEventListener("click", function () {
  serviceType2.classList.add("green__border");
  serviceType1.classList.remove("green__border");
  restriction1.classList.remove("active");
  object.service = infoName4.innerHTML;
  object.price = price2.innerHTML;
  objectService.innerHTML = `${object.service}`
  objectPrice.innerHTML = `${object.price}`

  progressSteps[formStepsNum+1].classList.add("progress__bar__step__active")
  progressSteps[1].classList.add("progress__bar__step__done")
  progressSteps[1].style.setProperty("--check-primary", "#fff")
  icon[1].classList.add("active")
  stageNumber[1].classList.add("none")
});
let formStepsNum = 0;
// nextBtns.forEach((btn) => {
//     if( formStep.classList.contains("form__step__active")){
//         btn.addEventListener("click", (event) => {
//             event.preventDefault();
//             formStepsNum++;
//             updateFormSteps();
//           });
//     }

//   });

next3.addEventListener("click", function(event){
    event.preventDefault();
    console.log(messageText)
    object.name = formName.value;
object.surname = formSurname.value;
object.email = formEmail.value
    message.classList.add("message__active")
    if(object.name=="" || object.surname=="" || object.email==""){
        messageText.innerHTML = `
        <h1>Please fill all required fields!</h1>`
    }
    else{
        messageText.innerHTML = `
        <h1 class="green__color">Confirmation succesfully completed!</h1>`
        console.log(object)
        setInterval(() => {
          timerInSeconds += 1;
          if (timerInSeconds >= 5) {
            window.location.reload();
          }
        }, 1000);
    }
})

closeBtn.addEventListener("click", function(){
    message.classList.remove("message__active")
})

next.addEventListener("click", function (event) {
  if (
    staffMember1.classList.contains("green__border") ||
    staffMember2.classList.contains("green__border")
  ) {
    event.preventDefault();
    formStepsNum++;
    updateFormSteps();
    restriction.classList.remove("active");
    progressSteps[formStepsNum].classList.add("progress__bar__step__active")
    progressSteps[0].classList.add("progress__bar__step__done")
    progressSteps[0].style.setProperty("--check-primary", "#fff")
    icon[0].classList.add("active")
    stageNumber[0].classList.add("none")
  } else {
    event.preventDefault();
    restriction.classList.add("active");
  }
});
next1.addEventListener("click", function (event) {
  if (
    serviceType1.classList.contains("green__border") ||
    serviceType2.classList.contains("green__border")
  ) {
    event.preventDefault();
    formStepsNum++;
    updateFormSteps();
    restriction1.classList.remove("active");
    progressSteps[formStepsNum].classList.add("progress__bar__step__active")
    progressSteps[1].classList.add("progress__bar__step__done")
    progressSteps[1].style.setProperty("--check-primary", "#fff")
    icon[1].classList.add("active")
    stageNumber[1].classList.add("none")
  } else {
    event.preventDefault();
    restriction1.classList.add("active");
  }
});
next2.addEventListener("click", function (event) {
    // if (
    //   exactTime1.classList.contains("exact__time__active") ||
    //   exactTime2.classList.contains("exact__time__active") || exactTime3.classList.contains("exact__time__active") 
    // ) {
    //   event.preventDefault();
    //   formStepsNum++;
    //   updateFormSteps();
    //   restriction2.classList.remove("active");
    // } else {
    //   event.preventDefault();
    //   restriction2.classList.add("active");
    // }
    event.preventDefault();
      formStepsNum++;
      updateFormSteps();
      restriction2.classList.remove("active");
      progressSteps[formStepsNum].classList.add("progress__bar__step__active")
      progressSteps[2].classList.add("progress__bar__step__done")
      progressSteps[2].style.setProperty("--check-primary", "#fff")
      icon[2].classList.add("active")
      stageNumber[2].classList.add("none")
  });

typeBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    formStepsNum++;
    updateFormSteps();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    formStepsNum--;
    updateFormSteps();
    progressSteps[formStepsNum].classList.remove("progress__bar__step__done")
    progressSteps[formStepsNum].classList.add("progress__bar__step__active")
    progressSteps[formStepsNum+1].classList.remove("progress__bar__step__active")
    progressSteps[formStepsNum].style.setProperty("--check-primary", "#53d56c")
    icon[formStepsNum].classList.remove("active")
    stageNumber[formStepsNum].classList.remove("none")
    console.log(progressSteps[0])
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form__step__active") &&
      formStep.classList.remove("form__step__active");
  });

  formSteps[formStepsNum].classList.add("form__step__active");
}

// function updateProgressbar() {
//     progressSteps.forEach((progressStep, idx) => {
//       if (idx < formStepsNum + 1) {
//         progressStep.classList.add("progress__step__active");
//       } else {
//         progressStep.classList.remove("progress__step__active");
//       }
//     });

//     const progressActive = document.querySelectorAll(".progress__step__active");

//   }
