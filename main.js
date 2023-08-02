let imgBox = document.querySelector(".img-box");
let box = document.querySelectorAll(".box");
document.addEventListener("mousemove",(e) => {
    imgBox.style.top = `${e.y - 125}px`;
    imgBox.style.left = `${e.x - 100}px`;
    
})
box.forEach(function(i){
    i.addEventListener("mouseenter",() => {
        let img = i.getAttribute("data-image");
        let w = i.getAttribute("data-width");
        let h = i.getAttribute("data-height");
        imgBox.style.backgroundImage = `url("${img}")`;
        imgBox.style.height = `${h}px`;
        imgBox.style.width = `${w}px`;
    })
})
