// const drop = document.querySelector('.toggle');
// const menu = document.querySelector('.dropdown_menu');
// menu.classList.remove('display');
// drop.addEventListener('click', function(){
//     menu.classList.toggle('display');
// });

let grids = document.querySelectorAll('div');
window.onscroll=()=>{
    grids.forEach(sec=>{
        let top=window.scrollY+400;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight+100;

        if(top >= offset && top < offset+height+100){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
}