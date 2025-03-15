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
//Light dark mode background
const side_Bar = document.querySelector("#side_Bar");
const main_Area = document.querySelector("#main_Area");
//Hover containers for images
const sidebar = document.querySelector("#sidebar");
const search = document.querySelector("#search");
const newchat = document.querySelector("#newchat");
const witch_bowl = document.querySelector("#witchbowl");
const explore = document.querySelector("#explore");
const montalk = document.querySelector("#montalk");
const lightingmode = document.querySelector("#lightingmode");
const login = document.querySelector("#login");
const help = document.querySelector("#help");

function switchingIconMode(light, dark) {
  if (light && dark) {
    light.style.display = "unset";
    dark.style.display = "none";
  }
}

// Create a new style element
let style = document.createElement("style");
let style1 = document.createElement("style1");

// Add CSS rules for the placeholder color
style.innerHTML = `
  #result::placeholder {
    color: var(--tw-color-dark-mainText);
  }
    #result:focus {
    caret-color: var(--tw-color-dark-mainText);
  }
`;
style1.innerHTML = `
  #result::placeholder {
    color: var(--tw-color-light-mainText);
  }
    #result:focus {
    caret-color: var(--tw-color-light-mainText);
  }
`;

//Hover state

const darkmodeAccentColor = "var(--tw-color-dark-accent)";
const lightmodeAccentColor = "var(--tw-color-light-accent)";

function hoverMode(hover, state) {
  hover.addEventListener("mouseenter", () => {
    hover.style.backgroundColor = state;
  });
  hover.addEventListener("mouseleave", () => {
    hover.style.backgroundColor = "";
  });
}

// Function to apply the correct theme immediately on page load
let switching = false;
let hasRunOnce = false;
function applyTheme() {
  let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (hasRunOnce) {
    isDarkMode = false;
  }
  //Darkmode
  if (isDarkMode || switching) {
    if (hasRunOnce) {
      switching = !switching;
    }
    //Images
    switchingIconMode(downArrowDark, downArrowLight);
    switchingIconMode(darkMode, lightMode);
    switchingIconMode(exploreDark, exploreLight);
    switchingIconMode(loginDark, loginLight);
    switchingIconMode(searchDark, searchLight);
    switchingIconMode(sideBarDark, sideBarLight);
    switchingIconMode(newChatDark, newChatLight);
    //Background color
    side_Bar.style.backgroundColor = "var(--tw-color-dark-side)";
    main_Area.style.backgroundColor = "var(--tw-color-dark-main)";
    chatBox.style.backgroundColor = "var(--tw-color-dark-accent)";
    //Text color
    montalk.style.color = "var(--tw-color-dark-mainText)";
    witch_bowl.style.color = "var(--tw-color-dark-mainText)";
    explore.style.color = "var(--tw-color-dark-mainText)";
    help.style.color = "var(--tw-color-dark-mainText)";

    if (document.head.contains(style1)) {
      document.head.removeChild(style1);
    }
    document.head.appendChild(style);
    //Hover
    hoverMode(montalk, darkmodeAccentColor);
    hoverMode(sidebar, darkmodeAccentColor);
    hoverMode(search, darkmodeAccentColor);
    hoverMode(newchat, darkmodeAccentColor);
    hoverMode(witch_bowl, darkmodeAccentColor);
    hoverMode(explore, darkmodeAccentColor);
    hoverMode(lightingmode, darkmodeAccentColor);
    hoverMode(login, darkmodeAccentColor);
    hasRunOnce = true;
    //Light mode
  } else {
    switching = !switching;
    //Images
    switchingIconMode(downArrowLight, downArrowDark);
    switchingIconMode(lightMode, darkMode);
    switchingIconMode(exploreLight, exploreDark);
    switchingIconMode(loginLight, loginDark);
    switchingIconMode(searchLight, searchDark);
    switchingIconMode(sideBarLight, sideBarDark);
    switchingIconMode(newChatLight, newChatDark);
    //Background color
    side_Bar.style.backgroundColor = "var(--tw-color-light-side)";
    main_Area.style.backgroundColor = "var(--tw-color-light-main)";
    chatBox.style.backgroundColor = "var(--tw-color-light-accent)";
    //Text color
    montalk.style.color = "var(--tw-color-light-mainText)";
    witch_bowl.style.color = "var(--tw-color-light-mainText)";
    explore.style.color = "var(--tw-color-light-mainText)";
    help.style.color = "var(--tw-color-light-mainText)";
    chatBox.style.color = "var(--tw-color-light-mainText)";

    if (document.head.contains(style)) {
      document.head.removeChild(style);
    }
    document.head.appendChild(style1);
    //Hover
    hoverMode(montalk, lightmodeAccentColor);
    hoverMode(sidebar, lightmodeAccentColor);
    hoverMode(search, lightmodeAccentColor);
    hoverMode(newchat, lightmodeAccentColor);
    hoverMode(witch_bowl, lightmodeAccentColor);
    hoverMode(explore, lightmodeAccentColor);
    hoverMode(lightingmode, lightmodeAccentColor);
    hoverMode(login, lightmodeAccentColor);
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
  applyTheme();
});
// Fixing chat box on load
document.addEventListener("DOMContentLoaded", function () {
  chatBox.value = "";
});
