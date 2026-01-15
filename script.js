const themeToggleButton = document.getElementById('change-theme');
const colorGit = document.getElementById('git');
const colorLink = document.getElementById('link');
const btnClose = document.getElementById('btn-close');
const bodyElement = document.body;

// icons

const gitWhite = `<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/github--v1.png" alt="github--v1"/>`
const gitBlack = `<img width="50" height="50" src="https://img.icons8.com/ios/50/github--v1.png" alt="github--v1"/>`
const linkWhite = `<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>`
const linkBlack = ` <img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>`
const iconSun = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#80ED99"><path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.33-46.34 108-109.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM446.67-40v-153.33h66.66V-40h-66.66ZM253.33-660.67l-108-107 47-46.66L300.67-706l-47.34 45.33ZM768-145.33l-108.33-109L705-299.67l110 106-47 48.34ZM40-446.67v-66.66h153.33v66.66H40Zm153 301.34-47.33-47L253-299.67l24.33 22.34L301.67-254 193-145.33ZM480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-66.67q72 0 122.67-50.66Q653.33-408 653.33-480t-50.66-122.67Q552-653.33 480-653.33t-122.67 50.66Q306.67-552 306.67-480t50.66 122.67Q408-306.67 480-306.67ZM480-480Z"/></svg>`;
const iconMoon = `<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="blueviolet"><path d="M582-80q-86.08 0-162.7-32.17-76.63-32.16-134.51-87.27-57.88-55.1-91.34-128.92Q160-402.17 160-485.08q0-83.92 33.5-157.75 33.5-73.84 91.33-129Q342.67-827 419.3-859.17q76.62-32.16 162.7-32.16 49.33 0 93.67 11.33Q720-868.67 760-848.67q-90.33 60.34-145.83 154.5-55.5 94.17-55.5 208.5 0 114.34 55.5 208.84T760-122.67q-40 20-84.33 31.34Q631.33-80 582-80Zm0-66.67h24.61q11.72 0 20.06-1.33-63-71.33-98.84-157.17Q492-391 492-485.33q0-94.34 35.83-180.17 35.84-85.83 98.84-157.83-8.34-1.34-20.06-1.34H582q-146.33 0-250.83 99.14-104.5 99.15-104.5 240.17 0 141.03 104.5 239.86 104.5 98.83 250.83 98.83ZM492-486Z"/></svg>`;


function toggleTheme() {
    
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme', 'dark-theme');
        colorGit.innerHTML = gitWhite
        colorLink.innerHTML = linkWhite
        themeToggleButton.innerHTML = iconSun; 
       
        btnClose.classList.replace('btn-close-white','btn-close-dark');
    } else {
        bodyElement.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.innerHTML = iconMoon;
         colorGit.innerHTML = gitBlack
         colorLink.innerHTML = linkBlack
         btnClose.classList.replace('btn-close-white','btn-close-white');
         
    }
}

themeToggleButton.addEventListener('click', toggleTheme)

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-theme');
        themeToggleButton.innerHTML = iconSun; 
        colorGit.innerHTML = gitWhite
        colorLink.innerHTML = linkWhite
    } else {
        bodyElement.classList.add('light-theme');
        themeToggleButton.innerHTML = iconMoon;
        colorGit.innerHTML = gitBlack
        colorLink.innerHTML = linkBlack
    }
}

loadTheme();
