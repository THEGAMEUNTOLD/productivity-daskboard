/* ================= TODO FUNCTIONALITY ================= */

document.querySelectorAll(".elem").forEach(elem => {
    elem.addEventListener("click", () => {
        const page = elem.dataset.page;

        const routes = {
            todo: "./Todo page/index.html",
            planner: "./Daily-Planner-page/index.html",
            motivation: "./Motivation-page/index.html",
            pomodoro: "./Pomodoro-page/index.html",
            goals: "./Daily-Goals-page/index.html"
        };

        if (routes[page]) {
            window.location.href = routes[page];
        }
    });
});

document.querySelector(".back").addEventListener("click", () => {
    window.location.href = "../index.html";
});



