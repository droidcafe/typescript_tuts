interface food {
    name: string,
    price: number
}

class menu {
    items: Array<food>;
    pages: number;

    constructor(items: Array<food>, pages: number) {
        console.log('No of pages' + pages)
        this.items = items;
        this.pages = pages;
    }

    list(): void {
        for (var i = 0; i < this.items.length; i++) {
            console.log("Food item " + this.items[i].name + " with price " + this.items[i].price);
        }
    }
}

class happyMeal extends menu {
    constructor(items: Array<food>, pages: number) {
        super(items, pages);
    }

    list(): void {
        for (var i = 0; i < this.items.length; i++) {
            var happyPrice = this.items[i].price - 10;
            console.log(" Food item " + this.items[i].name + " with  happy meal price " + happyPrice);
        }
    }

}


var arr_food = [{ name: "Pizza", price: 30 }, { name: "burger", price: 40 }
    , { name: "Fries", price: 20 }, { name: "Cola", price: 10 }];

var obj_menu = new menu(arr_food, 5);
var obj_happymeal = new happyMeal(arr_food, 5);

obj_menu.list();
obj_happymeal.list();
