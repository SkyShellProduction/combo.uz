const singleImageItems = [...document.querySelectorAll(".single__left-item")];
const singleImage = document.querySelector(".single__left-show img");
if (singleImage && singleImageItems) {
    singleImageItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            console.log('sdsd');
            const img = item.querySelector("img");
            singleImage.src = img.src;
        })
    })
}