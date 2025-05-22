import ChatItem from "../ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveChatId } from "../stores/chatSlice";

function ChatList(props) {
    const {chatById, chatIds, activeChatId} = useSelector((state) => state.chats);
    const dispatch = useDispatch();
    const handleClick = (chatId)=>{
        dispatch(updateActiveChatId(chatId));
    }

    return ( 
        <>
        {
            chatIds.map(chatId => 
                <ChatItem key={chatId} 
                    chatData={chatById[chatId]}   
                    isActive={activeChatId == chatId}
                    handleClick={handleClick}
                />
            )
        }
        </>
     );
}

export default ChatList;