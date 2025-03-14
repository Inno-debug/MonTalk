//Chatbox
const chatBox = document.querySelector("#result");
//Light and dark images
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
const witchBowl = document.querySelector("#witchBowl");
//Hover containers for images
const sidebar = document.querySelector("#sidebar");
const search = document.querySelector("#search");
const newchat = document.querySelector("#newchat");
const witch_bowl = document.querySelector("#witchbowl");
const explore = document.querySelector("#explore");
const montalk = document.querySelector("#montalk");
const lightingmode = document.querySelector("#lightingmode");
const login = document.querySelector("#login");
let switching = false;
let lswitching;
let hasRunOnce = false;

function switchingIconMode(light, dark) {
  if (light && dark) {
    light.style.display = "unset";
    dark.style.display = "none";
  }
}

// Function to apply the correct theme immediately on page load
function applyTheme() {
  let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (hasRunOnce) {
    isDarkMode = lswitching ? true : false;
  }
  if (isDarkMode || switching) {
    if (hasRunOnce) {
      switching = !switching;
    }
    switchingIconMode(downArrowDark, downArrowLight);
    switchingIconMode(darkMode, lightMode);
    switchingIconMode(exploreDark, exploreLight);
    switchingIconMode(loginDark, loginLight);
    switchingIconMode(searchDark, searchLight);
    switchingIconMode(sideBarDark, sideBarLight);
    switchingIconMode(newChatDark, newChatLight);
    hasRunOnce = true;
  } else {
    switching = !switching;
    switchingIconMode(downArrowLight, downArrowDark);
    switchingIconMode(lightMode, darkMode);
    switchingIconMode(exploreLight, exploreDark);
    switchingIconMode(loginLight, loginDark);
    switchingIconMode(searchLight, searchDark);
    switchingIconMode(sideBarLight, sideBarDark);
    switchingIconMode(newChatLight, newChatDark);
    hasRunOnce = true;
  }
}

// Apply theme on page load
document.addEventListener("DOMContentLoaded", applyTheme);

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyTheme);

// Clicker to change lighting mode
lightingmode.addEventListener("click", () => {
  lswitching = false;
  applyTheme();
});
// Fixing chat box on load
document.addEventListener("DOMContentLoaded", function () {
  chatBox.value = "";
});
