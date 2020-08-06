$(() => {
  let photos;
  let slideIndex = 1;
  let photoTemplate = Handlebars.compile($("#photos").html());

  Handlebars.registerPartial("comment", $("#photo_comment").html());

  $.get("/photos", (p) => {
    photos = p;
    $("#slides").append(photoTemplate({ photos: photos }));

    preparePhotoData(photos[0]);
  });

  $(".next").click(function (e) {
    e.preventDefault();
    $(`[data-id=${slideIndex}]`).fadeOut();
    if (slideIndex === $("#slides figure").length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    $(`[data-id=${slideIndex}]`).fadeIn();
    preparePhotoData(photos[slideIndex - 1]);
  });

  $(".prev").click(function (e) {
    e.preventDefault();
    $(`[data-id=${slideIndex}]`).fadeOut();
    if (slideIndex === 1) {
      slideIndex = $("#slides figure").length;
    } else {
      slideIndex--;
    }
    $(`[data-id=${slideIndex}]`).fadeIn();
    preparePhotoData(photos[slideIndex - 1]);
  });

  $("#comments form").submit(function (e) {
    e.preventDefault();

    let photoCommentTemplate = Handlebars.compile($("#photo_comment").html());
    let data = $(this).serialize();
    this.reset();

    $.post("comments/new", data, (res) => {
      $("#comments ul").append(photoCommentTemplate(res));
    });
  });
});

function preparePhotoData(photo) {
  let photoCommentsTemplate = Handlebars.compile($("#photo_comments").html());
  let photoInfoTemplate = Handlebars.compile($("#photo_information").html());

  $("#comments ul").empty();
  $("body section header").empty();

  $("body section header").append(photoInfoTemplate(photo));
  $.get("/comments?photo_id=" + photo.id, (comments) => {
    $("#comments ul").append(photoCommentsTemplate({ comments }));
  });

  $(".actions a:first-of-type()").click(function (e) {
    e.preventDefault();
    $.post("/photos/like", { photo_id: this.dataset.id }, (data) => {
      if (!Number(data.total)) return;
      this.innerText = this.innerText.replace(/(\d\d*)/, data.total);
    });
  });
  $(".actions a")
    .last()
    .click(function (e) {
      e.preventDefault();
      $.post("/photos/favorite", { photo_id: this.dataset.id }, (data) => {
        if (!Number(data.total)) return;
        this.innerText = this.innerText.replace(/(\d\d*)/, data.total);
      });
    });
}
