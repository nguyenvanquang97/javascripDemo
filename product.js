let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
function show(){
    for(const key in products){
        console.log(`${products[key].name}-${products[key].price}-${products[key].brand}-${products[key].count}`)
    }
}

var sumPrice=0
for(const key in products){
    sumPrice+=products[key].price*products[key].count
}

console.log("tong tien cac san pham:"+sumPrice)

console.log("cac san pham cua APPLE:")
for(const key in products){
    if(products[key].brand=="Apple"){
        console.log(`${products[key].name}-${products[key].price}-${products[key].brand}-${products[key].count}`)
    }
}
console.log()
console.log("cac san pham co gia tren 20000000:")
for(const key in products){
    if(products[key].price>20000000){
        console.log(`${products[key].name}-${products[key].price}-${products[key].brand}-${products[key].count}`)
    }
}

console.log()
console.log("cac san pham co chu pro")
for(const key in products){
    if(products[key].name.toLowerCase().includes("pro")){
        console.log(`${products[key].name}-${products[key].price}-${products[key].brand}-${products[key].count}`)
    }
}

function add(name,price,brand,count){
    products.push({name,price,brand,count});
    show();
}

add("iporn 14",1000,"Apple",3)

console.log()
function deleteSamsung(){
    for(const key in products){
        if(products[key].brand.toLowerCase()=="samsung"){
           delete products[key];
        }
    }
    show();
}


products.sort((a,b)=>(a.price<b.price)?1:-1)
show()

function bai10()
let key=Math.floor(Math.random() *products.length);
console.log(products[key]);
console.log(products[key]);