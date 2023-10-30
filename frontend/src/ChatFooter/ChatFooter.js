import { useDispatch, useSelector } from "react-redux";
import Send from "../images/send.png";
import { fetchMessages, inputChangeHandler, sendMessage } from "../Redux/messageSlice";
import "./ChatFooter.css";

const ChatFooter = () => {
    const dispatch = useDispatch();
    const { author, message, error } = useSelector(state => state);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        dispatch(inputChangeHandler({ name, value }))
    };

    const messageSendHandler = async (e) => {
        e.preventDefault();
        const newMessage = { author: author, message: message };
        await dispatch(sendMessage(newMessage));
        await dispatch(fetchMessages());
    }

    return <>
        <div className="chat-input">
            {error ? <h6>{error}</h6> : null}
            <input
                id="name" type="text"
                placeholder="Author"
                name="author"
                value={author}
                onChange={onChangeHandler} />

            <input
                id="text" type="text"
                placeholder="Enter Message"
                name="message"
                value={message}
                onChange={onChangeHandler} />

            <button
                className="send-btn"
                onClick={messageSendHandler}>
                <img src={Send} alt="Send" />
            </button>
        </div>
    </>
}

export default ChatFooter