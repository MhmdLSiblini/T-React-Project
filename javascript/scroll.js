document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.scroll');

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
        element.classList.add('animated');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100) && !el.classList.contains('animated')) {
                displayScrollElement(el);
            }
        });
    };

    scrollElements.forEach((el, index) => {
        if (index % 2 !== 0) {
            el.classList.add('odd');
        }
    });

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    handleScrollAnimation();
});
