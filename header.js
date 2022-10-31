const header = document.getElementById("header");

header.innerHTML = `
<img src="./assets/logo.png" class="logo" />
<div class="left_header">
   <ul id="nav" class="header_buttons">
    <button class="main_button"onclick="goToMain()">الصفحة الرئيسية</button>
    <button class="main_button"  onclick="goToServices()"}>خدماتنا</button>
    <button class="main_button"  onclick="goToTarget()"}>فلسفتنا</button>
    </ul>
    <div class="burger_menu" id="menu">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    </div>
    
    </div>
`;

const goToMain = () => {
  location.replace("./index.html");
};

const goToTarget = () => {
  location.replace("./Target.html");
};
const goToServices = () => {
  location.replace("./services.html");
};
