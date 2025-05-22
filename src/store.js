import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './stores/chatSlice';
import messageReducer from './stores/messageSlice';

const store = configureStore({
    reducer: {
        chats: chatReducer,
        messages: messageReducer
    }
});

export default store;