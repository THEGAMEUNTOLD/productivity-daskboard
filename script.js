function openfeature(){
const allElems = document.querySelectorAll(".elem");
const allFullElems = document.querySelectorAll(".fullElem");
const allFullElemsBackBtn = document.querySelectorAll(".fullElem .back");


allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
        allFullElems[elem.id].style.display = "block";
    })
})

allFullElemsBackBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        allFullElems[btn.id].style.display = "none";
    })  
});
}
openfeature();