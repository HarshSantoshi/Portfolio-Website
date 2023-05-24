// Handling the active link
let section = document.querySelectorAll('section');
let link = document.querySelectorAll('header nav ul li a');
let section1 = document.getElementById('home');
window.onscroll = ()=>{
    section.forEach(sect=>{
        let top = window.scrollY;
        let offset = sect.offsetTop-60;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if(top>=offset && top<offset+height){
            link.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
        else if(top<section1.offsetTop){
            link.forEach(links=>{
                links.classList.remove('active');
               
            })
        }
    })
}


// Scroll reveal
ScrollReveal({
    reset:true,
    distance:"100px",
    duration:1000,
    delay:100
});
ScrollReveal().reveal('.left-banner>div , .section-heading ,.skill-img' , {origin:'top'})
ScrollReveal().reveal('.right-banner , .about-content ,.timeline , .project-container '  , {origin:'bottom'})
ScrollReveal().reveal('.btn-box , .contact-left ,.skill-content'  , {origin:'left'})
ScrollReveal().reveal('.contact-right , .skill-img ,.about-image'  , {origin:'right'})

//Setting bar of the skill section
let element = document.getElementsByClassName("bar")
for (let i =0 ;i<element.length ;i++){
    let size = element[i].innerHTML;
    element[i].style.width = size + "%";
    element[i].innerHTML ="";
}
