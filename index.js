let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saver = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saver += count
    saveEl.textContent = "Total Swings: " + saver

}

function reset() {
    count = 0
    countEl.textContent = count
}
