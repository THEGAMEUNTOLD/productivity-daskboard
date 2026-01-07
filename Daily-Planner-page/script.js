/* =========================
   ACTIVE NAV LINK
========================= */
function setActiveNavLink() {
    const links = document.querySelectorAll(".navbar__link");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}
setActiveNavLink();

/* =========================
   ELEMENTS
========================= */
const container = document.querySelector('.hours-container');
const currentDateEl = document.querySelector('.current-date');
const clearBtn = document.querySelector('.clear-btn');
const modeToggle = document.querySelector('.theme-toggle');
const modeIcon = modeToggle.querySelector('i');

/* =========================
   DARK / LIGHT MODE
========================= */
const savedMode = localStorage.getItem('mode') || 'light';

if (savedMode === 'dark') {
    document.body.classList.add('dark');
    modeIcon.className = 'ri-sun-fill';
}

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    modeIcon.className = isDark ? 'ri-sun-fill' : 'ri-moon-fill';
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
});

/* =========================
   CURRENT DATE
========================= */
const today = new Date();
currentDateEl.textContent = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

/* =========================
   AUTO CLEAR NEW DAY
========================= */
const todayKey = today.toISOString().split('T')[0];
const savedDay = localStorage.getItem('planner-day');

if (savedDay !== todayKey) {
    for (let i = 0; i < 24; i++) localStorage.removeItem(`hour-${i}`);
    localStorage.setItem('planner-day', todayKey);
}

/* =========================
   CREATE 24 HOURS
========================= */
const currentHour = today.getHours();

for (let i = 0; i < 24; i++) {
    const row = document.createElement('div');
    row.className = 'hour-row';

    const time = document.createElement('div');
    time.className = 'time';
    time.textContent =
        i === 0 ? '12 AM' :
        i < 12 ? `${i} AM` :
        i === 12 ? '12 PM' :
        `${i - 12} PM`;

    const input = document.createElement('input');
    input.className = 'task';
    input.placeholder = 'Add task...';
    input.value = localStorage.getItem(`hour-${i}`) || '';

    if (i < currentHour) input.classList.add('past');
    else if (i === currentHour) input.classList.add('present');
    else input.classList.add('future');

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.innerHTML = '<i class="ri-save-3-fill"></i>';

    saveBtn.addEventListener('click', () => {
        localStorage.setItem(`hour-${i}`, input.value);
    });

    row.append(time, input, saveBtn);
    container.appendChild(row);
}

/* =========================
   CLEAR ALL
========================= */
clearBtn.addEventListener('click', () => {
    if (confirm('Clear all tasks for today?')) {
        for (let i = 0; i < 24; i++) localStorage.removeItem(`hour-${i}`);
        location.reload();
    }
});

/* =========================
   AUTO COLOR UPDATE
========================= */
setInterval(() => {
    const now = new Date().getHours();
    document.querySelectorAll('.task').forEach((task, i) => {
        task.classList.remove('past', 'present', 'future');
        if (i < now) task.classList.add('past');
        else if (i === now) task.classList.add('present');
        else task.classList.add('future');
    });
}, 60000);
