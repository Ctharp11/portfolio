const portImage = $('.portfolio-image');

$('.navigation__link').on('click', function() {
    $('.navigation__button').click();
})

$('.modal-x').on('click', function() {
    $('.modal-outer-in').toggleClass('modal-outer-away', true);
    $('.modal-outer-in').toggleClass('modal-outer-in', false);
    window.removeEventListener('click', clickRemove);
})

for (let i = 0; i < portImage.length; i++) {
    let num = portImage[i].dataset.index;

    $(portImage[i]).on('click', function(){
        switch(num) {
            case '1':
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('Texas Food Fight');
                $('#modal-img').html('<img class="modal-image" src="img/tx_food_fight.png" alt="texas food fight" />')
                $('#visit').html('<a class="modal-visit" href="https://texas-food-fight-dloruwxifd.now.sh/" target="_blank"> Click here to visit Texas Food Fight </a>')
                $('#modal-content').html("<span> Texas Food Fight is an app that allows users to enter Texas Restaurants in an attempt to prove which city has the best cuisine in the state. <br><br> Full-stack, mobile-responsive app built with JavaScript, Pug template engine, Node and Express, and MongoDB. Has full user authentication and password reset via Postmark, and photos upload and resize to Cloudinary. Also includes Google Maps, user validation and error handling via flash messages, AJAX search interface, and a cool animation when you favorite a restaurant. </span>");
                return;
            case '2': 
                closeModal()
                $('.modal-outer-away').toggleClass('modal-outer-in', true);
                $('#modal-header').html('InstaCool');
                $('#modal-content').html('asdasdasd');
                return;
            default:
                return;
        }
    });
}

function closeModal() {
  window.addEventListener('click', clickRemove);
} 

const clickRemove = function (event) {
    const modal = document.querySelector('.modal-outer');
    if (event.target === modal) {
        $('.modal-outer-in').toggleClass('modal-outer-away', true);
        $('.modal-outer-in').toggleClass('modal-outer-in', false);
        window.removeEventListener('click', clickRemove);
    }
}

    
