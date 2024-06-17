const hambarger = document.querySelector(".hambarger");
const closebarbutton = document.querySelector(".closebar");
const sidebarContainer = document.querySelector(".asidebar-main");

function  sidebar() {
    const openSidebar = () => {
        sidebarContainer.classList.add("showsidebar");
    }
    const closeasideSidebar = () => {
        sidebarContainer.classList.remove("showsidebar");
    }
    hambarger.addEventListener("click",openSidebar);
    closebarbutton.addEventListener("click", closeasideSidebar);
};
sidebar();

const navbar = document.querySelector(".nav-bars");
window.addEventListener("scroll",function() {
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerwidth >=992 ? 70 :50;
    if (scrollNumber>=targetNumber){
        navbar.classList.add("sticky-nav");
    }else{
        navbar.classList.remove("sticky-nav");
    }

});



