// This needs fixing to loop infinitly instead of playing over

const testimonials = document.querySelectorAll(".testimonial");
var counter = 0;

testimonials.forEach((testimonial, index) => {
    testimonial.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter = (counter > 0) ? counter - 1 : testimonials.length - 1;
    slideImage();
}

const goNext = () => {
    counter = (counter < testimonials.length - 1) ? counter + 1 : 0;
    slideImage();
}

const slideImage = () => {
    testimonials.forEach((testimonial) => {
        testimonial.style.transform = `translateX(-${counter * 100}%)`;
    });
}
