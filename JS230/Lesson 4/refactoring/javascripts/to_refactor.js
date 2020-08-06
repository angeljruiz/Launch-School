$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('opened');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('opened')
  });

  $("main p:first-of-type >").on("click", function(e) {
    e.preventDefault();

    $(e.currentTarget).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggle('opened')
  });

  $("form").on("submit", function(e) {
    e.preventDefault();

    let valid = verifyCard($(this).find("[type=text]").val())

    $(this).find(".success").toggle(valid);
    $(this).find(".error").toggle(!valid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    let mapping = { January: "Your birthstone is garnet", February: "Your birthstone is amethyst", March: "Your birthstone is aquamarine or bloodstone",
                    April: "Your birthstone is diamond", May: "Your birthstone is emerald", June: "Your birthstone is pearl, moonstone, or alexandrite", 
                    July: "Your birthstone is ruby", August: "Your birthstone is peridot", September: "Your birthstone is sapphire", October: "Your birthstone is opal or tourmaline",
                    November: "Your birthstone is topaz or citrine",  December: "Your birthstone is turquoise, zircon, or tanzanite" }

    var month = this.innerText,
        $stone = $("#birthstone");
    
    $stone.text(mapping[month]);
  });
});
