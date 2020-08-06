var inventory;

(function () {
  let index = 1;
  inventory = {
    collection: [],

    setDate: function () {
      $("#order_date").text(new Date().toUTCString());
    },

    cacheTemplate: function () {
      this.template = Handlebars.compile($("#inventory_item").html());
      $("#inventory_item").remove();
    },

    addItem: function () {
      let id = index++;
      $("#inventory tbody").append(this.template({ id }));
      this.collection.push({ ID: id, name: "", stockNumber: "", quantity: 1 });
    },

    deleteItem: function (e) {
      e.preventDefault();
      let id = Number(
        $(e.target.parentElement.parentElement.children[0].children[0])
          .attr("name")
          .split("id_")[1]
      );
      this.collection = this.collection.filter((item) => item.ID !== id);
      e.target.parentElement.parentElement.remove();
    },

    init: function () {
      this.setDate();
      this.cacheTemplate();
      $("#inventory").append(document.createElement("tbody"));

      $("#add_item").click(this.addItem.bind(this));
      $("#inventory").on("click", ".delete", this.deleteItem.bind(this));
    },
  };
})();

$(inventory.init.bind(inventory));
