wow =new WOW(
    {

    }
)
wow.init(); 

// loading page
window.onload=function(){
    document.querySelector(".loading").remove();
}

// links
let navbar=document.querySelector(".navbar");
let links=document.querySelectorAll(".navbar-nav .nav-link");
let home=document.querySelector(".landing");
let about=document.querySelector(".about");
let services=document.querySelector(".services");
let portfolio=document.querySelector(".portfolio");
let blog=document.querySelector(".blog");
let contact=document.querySelector(".contact");

window.addEventListener("scroll",()=>{
    if(window.scrollY > home.offsetTop - (window.innerHeight / 4 )){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[0].classList.add("active");
        })
    }   
    if(window.scrollY > about.offsetTop - (window.innerHeight / 2 )){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[1].classList.add("active");
        })
    }   
    if(window.scrollY > services.offsetTop - (window.innerHeight /2 )){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[2].classList.add("active");
        })
    }   
    if(window.scrollY > portfolio.offsetTop - (window.innerHeight /2 )){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[3].classList.add("active");
        })
    }   
    if(window.scrollY > blog.offsetTop - (window.innerHeight / 2)){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[4].classList.add("active");
        })
    }   
    if(window.scrollY > contact.offsetTop - (window.innerHeight /2 )){
        links.forEach(link => {
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
            links[5].classList.add("active");
        })
    }   
})
