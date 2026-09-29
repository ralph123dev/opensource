const img = document.querySelector("#img");
const current = document.querySelector("#current");
const dots = document.querySelectorAll(".dot");

let count = 1;
const total = 5;

function updateSlider(){
    img.style.opacity = "0";

    setTimeout(()=>{
        img.src = `images/${count}.jpg`;
        img.style.opacity = "1";
    }, 200);

    current.innerText = String(count).padStart(2, "0");

    dots.forEach((dots, index)=>{
        dots.classList.toggle("active", index === count -1);
    });
}

function rightSlide(){
    count++;

    if(count > total){
        count = 1
    }

    updateSlider();
}

function leftSlide(){
    count--;

    if(count < 1){
        count = total;
    }

    updateSlider();

}