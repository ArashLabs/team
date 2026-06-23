document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    const btn = document.createElement("button");
    btn.className = "theme-toggle";

    btn.innerHTML =
        document.documentElement.getAttribute("data-theme") === "dark"
        ? "☀️"
        : "🌙";

    btn.addEventListener("click", () => {

        const isDark =
            document.documentElement.getAttribute("data-theme") === "dark";

        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
            btn.innerHTML = "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            btn.innerHTML = "☀️";
        }
    });

    document.body.appendChild(btn);
});