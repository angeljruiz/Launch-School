$( () => {
   $('#team li').click( event => {    
      let $window = $(window);
      let $overlay = $(event.currentTarget).find('.underlay');
      let $modal = $(event.currentTarget).find('.modal');
      let $close = $(event.currentTarget).find('.close_icon');

      event.preventDefault();

      $overlay.fadeIn();
      $modal.fadeIn();

      $overlay.on('click', event =>  event.stopPropagation() );
      $modal.css('top', $window.scrollTop() + $window.height()*.05 + 'px');
      $modal.click(event => event.stopPropagation());
      $close.click(closeModal);
   });


   function closeModal(event) {
      let $parent = $(event.currentTarget).parent().parent();
      let $close = $parent.find('.close_icon');
      let $modal = $parent.find('.modal');
      let $underlay = $parent.find('.underlay');

      event.stopPropagation();
   
      $modal.fadeOut();
      $underlay.fadeOut();
   
      $modal.unbind();
      $underlay.unbind();
      $close.unbind();
   }
});