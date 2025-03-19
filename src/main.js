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
const sideBarLight2 = document.querySelector("#sidebarlight2");
const sideBarDark2 = document.querySelector("#sidebardark2");
const witchBowl = document.querySelector("#witchBowl");
//Light dark mode background
const side_Bar = document.querySelector("#side_Bar");
const main_Area = document.querySelector("#main_Area");
//Hover containers for images
const sidebar = document.querySelector("#sidebar");
const sidebar2 = document.querySelector("#sidebar2");
const search = document.querySelector("#search");
const newchat = document.querySelector("#newchat");
const witch_bowl = document.querySelector("#witchbowl");
const explore = document.querySelector("#explore");
const montalk = document.querySelector("#montalk");
const lightingmode = document.querySelector("#lightingmode");
const login = document.querySelector("#login");
const help = document.querySelector("#help");
//navMainSection
const navMain = document.querySelector("#navMain");
const navLogin = document.querySelector("#loginContainer");
//Matching media rule
const smallSize = matchMedia("(max-width: 780px)");
const mediumSize = matchMedia("(min-width: 780px)");



// Add CSS rules for the placeholder color
let style = document.createElement("style");
let style1 = document.createElement("style");
style.innerHTML = `
  #result::placeholder {
    color: var(--tw-color-dark-mainText);
  }
    #result:focus {
    caret-color: var(--tw-color-dark-mainText);
  }
    #result{
    color: var(--tw-color-dark-mainText);
    }
`;
style1.innerHTML = `
  #result::placeholder {
    color: var(--tw-color-light-mainText);
  }
    #result:focus {
    caret-color: var(--tw-color-light-mainText);
  }
     #result{
    color: var(--tw-color-light-mainText);
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

//Changing Images

function switchingIconMode(light, dark) {
  if (light && dark) {
    light.style.display = "unset";
    dark.style.display = "none";
  }
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
    switchingIconMode(sideBarDark2, sideBarLight2);
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
    hoverMode(sidebar2, darkmodeAccentColor);
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
    switchingIconMode(sideBarLight2, sideBarDark2);
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

    if (document.head.contains(style)) {
      document.head.removeChild(style);
    }
    document.head.appendChild(style1);
    //Hover
    hoverMode(montalk, lightmodeAccentColor);
    hoverMode(sidebar, lightmodeAccentColor);
    hoverMode(sidebar2, lightmodeAccentColor);
    hoverMode(search, lightmodeAccentColor);
    hoverMode(newchat, lightmodeAccentColor);
    hoverMode(witch_bowl, lightmodeAccentColor);
    hoverMode(explore, lightmodeAccentColor);
    hoverMode(lightingmode, lightmodeAccentColor);
    hoverMode(login, lightmodeAccentColor);
    hasRunOnce = true;
  }
}

//Media quaaries settings
let sidebarActive = true;
let innerState = false;
let outerState = false;
let innerToOuter = false;

function changingSizes (event,event1){
    //Changing screen sizes to smaller
    event1.addEventListener("change", ()=>{
        if (event1.matches){
          if(innerToOuter){
            side_Bar.style.display = "flex";
          navLogin.style.transform = "translateX(25vw)";
          main_Area.style.paddingLeft = "260px";
        }
          else{
            side_Bar.style.display = "flex";
          navLogin.style.transform = "translateX(0vw)";
          main_Area.style.paddingLeft = "260px";
          }
          }
        else{
            if (innerState){
              side_Bar.style.display = "flex";
              main_Area.style.paddingLeft = "0px";
              sidebar2.style.display = "none";
              navMain.style.display = "space-between";
              navLogin.style.transform = "translateX(-10vw)";
              innerToOuter = false;
              innerState = false;
            }
            else if (outerState){
              side_Bar.style.display = "flex";
              main_Area.style.paddingLeft = "0px";
              sidebar2.style.display = "none";
              navMain.style.display = "space-between";
              navLogin.style.transform = "translateX(30vw)";
              outerState = false;
              innerToOuter = true;
             
            }
            else{
              side_Bar.style.display = "flex";
           main_Area.style.paddingLeft = "0px";
           sidebar2.style.display = "none";
           navMain.style.display = "space-between";
           navLogin.style.transform = "translateX(30vw)";
           
            }
          }
    }
      
    )
    
    //Artifical state
    sidebar.addEventListener("click", () => {
      //Small
      if(event.matches){
      sidebarActive = false;
      const On = "0px";
      const Off = "0px";
      navLogin.style.transform = "translateX(0)";
      innerState = false;
        outerState = true;
      UpdatePadding(On, Off);}
      //Large
      else if(event1.matches){
        sidebarActive = false;
        const On = "0px";
        const Off = "0px";
        UpdatePadding(On, Off);
        navLogin.style.transform = "translateX(13vw)";
        sidebar2.style.transform = "translateX(-6vw)";
        innerState = false;
        outerState = true;
      }})
    sidebar2.addEventListener("click", () => {
      //Small
      if(event.matches){
      sidebarActive = true;
      outerState = false;
        innerState = true;
      const On = "0px";
      const Off = "0px";
      navLogin.style.transform = "translateX(-10vw)";
      UpdatePadding(On, Off);}
      //Large
      else if(event1.matches){
        navLogin.style.transform = "translateX(0)";
        sidebar2.style.transform = "translateX(0)";
        outerState = false;
        innerState = true;
      sidebarActive = true;
      const On = "260px";
      const Off = "0px";
      UpdatePadding(On, Off);}})
  }

  //Updating Padding

function UpdatePadding(sideBarOn, sideBarOff) {
  if(sidebarActive){
    main_Area.style.paddingLeft = sideBarOn; 
  }
  else{
    main_Area.style.paddingLeft = sideBarOff;
  }
}

//Sidebar clicker
sidebar.addEventListener("click", () => {
  side_Bar.style.display = "none";
  sidebar2.style.display = "flex";
  navMain.style.display = "grid";
  
});
sidebar2.addEventListener("click", () => {
  side_Bar.style.display = "flex";
  navMain.style.display = "flex";
  sidebar2.style.display = "none";
  navMain.style.justifyContent = "space-between";
  
});

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

//Adding mediaquery event listiners
changingSizes(smallSize, mediumSize);