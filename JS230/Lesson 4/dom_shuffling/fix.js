$( () => {
    let $main = $('main');
    let $mainH1 = $('main > h1');
    let $header = $('main ~ header');
    let $headerNav = $('header nav');
    let $articleHeaderP = $('article header ~ p');

    $headerNav.before($mainH1);
    $main.before($header);
    $articleHeaderP.after($('figure'));
    $('figure:nth-of-type(2)').insertBefore('figure:nth-of-type(1)');
    $('figure:nth-of-type(1) img').after($('figure:nth-of-type(2) figcaption'));
    $('figure:nth-of-type(2) img').after($('figure:nth-of-type(1) figcaption ~ figcaption'));
});