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
    Item.list = [];
    let items_js = localStorage["items"];
    if (items_js) {
        items = JSON.parse(items_js);
        for (item of items) {
            //console.log(item);
            Item.list.push(new Item(item));
        }
    }
    if (!Item.list.length)
        Item.list.push(new Item());
}
