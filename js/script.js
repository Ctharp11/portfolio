$('.navigation__link').on('click', function() {
    $('.navigation__button').click();
})

const portImage = $('.portfolio-image');

// $('.modal-outer-away').on('click', function() {
//     console.log('clicked')
//     $('.modal-outer-in').toggleClass('modal-outer-away');
// })
$('.modal-x').on('click', function() {
    console.log($('.modal-outer-in'))
    $('.modal-outer-in').toggleClass('modal-outer-away', true);
    $('.modal-outer-in').toggleClass('modal-outer-in', false);
})

for (let i = 0; i < portImage.length; i++) {
    let num = portImage[i].dataset.index;

    $(portImage[i]).on('click', function(){
        switch(num) {
            case '1':
                console.log(1)
                console.log('.modal-outer-away')
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                // $('.modal-outer-in').toggleClass('modal-outer-in', false);
                $('#modal-header').html('Texas Food Fight');
                return;
            case '2': 
                console.log(2)
                console.log('.modal-outer-away')
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                // $('.modal-outer-in').toggleClass('modal-outer-in', false);
                $('#modal-header').html('InstaCool');
                return;
            default:
                return;
        }
    });
}