import React from 'react'

export const Home = () => {
    return (

        <div>
            <div className='cart-wrap'>
                <img src="https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000" alt="" />    
            </div> 
            <h2>Home Component</h2>
        <div className='container'> 
            <div className='img-wrap item'>
                <img src="https://media.istockphoto.com/photos/glowing-light-bulb-isolated-on-green-picture-id1322443152?b=1&k=20&m=1322443152&s=612x612&w=0&h=XsfLrhODt_ll8rPiqL_tR9fe0r4eGYyFenK7cr6Ropw=" alt="" />
            </div>
            <div className='text-wrap'>
                <span>Bulb.</span>
                <span>Price : 100</span>
            </div>
            <div className='button-wrap'>
                <button> Add to Cart</button>
            </div>

        </div>
        </div>
    )
}
