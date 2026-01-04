/* ================= TODO FUNCTIONALITY ================= */

document.querySelectorAll(".elem").forEach(elem => {
    elem.addEventListener("click", () => {
        const page = elem.dataset.page;

        if (page === "todo") {
            window.location.href = "./Todo page/index.html";
        }
    });
});

document.querySelector(".back").addEventListener("click", () => {
    window.location.href = "../index.html";
});
