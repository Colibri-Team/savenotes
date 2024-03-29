const innerLink = document.getElementById("innerLink");
const toTop = document.querySelector(".fa-chevron-up");
const footer = document.querySelector("footer");
const languageBtn = document.getElementById("language");

//Language switcher
const English = {
  CHOOSE_LANGUAGE: "Choose a language:",
  LANGUAGE_IMG: "images/uk.svg",
  LOGIN: "Login",
  ABOUT: "About",
  SAVE_INSTANTLY: "Save your notes instantly.",
  LOGIN_GOOGLE: "Login with Google",
  MULTIDEVICE: "Crossplatform",
  MULTIDEVICE_P_1:
    "SaveNotes web app can be accessed from any device from anywhere.",
  MULTIDEVICE_P_2:
    "Login to access all the saved notes and edit them instantly.",
  EASY: "Easy to use",
  EASY_P_1:
    "Saving notes in our web application is as easy as writing them on paper.",
  EASY_P_2:
    "You will not face any difficulties using it thanks to user-friendly interface.",
  SECURE: "Secure",
  SECURE_P_1:
    "With <i>SaveNotes</i>, do not worry about the security and privacy of your notes and passwords.",
  SECURE_P_2:
    "We do not provide any information to third-party companies and organizations, so no one has access to your notes.",
  FAST: "Fast",
  FAST_P_1:
    "<i>SaveNotes</i> is build using the latest technology based on JavaScript (Node.js).",
  FAST_P_2:
    "It makes our application fast, real-time, scalable and able to work on all modern browsers and devices.",
};
const Russian = {
  LANGUAGE_IMG: "images/russia.svg",
  CHOOSE_LANGUAGE: "Выберите язык:",
  LOGIN: "Войти",
  ABOUT: "Информация",
  SAVE_INSTANTLY: "Сохраняйте свои заметки мгновенно.",
  LOGIN_GOOGLE: "Войти с Google",
  MULTIDEVICE: "Кроссплатформенный",
  MULTIDEVICE_P_1:
    "Доступ к веб-приложению SaveNotes можно получить с любого устройства из любого места.",
  MULTIDEVICE_P_2:
    "Войдите, чтобы получить доступ ко всем сохраненным заметкам и редактировать их мгновенно.",
  EASY: "Легко использовать",
  EASY_P_1:
    "Сохранять заметки в нашем веб-приложении так же просто, как писать на бумаге.",
  EASY_P_2:
    "Благодаря удобному интерфейсу вы не столкнетесь с какими-либо трудностями при использовании.",
  SECURE: "Безопасный",
  SECURE_P_1:
    "С <i>SaveNotes</i>, не беспокойтесь о безопасности и конфиденциальности ваших заметок и паролей.",
  SECURE_P_2:
    "Мы не предоставляем никакой информации сторонним компаниям и организациям, поэтому никто не имеет доступа к вашим заметкам.",
  FAST: "Быстрый",
  FAST_P_1:
    "<i>SaveNotes</i> создан с использованием новейших технологий на основе JavaScript (Node.js).",
  FAST_P_2:
    "Это делает наше приложение быстрым, в реальном времени, масштабируемым и способным работать на всех современных браузерах и устройствах.",
};
const Uzbek = {
  LANGUAGE_IMG: "images/uzbekistan.svg",
  CHOOSE_LANGUAGE: "Tilni tanlang:",
  LOGIN: "Kirish",
  ABOUT: "Ma`lumot",
  SAVE_INSTANTLY: "Qaydlaringizni bir zumda saqlang.",
  LOGIN_GOOGLE: "Google bilan kirish",
  MULTIDEVICE: "Krossplatform",
  MULTIDEVICE_P_1:
    "SaveNotes veb-ilovasiga istalgan qurilmadan istalgan joydan kirish mumkin.",
  MULTIDEVICE_P_2:
    "Saqlangan qaydlarni ko`rish va ularni darhol tahrirlash uchun tizimga kiring.",
  EASY: "Foydalanish oson",
  EASY_P_1:
    "Qaydlarni bizning veb-ilovamizda saqlash qog`ozga yozish kabi oson.",
  EASY_P_2:
    "Foydalanuvchilarga qulay interfeys tufayli siz uni ishlatishda hech qanday qiyinchiliklarga duch kelmaysiz.",
  SECURE: "Havfsiz",
  SECURE_P_1:
    "<i>SaveNotes</i> da qaydlar va parollaringizning xavfsizligi haqida qayg`urmang.",
  SECURE_P_2:
    "Biz uchinchi tomon kompaniyalari va tashkilotlariga hech qanday ma`lumot bermaymiz, shuning uchun sizning qaydlaringizga hech kim kira olmaydi.",
  FAST: "Tez",
  FAST_P_1:
    "<i>SaveNotes</i> eng so`nggi JavaScript-ga asoslangan texnologiyalar (Node.js) yordamida qurilgan.",
  FAST_P_2:
    "Bu bizning dasturimizni tezkor, real vaqtda, kengaytiriladigan va barcha zamonaviy brauzer va qurilmalarda ishlashga qodir qiladi.",
};
let languagePack = English;

//Take a language from localStorage
const storedLanguage = localStorage.getItem("language");
if (storedLanguage) {
  console.log(storedLanguage);
  langSwitcher(storedLanguage);
}
function langSwitcher(language) {
  if (language === "en") {
    languagePack = English;
  } else if (language === "ru") {
    languagePack = Russian;
  } else if (language === "uz") {
    languagePack = Uzbek;
  }

  tranlatePage(language);
}
function tranlatePage(language) {
  languageBtn.alt = language;
  localStorage.setItem("language", language);
  languageBtn.src = languagePack.LANGUAGE_IMG;
  document.querySelector(".language-label").textContent =
    languagePack.CHOOSE_LANGUAGE;
  
  

    document.getElementById("innerLink").textContent = languagePack.ABOUT;
    document.getElementById("productLabel").textContent = languagePack.SAVE_INSTANTLY;
    document.getElementById("loginGoogle").textContent = languagePack.LOGIN_GOOGLE;
    const headings=document.querySelectorAll("h2");
    const paragraphs=document.querySelectorAll('p');
    const links =document.querySelectorAll('.site-navigation');
    headings[0].textContent=languagePack.MULTIDEVICE;
    paragraphs[1].textContent=languagePack.MULTIDEVICE_P_1;
    paragraphs[2].textContent=languagePack.MULTIDEVICE_P_2;
    headings[1].textContent=languagePack.EASY;
    paragraphs[3].textContent=languagePack.EASY_P_1;
    paragraphs[4].textContent=languagePack.EASY_P_2;
    headings[2].textContent=languagePack.SECURE;
    paragraphs[5].innerHTML=languagePack.SECURE_P_1;
    paragraphs[6].textContent=languagePack.SECURE_P_2;
    headings[3].textContent=languagePack.FAST;
    paragraphs[7].innerHTML=languagePack.FAST_P_1;
    paragraphs[8].textContent=languagePack.FAST_P_2;
    links[0].innerHTML=languagePack.LOGIN;
    links[1].innerHTML=languagePack.ABOUT;  

  // document.getElementById("content").placeholder = languagePack.ENTER_NOTE;
  // document.querySelector(".addBtn").textContent = languagePack.ADD_BTN;
  // document.querySelector(".cancelBtn").textContent = languagePack.CANCEL_BTN;
}
document.querySelector(".language-content").addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      langSwitcher(event.target.closest("a").id);
      // alert('langSwitcherTirggered')
    }
});
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  // console.log(scrolled);
  if (scrolled === 0) {
    innerLink.textContent = languagePack.ABOUT;
    innerLink.href = "#about";
  } else if (scrolled > 20) {
    document.querySelector(".to-top").classList.remove("d-none");
    innerLink.textContent = languagePack.LOGIN;
    innerLink.href = "#";
  } else {
    document.querySelector(".to-top").classList.add("d-none");
  }
  document.getElementById("myBar").style.width = scrolled + "%";
  showVisible();
};

//Function to check whether an element is visible
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // top elem edge is visible?
  let topVisible = coords.top > 350 && coords.top < windowHeight;

  // bottom elem edge is visible?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

//Load visible elements
let rows = document.querySelectorAll(".row");
function showVisible() {
  // console.log('rows', rows)
  for (let i = 1; i < rows.length; i++) {
    // if (!realSrc) continue;
    if (isVisible(footer)) {
      toTop.classList.add("text-white");
    } else if (!isVisible(footer)) {
      toTop.classList.remove("text-white");
    }
    if (isVisible(rows[i])) {
      // console.log(rows[i])
      let slideElements = rows[i].getElementsByClassName("slideElement");
      // console.log(slideElements)
      // rows[i].classList.add('bg-danger')
      for (const elem of slideElements) {
        elem.classList.add("to-zero");
      }
    }
  }
}

showVisible();
// window.onscroll = showVisible;

document.querySelector("#mailto").addEventListener("click", () => {
  document.querySelector(".email").classList.add("mail-clicked");
  setTimeout(() => {
    document.querySelector(".email").classList.remove("mail-clicked");
  }, 4000);
  copyToClipboard("mynotes.techsup@gmail.com");
});


// Copies the email variable to clipboard
function copyToClipboard(text) {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", text);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
