// javascript simple slider source code

// variables
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let sectionindex = 0;

// prevBtn
prevBtn.addEventListener("click", function(){
    sectionindex = sectionindex > 0 ? sectionindex - 1 : sectionindex;
    slider.style.transform = "translate("+ (sectionindex) * - 25 +"%)"; 
   
});

// nextBtn 
nextBtn.addEventListener("click", function(){
    sectionindex = sectionindex < 3 ? sectionindex + 1 : sectionindex;
    slider.style.transform = "translate("+ (sectionindex) * - 25 +"%)"; 
   
});
