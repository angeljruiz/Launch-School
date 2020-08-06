$( () => {
    let $blinds = $('[id^=blind]');
    let speed = 250,
        delay = 1500;

    animate();

    $('a').click( event => {
        event.preventDefault();

        $blinds.finish();
        $blinds.removeAttr('style');
        animate();
    });

    function animate() {
        $blinds.each( i => {
            let $blind = $blinds.eq(i);

            $blind.delay(delay * i + speed).animate( { 
                top: '+=' + $blind.height(),
                height: 0
            }, speed);
        });
    }
});
