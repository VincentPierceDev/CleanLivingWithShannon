const fadeElements = document.querySelectorAll('.fade-in-page-effect');
const slideElements = document.querySelectorAll('.slide-up-page-effect');
console.log("script running");

const fadeOptions = {
    threshold: .5
};

const onScrollAppear = new IntersectionObserver(function(entries, onScrollAppear){

    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            onScrollAppear.unobserve(entry.target);
        }
    })

}, fadeOptions);

fadeElements.forEach(fadeElement => {
    onScrollAppear.observe(fadeElement);
});

slideElements.forEach(slideElement => {
    onScrollAppear.observe(slideElement);
})


export default onScrollAppear;