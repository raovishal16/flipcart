import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementData, decrementData } from '../Slice/CartSlice'

const Cart = () => {
    const CartData = useSelector((state) => state.addtoCart.data)
    const grandTotal = useSelector((state) => state.addtoCart.finleAmt)
    // console.log(grandTotal);
    const dispatch = useDispatch()

    const handleIncrement = (index) => {
        if (CartData[index].qty < 10) {
            dispatch(incrementData(index))
        } else {
            return
        }
    }
    const handleDecrement = (index) => {
        if (CartData[index].qty != 0) {
            dispatch(decrementData(index))
        } else {
            return
        }
    }


    return (
        <>
            <h1 className='text-center'> Cart</h1>
            <div className="container px-2 py-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            CartData.map((item, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className='col-2'><img src={item.thumbnail} alt="" className='img-fluid' /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>
                                            <div className="qty d-flex justify-content-center gap-3 align-items-center my-3">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleIncrement(index)}
                                                >
                                                    +
                                                </button>
                                                <div className="value">{item.qty}</div>
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => handleDecrement(index)}
                                                >
                                                    -
                                                </button>
                                            </div> </td>
                                        <td>{item.price * item.qty}</td>
                                    </tr >


                                )
                            })
                        }


                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    {/* <div className={addedCartData != false ? 'visible card py-3 px-5' : 'invisible'}> */}
                    <div>
                        <h4>Grand Total : {grandTotal} </h4>
                    </div>
                    {/* </div> */}
                </div>

            </div >
        </>
    )
}

export default Cart