$( () => {
    $('form').submit( function(e) {
        e.preventDefault();

        let data = $(this).serializeArray();
        let item = document.createElement('div');

        data.forEach( entry => { 
            if (entry.name === 'shape_type') {
                item.classList.add(entry.value);
                return;
            } 
            item.dataset[entry.name] = entry.value;
        });

        item.style.top = item.dataset.start_y + 'px';
        item.style.left = item.dataset.start_x + 'px';

        $('#canvas').append(item);
    });

    $('#animate').click( e => {
        e.preventDefault();

        let divs = $('#canvas div');
        
        divs.each( (_, div) => {
            div = $(div); 
            div.stop();  
            div.css({top: div.data('start_y'), left: div.data('start_x')});        
            div.animate({top: div.data('end_y'), left: div.data('end_x')}, 1000);
        });
    });

    $('#stop').click( e => {
        e.preventDefault();

        let divs = $('#canvas div');
        
        divs.each( (_, div) => {
            div = $(div); 
            div.stop();  
        });
    });
});