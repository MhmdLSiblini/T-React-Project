document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {
        const preview = item.querySelector('.accordion__preview');
        const input = item.querySelector('input[type="radio"]');
        const content = item.querySelector('.accordion__item--content');

        const toggleAccordion = () => {
            if (input.checked) {
                input.checked = false;
            } else {
                accordionItems.forEach(item => {
                    item.querySelector('input[type="radio"]').checked = false;
                });
                input.checked = true;
            }
        };

        preview.addEventListener('click', toggleAccordion);
        content.addEventListener('click', toggleAccordion);
    });
});
