//render될 때
const currentServer = document.getElementsByClassName("currentServer")[0];
const singupEndPoint = document.getElementsByClassName("signupEndPoint")[0];
const loginEndPoint = document.getElementsByClassName("loginEndPoint")[0];
const signupApi = document.getElementsByClassName("signupApi")[0];
const loginApi = document.getElementsByClassName("loginApi")[0];

function init() {
  const server = currentServer.innerText;
  const signupEndPointText = singupEndPoint.innerText;
  const loginEndPointText = loginEndPoint.innerText;
  signupApi.innerText = server + signupEndPointText;
  loginApi.innerText = server + loginEndPointText;
}

init();

// 서버, Endpoint 바꾸는 로직
const changeServerInput = document.getElementsByClassName("changeUrlInput")[0];
const signupEndpointInput = document.getElementsByClassName(
  "signupEndpointInput"
)[0];
const loginEndpointInput = document.getElementsByClassName(
  "loginEndpointInput"
)[0];
const changeServerBtn = document.getElementsByClassName("changeUrlBtn")[0];
const changeSignupEndpointBtn = document.getElementsByClassName(
  "changeSignupEndpointBtn"
)[0];
const changeLoginEndpointBtn = document.getElementsByClassName(
  "changeLoginEndpointBtn"
)[0];

changeServerBtn.addEventListener("click", () => {
  const inputValue = changeServerInput.value;
  currentServer.innerHTML = inputValue;
  changeServerInput.value = "";
  init();
});

changeSignupEndpointBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const server = currentServer.innerText;
  const inputValue = signupEndpointInput.value;
  singupEndPoint.innerText = inputValue;
  signupApi.innerText = server + inputValue;
  signupEndpointInput.value = "";
});

changeLoginEndpointBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const server = currentServer.innerText;
  const inputValue = loginEndpointInput.value;
  loginEndPoint.innerText = inputValue;
  loginApi.innerText = server + inputValue;
  loginEndpointInput.value = "";
});

// fetch할 때 key 바꾸는 로직
const signupEmailKeyInput = document.getElementsByClassName(
  "signupEmailKeyInput"
)[0];
const signupEmailKey = document.getElementsByClassName("signupEmailKey")[0];
const signupEmailKeyBtn = document.getElementsByClassName(
  "signupEmailKeyBtn"
)[0];

const signupPwKeyInput = document.getElementsByClassName("signupPwKeyInput")[0];
const signupPwKey = document.getElementsByClassName("signupPwKey")[0];
const signupPwKeyBtn = document.getElementsByClassName("signupPwKeyBtn")[0];

const loginEmailKeyInput = document.getElementsByClassName(
  "loginEmailKeyInput"
)[0];
const loginEmailKey = document.getElementsByClassName("loginEmailKey")[0];
const loginEmailKeyBtn = document.getElementsByClassName("loginEmailKeyBtn")[0];

const loginPwKeyInput = document.getElementsByClassName("loginPwKeyInput")[0];
const loginPwKey = document.getElementsByClassName("loginPwKey")[0];
const loginPwKeyBtn = document.getElementsByClassName("loginPwKeyBtn")[0];

signupEmailKeyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = signupEmailKeyInput.value;
  signupEmailKey.innerText = inputValue;
  signupEmailKeyInput.value = "";
});
signupPwKeyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = signupPwKeyInput.value;
  signupPwKey.innerText = inputValue;
  signupPwKeyInput.value = "";
});
loginEmailKeyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = loginEmailKeyInput.value;
  loginEmailKey.innerText = inputValue;
  loginEmailKeyInput.value = "";
});
loginPwKeyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = loginPwKeyInput.value;
  loginPwKey.innerText = inputValue;
  loginPwKeyInput.value = "";
});
//회원가입, 로그인
const signupEmailInput = document.getElementsByClassName("signupEmailInput")[0];
const signupPwInput = document.getElementsByClassName("signupPwInput")[0];
const loginEmailInput = document.getElementsByClassName("loginEmailInput")[0];
const loginPwInput = document.getElementsByClassName("loginPwInput")[0];
const signupBtn = document.getElementsByClassName("signupBtn")[0];
const loginBtn = document.getElementsByClassName("loginBtn")[0];

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const obj = {};
  const emailKey = signupEmailKey.innerText;
  const pwKey = signupPwKey.innerText;
  obj[emailKey] = signupEmailInput.value;
  obj[pwKey] = signupPwInput.value;
  console.log(obj);
  fetch(signupApi.innerText, {
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => console.log("결과 :", res))
    .catch((e) => console.log("에러: ", e));
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const obj = {};
  const emailKey = loginEmailKey.innerText;
  const pwKey = loginPwKey.innerText;
  obj[emailKey] = loginEmailInput.value;
  obj[pwKey] = loginPwInput.value;
  fetch(loginApi.innerText, {
    method: "GET",
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => console.log("결과 :", res))
    .catch((e) => console.log("에러: ", e));
});
