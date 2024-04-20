import { configureStore } from '@reduxjs/toolkit'
import cartPeoduct from '../Slice/CartSlice'

export default configureStore({
    reducer: {
        addtoCart: cartPeoduct
    },
})