const fitlersBtn = document.querySelector(".goods-filters__toggle");
const fitlersItems = document.querySelector(".goods-filters__left");

if (fitlersBtn && fitlersItems) {
    fitlersBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('asdsad');
        const bool = fitlersBtn.classList.contains("active");
        fitlersBtn.classList[bool ? "remove" : "add"]("active");
        fitlersItems.classList[bool ? "remove" : "add"]("active");
    })
}