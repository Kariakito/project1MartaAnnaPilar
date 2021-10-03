let slidePosition = 0;
let slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

console.log('totalSlide',totalSlides);

document.
getElementById('carousel__button--next')
addEventListener("click", function() {
    moveToNextSlide();
});
document.
getElementById('carousel__button--prev')
addEventListener("click", function() {
    moveToPrevSlide();
})

function updateSlidePosition(){
    console.log("updateSlidePosition");
    //console.log('slides',slides);
    console.log('slidePosition',slidePosition);
 
    for (let i=0;i<=totalSlides-1;i++) {
        console.log("i=",i);
        console.log('Slide before',slides[i]);
        console.log('Before',slides[i].classList);

        slides[i].classList.remove('carousel__item--visible');
        console.log('Between',slides[i].classList);
        
        slides[i].classList.add('carousel__item--hidden');  
        console.log('After',slides[i].classList);

        console.log('Slide after',slides[i]);
        console.log("")

    }

    slides[slidePosition].classList.add('carousel__item--visible');
}


function moveToNextSlide () {
    console.log("moveToNextSlide");

    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();

}

function moveToPrevSlide () {  
   if (slidePosition === 0){
       slidePosition = totalSlides -1;
   } else {
       slidePosition--;
   }

   updateSlidePosition();
}

