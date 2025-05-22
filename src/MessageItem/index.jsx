import './MessageItem.css';

function MessageItem({message}) {
    const {id, text, sender, timestamp} = message;
    const timestampToLocalTime = (timestamp) => (new Date(timestamp * 1000)).toLocaleString();
    return ( 
        <div className={"message-box " + ((sender == 'self') ? "own-text" : "")}>
            <div className="message-info">
                <p>{sender}</p>
                <p>{timestampToLocalTime(timestamp)}</p>
            </div>
            <p>{text}</p>
        </div>
     );
}

export default MessageItem;