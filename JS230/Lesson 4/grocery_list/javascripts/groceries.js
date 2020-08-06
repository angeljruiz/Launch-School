let items = {};

$( () => {
    let $ul = $('ul');
    let $name = $('#name');
    let $quantity = $('#quantity');

    $('form').submit( event => {
        event.preventDefault();
        addToGroceries($name.val(), $quantity.val());
    });
});

function addToGroceries(item, quantity=1) {
    let $ul = $('ul');
    let li = document.createElement('li');
    quantity = Number(quantity) || 1;

    li.innerText = quantity + ' ' + item;
    $ul.append(li);
}