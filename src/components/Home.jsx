import React from 'react'
import '../styles/home.css'
import adidas from '../assets/adidas.jpg'
import nike from '../assets/nike.jpg'
import { useDispatch } from 'react-redux'

const Home = () => {


    const dispatch = useDispatch();

    const addToCard = (options)=>{
        // console.log(options)
        dispatch({
            type:"addToCart",
            payload:options
        })
        dispatch({
            type:"total"
        })
    }
    const ProductList = [
        {
            name : "Adidas",
            price : 1000,
            id : 1,
            image: adidas
        },
        {
            name : "Nike",
            price : 900,
            id : 2,
            image: nike
        }
    ]
  return (
    <div className='home'>
        {
            ProductList.map((i)=>(
                <ProductCard
                name={i.name}
                imgSrc={i.image}
                id={i.id}
                price={i.price}
                Handler={addToCard}
                key={i.id}
                />
            ))
        }
    </div>
  )
}

const ProductCard = ({imgSrc,name,price,Handler,id})=>{

    return <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h3>${price}</h3>
        <button onClick={()=>Handler({name,id,price,qty:1,imgSrc})}>Add to Card</button>
    </div> 
    

}

export default Home