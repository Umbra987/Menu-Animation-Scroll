window.addEventListener("scroll", function(){  
    document.querySelector("header").classList.toggle("abajo",window.scrollY>0);
})


