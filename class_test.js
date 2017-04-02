var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var menu = (function () {
    function menu(items, pages) {
        console.log('No of pages' + pages);
        this.items = items;
        this.pages = pages;
    }
    menu.prototype.list = function () {
        for (var i = 0; i < this.items.length; i++) {
            console.log("Food item " + this.items[i].name + " with price " + this.items[i].price);
        }
    };
    return menu;
}());
var happyMeal = (function (_super) {
    __extends(happyMeal, _super);
    function happyMeal(items, pages) {
        return _super.call(this, items, pages) || this;
    }
    happyMeal.prototype.list = function () {
        for (var i = 0; i < this.items.length; i++) {
            var happyPrice = this.items[i].price - 10;
            console.log(" Food item " + this.items[i].name + " with  happy meal price " + happyPrice);
        }
    };
    return happyMeal;
}(menu));
var arr_food = [{ name: "Pizza", price: 30 }, { name: "burger", price: 40 },
    { name: "Fries", price: 20 }, { name: "Cola", price: 10 }];
var obj_menu = new menu(arr_food, 5);
var obj_happymeal = new happyMeal(arr_food, 5);
obj_menu.list();
obj_happymeal.list();
