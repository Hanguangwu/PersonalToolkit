document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const eyeCareToggleButton = document.getElementById("eye-care-toggle");

    let isDarkMode = false;
    let isEyeCareMode = false;

    themeToggleButton.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.classList.remove("dark-mode");
            themeToggleButton.textContent = "切换为黑暗模式";
            isDarkMode = false;
        } else {
            document.body.classList.add("dark-mode");
            themeToggleButton.textContent = "切换为明亮模式";
            isDarkMode = true;
            isEyeCareMode = false;
            document.body.classList.remove("eye-care-mode");
        }
    });

    eyeCareToggleButton.addEventListener("click", function () {
        if (isEyeCareMode) {
            document.body.classList.remove("eye-care-mode");
            isEyeCareMode = false;
        } else {
            document.body.classList.add("eye-care-mode");
            isEyeCareMode = true;
            isDarkMode = false;
            document.body.classList.remove("dark-mode");
            themeToggleButton.textContent = "切换为黑暗模式";
        }
    });

    document.getElementById("scroll-top").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});