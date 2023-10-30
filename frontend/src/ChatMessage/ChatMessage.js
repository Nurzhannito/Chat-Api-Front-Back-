import "./ChatMessage.css";

const ChatMessage = ({ author, message, datetime }) => {
    return (
        <div>
            <p className="message">{author}<b></b>: {message} <br />
                <span className="time">{new Date(datetime).toLocaleString()}</span>
            </p>
        </div>
    )
}

export default ChatMessage