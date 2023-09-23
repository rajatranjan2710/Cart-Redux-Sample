import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import '../styles/cart.css'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {


    const { cartItem, subTotal, shipping, tax, total } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const increment = (id) => {
        dispatch({
            type:"addToCart",
            payload: {id}
        })
        dispatch({
            type:"total"
        })

    }
    const decrement = (id) => {
        dispatch({
            type:"decrement",
            payload:id
        })
        dispatch({
            type:"total"
        })
    }

    const deleteHandler = (id) => {
        dispatch({
            type:"deleteHandler",
            payload:id
        })
        dispatch({
            type:"total"
        })
    }

    return (
        <div className='cart'>
            <main>

                {
                    cartItem.map(i => (
                        <CartItem
                            name={i.name}
                            price={i.price}
                            imgSrc={i.imgSrc}
                            qty={i.qty}
                            id={i.id}
                            increment={increment}
                            decrement={decrement}
                            deleteHandler={deleteHandler}


                        />
                    ))
                }

            </main>
            <aside>
                <h2>Subtotal : ${subTotal}</h2>
                <h2>Shipping : ${shipping}</h2>
                <h2>Tax : ${tax}</h2>
                <h2>Total : ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ imgSrc, name, price, qty, id, increment, decrement, deleteHandler }) => {
    return <div className="cartItem">
        <img src={imgSrc} alt='lll'/>
        <article>
            <p>{name}</p>
            <h3>${price}</h3>
        </article>
        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>
        </div>
        <AiFillDelete className='delete' onClick={() => deleteHandler(id)} />
    </div>
}

export default Cart