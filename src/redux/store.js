import {configureStore} from '@reduxjs/toolkit'
import { CartReducer } from './reducers';

const store = configureStore({
    reducer:{
        cart : CartReducer
    }
    
});

export default store