import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
    name: "messages",
    initialState: {
        messagesByChatId: {
            chat1: [
                {id: "msg1", text: "Hello", sender: "Manohar", timestamp: 1747896297},
                {id: "msg2", text: "Hi there!", sender: "self", timestamp: 1747896378}
            ]
        }
    },
    reducers: {
        addMessage: (state, action) => {
            const { chatId, message} = action.payload;
            if(!state.messagesByChatId[chatId]){
                state.messagesByChatId[chatId] = [];
            }
            state.messagesByChatId[chatId].push(message);
        }
    }
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;