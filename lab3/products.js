const products = [
  { id: 1, name: "marker", qty:100,price: 10 },
  { id: 2, name: "Pen", qty:50, price: 20 },
  { id: 3, name: "Pencil", qty:200, price: 50 },
];
let nextId = 3;

export const getAllProducts = ()=>{
    return products;
}
export const addProduct = (item)=>{
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};
