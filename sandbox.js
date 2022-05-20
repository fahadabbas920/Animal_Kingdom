const closeFace = document.querySelector('.close');
const openFace = document.querySelector('.open');

//event
closeFace.addEventListener('click',()=>{
        openFace.classList.add('active');
        closeFace.classList.remove('active');

})

openFace.addEventListener('click',()=>{
        closeFace.classList.add('active');
        openFace.classList.remove('active');

})