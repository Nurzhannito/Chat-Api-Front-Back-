import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./ChatContent.css";
import { fetchMessages } from "../Redux/messageSlice";
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatContent = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages)

    useEffect(() => {
        dispatch(fetchMessages())
    }, [dispatch])

    return (
        <div className="scroll">
            <div className="scroll-content">
                <div className="chats">
                    {messages.map(message => {
                        return <ChatMessage
                            key={message.id}
                            author={message.author}
                            message={message.message}
                            datetime={message.datetime} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatContent