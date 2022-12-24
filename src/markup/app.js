///////////////
// DARK MODE
//////////////

// Icons vars
const darkmodeIcon = document.querySelector(".dark-mode");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        return;
    }
};

// Function to manually switch the themes
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
};

// Call theme switch on clicking button
darkmodeIcon.addEventListener("click", () => {
    themeSwitch();
});

// Invoke theme check on initial load
themeCheck();


///////////////
// ACCORDION
//////////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        if (document.documentElement.classList.contains("dark")) {
            this.classList.toggle("active-dark");
        } else {
            this.classList.toggle("active");
        }

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        };

        /* Animate the accordion */
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}