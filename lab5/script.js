
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".slider img")

const totalImage = images.length;

let index = 0;

function showSlider(i){
    index = (i + totalImage) % totalImage;
    slider.style.transform = `translateX(${-index * 100 }%)`
}

document.getElementById("nextBtn").addEventListener("click" , ()=>{
    showSlider(index+1)
})

document.getElementById("prevBtn").addEventListener("click", ()=>{
    showSlider(index-1)
})


setInterval(() => {
    showSlider(index + 1)
}, 3000);
console.log("asfoa")