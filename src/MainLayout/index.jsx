import { useDispatch, useSelector } from 'react-redux';
import ChatList from '../ChatList';
import MessageList from '../MessageList';
import './MainLayout.css';
import { useState } from 'react';
import { addMessage } from '../stores/messageSlice';
import { v4 as uuidv4 } from 'uuid';
import { updateChatLastMessage } from '../stores/chatSlice';

function MainLayout(props) {
    const {chatById, activeChatId} = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const payload = {
            chatId: activeChatId, 
            message: {
                id: uuidv4(), 
                text: inputValue, 
                sender: "self", 
                timestamp: (new Date()).getTime()
            }
        }

        setInputValue("");
        dispatch(addMessage(payload));
        dispatch(updateChatLastMessage(payload));
    };

    return ( 
        <div className="layout-container">
            <div className="side-container">
                <div className="chat-header">
                    <input type="search" placeholder="Search Chat" className="search-input"/>
                </div>
                <div className="chat-list">
                    <ChatList/>
                </div>
                <div className="chat-footer">
                    <button>
                        Start New Chat
                    </button>
                </div>
            </div>
            <div className="message-container">
                <div className="message-header">
                    <div className="message-title">{activeChatId in chatById ? chatById[activeChatId].name : "Select a Chat"}</div>
                </div>
                <div className="message-list">
                    <MessageList activeChatId={activeChatId}/>
                </div>
                <div className="message-footer">
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                            placeholder='Type message' 
                            className='message-input' 
                            value={inputValue} 
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
     );
}

export default MainLayout;