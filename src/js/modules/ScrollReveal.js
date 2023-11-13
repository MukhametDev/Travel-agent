import ScrollReveal from 'scrollreveal';

function scrollRevealBody() {
    console.log('hello')
    ScrollReveal(
        {
            distance: '60px',
            duration: 2000,
        }
    );

    ScrollReveal().reveal('.header, .company', {
        origin: 'top',
    });
    ScrollReveal().reveal('.hint-discover', {
        origin: 'left',
    });
    ScrollReveal().reveal('.discover__text, .discover__form', {
        origin: 'right',
    });
}
export default scrollRevealBody;

