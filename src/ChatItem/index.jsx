import './ChatItem.css';

function ChatItem({chatData, isActive, handleClick}) {
    const {id, name, lastMessage} = chatData;

    return ( 
        <div onClick={()=>handleClick(id)} className={"chat-container " + (isActive ? "active-chat": "")}>
            <img className="chat-photo" src="/src/assets/person.png" alt="person" />
            <div className="chat-info">
                <h4 className="chat-title">{name}</h4>
                <p className="chat-subtitle">{lastMessage}</p>
            </div>
        </div>
     );
}

export default ChatItem;