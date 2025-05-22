import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: "chats",
    initialState: {
        chatById: {
            chat1: {id: "chat1", name: "Manohar", lastMessage: "Hi there!"},
            chat2: {id: "chat2", name: "Kumar", lastMessage: "Hola!"}
        },
        chatIds: ["chat1", "chat2"],
        activeChatId: "chat1"
    },
    reducers: {
        addChat: (state, action) => {
            const chat = action.payload;
            state.chatById[chat.id] = chat;
            state.chatIds.push(chat.id);
        },
        updateChatLastMessage: (state, action) => {
            const { chatId, message } = action.payload;
            if(state.chatById[chatId]){
                state.chatById[chatId].lastMessage = message.text;
            }
        },
        updateActiveChatId: (state, action) => {
            const chatId = action.payload;
            state.activeChatId = chatId;
        }
    }
});

export const { addChat, updateChatLastMessage, updateActiveChatId } = chatSlice.actions;
export default chatSlice.reducer;