var imgList =Array.from(document.getElementsByClassName('img-item'));
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');
var closeItem = document.getElementById('close');
var prevImg = document.getElementById('prev');
var nextImg = document.getElementById('next');
var currentIdex = 0 ;

for(var i = 0 ; i<imgList.length ; i++)
{

    imgList[i].addEventListener('click',function(e){
    currentIdex = imgList.indexOf(e.target); 
    lightboxContainer.classList.replace('d-none' , 'd-flex');
    var imgSrc = e.target.getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
    })
}

function closeSlider(){
    lightboxContainer.classList.replace('d-flex' , 'd-none');
}


function nextSlide()
{
    currentIdex++;
    if(currentIdex == imgList.length)
    {
       currentIdex = 0;
    }
    var imgSrc = imgList[currentIdex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}
function prevSlide()
{
   
    if(currentIdex == 0)
    {
       currentIdex = imgList.length;
    }
    currentIdex--;
    var imgSrc = imgList[currentIdex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextImg.addEventListener('click' , nextSlide);
prevImg.addEventListener('click' , prevSlide);
closeItem.addEventListener('click', closeSlider);


document.addEventListener('keydown' , function(e){
    if(e.key == 'ArrowRight')
    {
        nextSlide(); 
    }
    else if(e.key == 'ArrowLeft')
    {
        prevSlide();
    }
    else if (e.key == 'Escape')
    {
        closeSlider();
    }
})