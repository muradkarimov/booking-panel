const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "./images/unsplash_279xIHymPYY.png",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "./images/unsplash_IF9TK5Uy-KI.png",
  },
];
const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "./images/unsplash_MLJHxQ5qxxY.png",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "./images/unsplash_fmB7IdFjhTM.png",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];
const date = ["2022-08-04", "2022-08-05", "2022-08-06"];
const time = [
  {
    id: "1",
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    id: "2",
    start_time: "09:30",
    end_time: "10:00",
  },
  {
    id: "3",
    start_time: "10:00",
    end_time: "10:30",
  },
];
let object = {
  staff: "",
  service: "",
  date: "",
  price: "",
  name: "",
  surname: "",
  email: "",
};

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
  //console.log(value.name);
});
services.forEach((value) => {
  service__types.innerHTML += ` 
      <button class="type" id="service__type${value.id}" value=${value.name} >
      <img src="${value.image}" alt="" id="staff__img">
      <div class="info">
          <h2 id="info__name${value.id + 2}">${value.name}</h2>
          <h4 id="info__duration">${value.duration} </h4>
      </div>
      <div class="info__price">
      <p value=${value.price} id="price${value.id}">${value.price}$</p>
      </div>
  </button>`;
});


for (var i = 0; i < dark.length; i++) {
  dark[i].addEventListener("click", function () {
    if (count != 0) {
      timeDiv.innerHTML = "";
      time.forEach((value) => {
        const current = `${value.id}`;
        //console.log(current);
            timeDiv.innerHTML += `
            <div class="exact__time" id="exact__time${value.id}">
            <p>${value.start_time}</p>
            <p>${value.end_time}</p>
            </div>
            `;
            const exactTime1 = document.getElementById("exact__time1");
            const exactTime2 = document.getElementById("exact__time2");
            const exactTime3 = document.getElementById("exact__time3");
           // console.log(exactTime1,exactTime2,exactTime3)
            if(current ==3){
              exactTime1.addEventListener("click", function () {
                exactTime1.classList.add("exact__time__active");
                exactTime2.classList.remove("exact__time__active");
                exactTime3.classList.remove("exact__time__active");
                object.date += time[0].start_time 
                object.date += "-"
                object.date += time[0].end_time
               // console.log(object.date.length)
                formStepsNum++;
                updateFormSteps();
                restriction2.classList.remove("active");
                objectDate.innerHTML = `${object.date}`
              });
               exactTime2.addEventListener("click", function () {
              exactTime2.classList.add("exact__time__active");
              exactTime1.classList.remove("exact__time__active");
              exactTime3.classList.remove("exact__time__active");
              object.date += time[1].start_time 
              object.date += "-"
              object.date += time[1].end_time
              formStepsNum++;
              updateFormSteps();
              restriction2.classList.remove("active");
              objectDate.innerHTML = `${object.date}`
            });
      
            exactTime3.addEventListener("click", function () {
              exactTime3.classList.add("exact__time__active");
              exactTime1.classList.remove("exact__time__active");
              exactTime2.classList.remove("exact__time__active");
              object.date += time[2].start_time 
              object.date += "-"
              object.date += time[2].end_time
              formStepsNum++;
              updateFormSteps();
              restriction2.classList.remove("active");
              objectDate.innerHTML = `${object.date}`
            });
            }
           
      });
    

    } else {
      
      time.forEach((value) => {
        const current = value.id;
       // console.log(current);
        timeDiv.innerHTML += `
            <div class="exact__time" id="exact__time${value.id}">
            <p>${value.start_time}</p>
            <p>${value.end_time}</p>
            </div>
            `;
            const exactTime1 = document.getElementById("exact__time1");
      const exactTime2 = document.getElementById("exact__time2");
      const exactTime3 = document.getElementById("exact__time3");
     // console.log(exactTime1,exactTime2,exactTime3)
      if(current ==3){
        exactTime1.addEventListener("click", function () {
          exactTime1.classList.add("exact__time__active");
          exactTime2.classList.remove("exact__time__active");
          exactTime3.classList.remove("exact__time__active");
          object.date += time[0].start_time 
          object.date += "-"
          object.date += time[0].end_time
          formStepsNum++;
          updateFormSteps();
          restriction2.classList.remove("active");
          objectDate.innerHTML = `${object.date}`
        });
         exactTime2.addEventListener("click", function () {
        exactTime2.classList.add("exact__time__active");
        exactTime1.classList.remove("exact__time__active");
        exactTime3.classList.remove("exact__time__active");
        object.date += time[1].start_time 
        object.date += "-"
        object.date += time[2].end_time
        formStepsNum++;
        updateFormSteps();
        restriction2.classList.remove("active");
        objectDate.innerHTML = `${object.date}`
      });

      exactTime3.addEventListener("click", function () {
        exactTime3.classList.add("exact__time__active");
        exactTime1.classList.remove("exact__time__active");
        exactTime2.classList.remove("exact__time__active");
        object.date += time[2].start_time 
        object.date += "-"
        object.date += time[2].end_time
        formStepsNum++;
        updateFormSteps();
        restriction2.classList.remove("active");
        objectDate.innerHTML = `${object.date}`
      });
      }
      });
      count ++;
    }
  

  });
}

dark1.addEventListener("click", function () {
  dark1.classList.add("dark__active");
  dark2.classList.remove("dark__active");
  dark3.classList.remove("dark__active");
  timeHeader.innerHTML = date[0];
  object.date = "";
  object.date = timeHeader.innerHTML;
  object.date += "/";
 // console.log(object.date)
});
dark2.addEventListener("click", function () {
  dark2.classList.add("dark__active");
  dark1.classList.remove("dark__active");
  dark3.classList.remove("dark__active");
  timeHeader.innerHTML = date[1];
  object.date = "";
  object.date = timeHeader.innerHTML;
  object.date += "/";
 // console.log(object.date)
});

dark3.addEventListener("click", function () {
  dark3.classList.add("dark__active");
  dark1.classList.remove("dark__active");
  dark2.classList.remove("dark__active");
  timeHeader.innerHTML = date[2];
  object.date = "";
  object.date = timeHeader.innerHTML;
  object.date += "/";
 // console.log(object.date)
});



const infoName1 = document.getElementById("info__name1");
const infoName2 = document.getElementById("info__name2");
const infoName3 = document.getElementById("info__name3");
const infoName4 = document.getElementById("info__name4");
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
  objectStaff.innerHTML = `${object.staff}`;

  progressSteps[formStepsNum + 1].classList.add("progress__bar__step__active");
  progressSteps[0].classList.add("progress__bar__step__done");
  progressSteps[0].style.setProperty("--check-primary", "#fff");
  icon[0].classList.add("active");
  stageNumber[0].classList.add("none");
 // console.log(progressSteps[0]);
});

staffMember2.addEventListener("click", function () {
  staffMember2.classList.add("green__border");
  staffMember1.classList.remove("green__border");
  restriction.classList.remove("active");
  object.staff = infoName2.innerHTML;
  objectStaff.innerHTML = `${object.staff}`;

  progressSteps[formStepsNum + 1].classList.add("progress__bar__step__active");
  progressSteps[0].classList.add("progress__bar__step__done");
  progressSteps[0].style.setProperty("--check-primary", "#fff");
  icon[0].classList.add("active");
  stageNumber[0].classList.add("none");
});
serviceType1.addEventListener("click", function () {
  serviceType1.classList.add("green__border");
  serviceType2.classList.remove("green__border");
  restriction1.classList.remove("active");
  object.service = infoName3.innerHTML;
  object.price = price1.innerHTML;
  objectService.innerHTML = `${object.service}`;
  objectPrice.innerHTML = `${object.price}`;

  progressSteps[formStepsNum + 1].classList.add("progress__bar__step__active");
  progressSteps[1].classList.add("progress__bar__step__done");
  progressSteps[1].style.setProperty("--check-primary", "#fff");
  icon[1].classList.add("active");
  stageNumber[1].classList.add("none");
});
serviceType2.addEventListener("click", function () {
  serviceType2.classList.add("green__border");
  serviceType1.classList.remove("green__border");
  restriction1.classList.remove("active");
  object.service = infoName4.innerHTML;
  object.price = price2.innerHTML;
  objectService.innerHTML = `${object.service}`;
  objectPrice.innerHTML = `${object.price}`;

  progressSteps[formStepsNum + 1].classList.add("progress__bar__step__active");
  progressSteps[1].classList.add("progress__bar__step__done");
  progressSteps[1].style.setProperty("--check-primary", "#fff");
  icon[1].classList.add("active");
  stageNumber[1].classList.add("none");
});
let formStepsNum = 0;



closeBtn.addEventListener("click", function () {
  message.classList.remove("message__active");
  message.classList.remove("overlay");
});

next.addEventListener("click", function (event) {
  if (
    staffMember1.classList.contains("green__border") ||
    staffMember2.classList.contains("green__border")
  ) {
    event.preventDefault();
    formStepsNum++;
    updateFormSteps();
    restriction.classList.remove("active");
    progressSteps[formStepsNum].classList.add("progress__bar__step__active");
    progressSteps[0].classList.add("progress__bar__step__done");
    progressSteps[0].style.setProperty("--check-primary", "#fff");
    icon[0].classList.add("active");
    stageNumber[0].classList.add("none");
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
    progressSteps[formStepsNum].classList.add("progress__bar__step__active");
    progressSteps[1].classList.add("progress__bar__step__done");
    progressSteps[1].style.setProperty("--check-primary", "#fff");
    icon[1].classList.add("active");
    stageNumber[1].classList.add("none");
  } else {
    event.preventDefault();
    restriction1.classList.add("active");
  }
});
next2.addEventListener("click", function (event) {
  if (
    object.date.length>11
  ) {
    event.preventDefault();
    formStepsNum++;
    updateFormSteps();
    restriction2.classList.remove("active");
    progressSteps[formStepsNum].classList.add("progress__bar__step__active");
    progressSteps[2].classList.add("progress__bar__step__done");
    progressSteps[2].style.setProperty("--check-primary", "#fff");
    icon[2].classList.add("active");
    stageNumber[2].classList.add("none");
    objectDate.innerHTML = `${object.date}`
  } else {
    event.preventDefault();
    restriction2.classList.add("active");
  }
  
});
next3.addEventListener("click", function (event) {
  event.preventDefault();
 // console.log(messageText);
  object.name = formName.value;
  object.surname = formSurname.value;
  object.email = formEmail.value;
  message.classList.add("message__active");
  if (object.name == "" || object.surname == "" || object.email == "") {
    message.classList.add("overlay");
    messageText.innerHTML = `
        <h1>Please fill all required fields!</h1>`;
  } else {
    message.classList.add("overlay");
    messageText.innerHTML = `
        <h1 class="green__color">Confirmation succesfully completed!</h1>`;
    console.log(object);
    setInterval(() => {
      timerInSeconds += 1;
      if (timerInSeconds >= 7) {
        window.location.reload();
      }
    }, 1000);
  }
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
    progressSteps[formStepsNum].classList.remove("progress__bar__step__done");
    progressSteps[formStepsNum].classList.add("progress__bar__step__active");
    progressSteps[formStepsNum + 1].classList.remove(
      "progress__bar__step__active"
    );
    progressSteps[formStepsNum].style.setProperty("--check-primary", "#53d56c");
    icon[formStepsNum].classList.remove("active");
    stageNumber[formStepsNum].classList.remove("none");
    //console.log(progressSteps[0]);
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form__step__active") &&
      formStep.classList.remove("form__step__active");
  });

  formSteps[formStepsNum].classList.add("form__step__active");
}

