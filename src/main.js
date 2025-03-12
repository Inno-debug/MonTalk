const chatBox = document.querySelector("#result");
const lightMode = document.querySelector("#lightmode");
const darkMode = document.querySelector("#darkmode");
const downArrowLight = document.querySelector("#downarrowlight");
const downArrowDark = document.querySelector("#downarrowdark");
const exploreLight = document.querySelector("#explorelight");
const exploreDark = document.querySelector("#exploredark");
const loginLight = document.querySelector("#loginlight");
const loginDark = document.querySelector("#logindark");
const newChatLight = document.querySelector("#newchatlight");
const newChatDark = document.querySelector("#newchatdark");
const searchLight = document.querySelector("#searchlight");
const searchDark = document.querySelector("#searchdark");
const sideBarLight = document.querySelector("#sidebarlight");
const sideBarDark = document.querySelector("#sidebardark");
const witchBowl = document.querySelector("#witchbowl");

//Dark Mode

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      switchingIconMode(downArrowDark, downArrowLight);
      switchingIconMode(darkMode, lightMode);
      switchingIconMode(exploreDark, exploreLight);
      switchingIconMode(loginDark, loginLight);
      switchingIconMode(searchDark, searchLight);
      switchingIconMode(sideBarDark, sideBarLight);
      switchingIconMode(newChatDark, newChatLight);
    } else {
      switchingIconMode(downArrowLight, downArrowDark);
      switchingIconMode(lightMode, darkMode);
      switchingIconMode(exploreLight, exploreDark);
      switchingIconMode(loginLight, loginDark);
      switchingIconMode(searchLight, searchDark);
      switchingIconMode(sideBarLight, sideBarDark);
      switchingIconMode(newChatLight, newChatDark);
    }
  });

function switchingIconMode(light, dark) {
  light.style.display = "unset";
  dark.style.display = "none";
}

//Fixing chat box

document.addEventListener("DOMContentLoaded", function () {
  chatBox.value = "";
});
