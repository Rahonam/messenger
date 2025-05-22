import { useSelector } from "react-redux";
import MessageItem from "../MessageItem";

function MessageList({activeChatId}) {
    const {messagesByChatId} = useSelector(state => state.messages);
    return ( 
        <>
        {   activeChatId in messagesByChatId ?
            messagesByChatId[activeChatId].map(message => <MessageItem key={message.id} message={message}/>)
            : "Send the first message!"
        }
        </>
     );
}

export default MessageList;