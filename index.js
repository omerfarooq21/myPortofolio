console.log("Script running.....");

//Accessing variables

const navigation=document.querySelector('.navigationSection');
const ham=document.querySelector('.hamBurger');

const cross=document.querySelector('.cross');
const sidebar=document.querySelector('.sidebar')



navigation.addEventListener('click',()=>{
sidebar.classList.toggle('sidebarGo');

if(sidebar.classList.contains('sidebarGo')){
    setTimeout(()=>{

        ham.style.display='block';
    },350)
    cross.style.display='none';

}
else{
    ham.style.display='none';
    setTimeout(()=>{
        cross.style.display='block';

    },400)
}

})