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

export const deleteProduct = (pid)=>{
    const item = products.find((prd)=>prd.id===pid);
    if(item==-1)
        return false;
    products.splice(item,1);
    console.log("products remaining:",products);
    return true;
};

export const updateProduct = (pid, updateiem)=>{
    const item = products.findIndex((prd)=>prd.id===pid);
          if(item==-1){
            return false;
          }
       updateItem.id=pid;
       products[item]=updateItem;
       return updateItem;
};

export const getProductById = (pid)=>{
         const item = products.find((prd)=>prd.id===pid);
         if(index==-1){
            return false;
         }
         return products[index];
};

//create a function to update product give pid call this
//function in to prg6.js and verfy its working by echoapi.
