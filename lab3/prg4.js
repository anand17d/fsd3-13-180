import http from 'http'
import {reviews} from "./data.js";
const server=http.createServer((req,res)=>{
    const products={
          id:1,
          name:'mobile',
          price:4000,
          rating:4.7,
          review:225,
    };
    const items=[
  {
    "id": 1,
    "name": "Smartphone",
    "image": "https://example.com/images/smartphone.jpg",
    "description": "A modern smartphone with a high-resolution display, powerful processor, and long-lasting battery."
  },
  {
    "id": 2,
    "name": "Laptop",
    "image": "https://example.com/images/laptop.jpg",
    "description": "A lightweight laptop designed for work, study, programming, and everyday tasks."
  },
  {
    "id": 3,
    "name": "Wireless Headphones",
    "image": "https://example.com/images/headphones.jpg",
    "description": "Comfortable wireless headphones with clear sound quality and long battery life."
  },
  {
    "id": 4,
    "name": "Smart Watch",
    "image": "https://example.com/images/smartwatch.jpg",
    "description": "A stylish smartwatch with fitness tracking, notifications, heart-rate monitoring, and multiple watch faces."
  },
  {
    "id": 5,
    "name": "Bluetooth Speaker",
    "image": "https://example.com/images/speaker.jpg",
    "description": "A portable Bluetooth speaker that delivers powerful audio and can be used indoors or outdoors."
  },
  {
    "id": 6,
    "name": "Wireless Mouse",
    "image": "https://example.com/images/mouse.jpg",
    "description": "An ergonomic wireless mouse with precise tracking and a comfortable design for everyday use."
  },
  {
    "id": 7,
    "name": "Mechanical Keyboard",
    "image": "https://example.com/images/keyboard.jpg",
    "description": "A responsive mechanical keyboard designed for programming, gaming, and fast typing."
  },
  {
    "id": 8,
    "name": "Power Bank",
    "image": "https://example.com/images/powerbank.jpg",
    "description": "A compact portable power bank for charging smartphones and other USB-powered devices."
  },
  {
    "id": 9,
    "name": "Tablet",
    "image": "https://example.com/images/tablet.jpg",
    "description": "A versatile tablet with a bright touchscreen, fast performance, and a slim portable design."
  },
  {
    "id": 10,
    "name": "USB-C Hub",
    "image": "https://example.com/images/usbc-hub.jpg",
    "description": "A multi-port USB-C hub that expands your laptop connectivity with USB, HDMI, and memory card ports."
  }
]
    if(req.url === '/api/products'){
        // res.end(JSON.stringify(products));
         res.end(JSON.stringify(items));
    } else if(req.url==='/api/reviews')
        res.end(JSON.stringify(reviews))

else{
        res.statusCode=404;
        res.end();
     }
})
server.listen(3000,()=>console.log('prg4 is running...'))