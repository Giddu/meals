const slots = document.querySelectorAll(".meal-slot");
const picker = document.getElementById("meal-picker");
const pickerTitle = document.getElementById("picker-title");
const pickerList = document.getElementById("picker-list");
const randomizeBtn = document.getElementById("randomize-btn");

let activeMealType = null;

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setMeal(slot, name) {
    const display = slot.querySelector(".selected-meal");
    display.textContent = name;
}

function openPicker(mealType) {
    activeMealType = mealType;
    const label = mealType.charAt(0).toUpperCase() + mealType.slice(1);
    pickerTitle.textContent = `Pick ${label}`;

    pickerList.innerHTML = "";
    MEALS[mealType].forEach((meal) => {
        const item = document.createElement("div");
        item.className = "picker-item";
        item.textContent = meal;
        item.addEventListener("click", () => {
            const slot = document.querySelector(
                `.meal-slot[data-meal="${mealType}"]`
            );
            setMeal(slot, meal);
            closePicker();
        });
        pickerList.appendChild(item);
    });

    picker.classList.remove("hidden");
}

function closePicker() {
    picker.classList.add("hidden");
    activeMealType = null;
}

slots.forEach((slot) => {
    slot.addEventListener("click", () => {
        openPicker(slot.dataset.meal);
    });
});

picker.querySelector(".picker-backdrop").addEventListener("click", closePicker);
picker.querySelector(".picker-close").addEventListener("click", closePicker);

randomizeBtn.addEventListener("click", () => {
    slots.forEach((slot) => {
        const mealType = slot.dataset.meal;
        setMeal(slot, pickRandom(MEALS[mealType]));
    });
});
