/* ================= PAGE NAVIGATION ================= */
const elems = document.querySelectorAll(".elem");
const pages = document.querySelectorAll(".fullElem");
const backBtns = document.querySelectorAll(".back");

elems.forEach(elem => {
  elem.addEventListener("click", () => {
    const page = elem.dataset.page;
    document.querySelector(`.${page}-page`).classList.add("active");
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    pages.forEach(page => page.classList.remove("active"));
  });
});

/* ================= TODO FUNCTIONALITY ================= */
const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const dateInput = document.getElementById("date");
const addBtn = document.getElementById("addTask");
const clearBtn = document.getElementById("clearTask");
const taskContainer = document.querySelector(".allTask");
const emptyMsg = document.querySelector(".empty");

/* ---------- EMPTY STATE FUNCTION ---------- */
function toggleEmptyState() {
  const tasks = document.querySelectorAll(".task");
  emptyMsg.style.display = tasks.length === 0 ? "block" : "none";
}

/* Call once when page loads */
toggleEmptyState();

/* ---------- ADD TASK ---------- */
addBtn.addEventListener("click", () => {
  if (!titleInput.value.trim()) {
    alert("Task title is required!");
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = `
    <h4>${titleInput.value}</h4>
    <p>${descInput.value}</p>
    <span>Due: ${dateInput.value || "No date"}</span>
    <br />
    <button>Delete</button>
  `;

  /* Delete task */
  task.querySelector("button").addEventListener("click", () => {
    task.remove();
    toggleEmptyState();
  });

  taskContainer.appendChild(task);
  toggleEmptyState();
  clearInputs();
});

/* ---------- CLEAR INPUTS ---------- */
clearBtn.addEventListener("click", clearInputs);

function clearInputs() {
  titleInput.value = "";
  descInput.value = "";
  dateInput.value = "";
}
