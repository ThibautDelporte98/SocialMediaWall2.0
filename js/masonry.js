

const adjustItemHeight =  function() {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
    // options
      itemSelector: '.grid-item',
      gutter: 10,
    });

}



document.addEventListener("DOMContentLoaded", adjustItemHeight());

