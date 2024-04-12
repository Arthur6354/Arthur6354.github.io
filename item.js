function Item(obj) {
    //console.log(`Item(${str})`);
    this.name = obj ? obj.name : '';
}

Item.storeList = function () {
    let items = JSON.stringify(Item.list);
    console.log(items);
    localStorage["items"] = items;
}

Item.loadList = function () {
    items = JSON.parse(localStorage["items"]);
    console.log(items.length);
    if (items.length) {
        Item.list = [];
        for (item of items) {
            console.log(item);
            Item.list.push(new Item(item));
        }
    } else
        Item.list = [new Item()];
}
