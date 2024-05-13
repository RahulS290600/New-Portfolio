const text="Rahul S";
const speed=100;
 
let i=0;
function nameAnimation(){
  if(i<text.length){
    document.getElementById("animatedText").textContent+=text.charAt(i);
    i++;
    setTimeout(nameAnimation,speed);
  }
}
window.onload=function(){
    nameAnimation();
};

let darkTheme = true; // Initially, the dark theme is applied

function toggleTheme() {
    const darkThemeLink = document.getElementById('dark-theme');
    const lightThemeLink = document.getElementById('light-theme');
    
    if (darkTheme) {
        // Switch to light theme
        darkThemeLink.disabled = true; // Disable dark theme
        lightThemeLink.disabled = false; // Enable light theme
    } else {
        // Switch back to dark theme
        darkThemeLink.disabled = false; // Enable dark theme
        lightThemeLink.disabled = true; // Disable light theme
    }
    
    darkTheme = !darkTheme; // Toggle the theme flag
}