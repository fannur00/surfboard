;(function () {
    const slider = document.querySelector('.products');
    const itemsCount = $('.product-item').length;
    const arrows = $('.product-slider__arrows');
    const arrowLeft = $('.product-slider__arrow--left');
    const arrowRight = $('.product-slider__arrow--right');

    let startIndex = 0;
    const width = document.querySelector('.product-item').clientWidth;


    arrowLeft.on('click', function(e){
     e.preventDefault();
          
         if(startIndex > 0){
              startIndex--;
         } else {
              startIndex = itemsCount -1;
          }
           
         slider.style.left = "-" + startIndex * width + "px";   
    });

    arrowRight.on('click', function(e){
     e.preventDefault();
     
     if(startIndex !== itemsCount - 1){
         startIndex++;
     } else{
         startIndex=0;
     }

         slider.style.left = "-" + startIndex * width + "px";
    });
})();