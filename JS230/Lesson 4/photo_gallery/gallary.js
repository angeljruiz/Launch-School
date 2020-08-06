$( () => {
    let $pic1 = $('#mainPic1');
    let $pic2 = $('#mainPic2');
    let $pic3 = $('#mainPic3');
    let $pic4 = $('#mainPic4');

    $pic2.hide();
    $pic3.hide();
    $pic4.hide();

    $('.picThumbs li').click( event => {
        let pic = event.currentTarget.id.split('Pic')[1];        

        $('.picThumbs li').removeClass('active');
        $('.mainPics img').hide();

        $(event.currentTarget).addClass('active');
        $('#mainPic' + pic).show();
        
    });
});