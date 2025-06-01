import './MessageItem.css';

function MessageItem({message}) {
    const {id, text, sender, timestamp} = message;
    const timestampToLocalTime = (timestamp) => {
        const date = new Date(timestamp)
        const locale = navigator.languages[0] || navigator.language || navigator.userLanguage;
        return date.toLocaleDateString(locale, {month: 'short', day: 'numeric'})
            + ", " + 
            date.toLocaleTimeString(locale, {hour: 'numeric', minute: 'numeric', hour12: true});
    }
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