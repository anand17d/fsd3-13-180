import readline from "readline/promises";
import {writeFile,readFile} from "fs/promises";
import {stdin,stdout} from 'process';
const FILE= "products.json"
import { log } from "console";
const savecart=async (cart)=>{
    await writeFile(FILE,JSON.stringly(cart,null(1,2)));
};
const getcart=async ()=>{
    const data=await readfile(FILE,"utf-8");
    return JSON.parse(data)
};
const main=async()=>{
    const cin=readline.createInterface({input:stdin,output:stdout});
   let choice;
   do{
    console.log("welcome to shopping cart 🛍️")
    console.log("1-----Add to cart")
    console.log("2-----show cart")
    console.log("3-----remove item")
    console.log("4-----update quantity")
    console.log("5------checkout")
     choice=await cin.question("enter your choice");
    console.log("entered chocie: ",choice);
    switch(Number(choice)){
        case 1:
            console.log('add to cart');
        case 2:
            console.log('show cart itens') ;
            break;
        case 3:
            console.log('remove items');
            break;
        case 4:
            console.log('update quantity')
        case 5:
            console.log('see you later...😄');
            break;
        default:
            console.log('invalid choice try again 🔴')                       
    }
   } while (choice!="5");
   cin.close();
};
main();