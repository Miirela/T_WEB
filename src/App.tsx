import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';

const LaptopList = [
  {
    producator_procesor: "Intel Core i5"  ,
    model:"Asus TUF Gaming F15 FX506LH" , 
    color:"Gry",
    memory: "8Gb RAM",
    greutatea:"2.3kg",
    garantie:"12 luni",
    photo:"https://neocomputer.md/image/cache/data/Notebook/Asus/Asus%20FX506LH%20Fortress%20Gray_1-1000x1000.jpg"

  },
  {
    producator_procesor: "Intel Core i5"  ,
    model:"Laptop Asus VivoBook 14 K413EA Blue" , 
    color:"Blue",
    memory: "8Gb RAM",
    greutatea:"21.4kg",
    garantie:"6 luni",
    photo:"https://darwin.md/images/product/2022/03/darwin-laptop-asus-vivobook-14-k413ea-blue-019.webp"

  },
]


function App() {
  return (
      <>
        <LayoutCustom></LayoutCustom>
        <p className='text_1'>Data from interface</p>
        <Card_box Laptopul={LaptopList}/>
        <FooterNow></FooterNow>
      </>
  );
}

export default App;
