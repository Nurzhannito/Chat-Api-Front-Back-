import Logo from "../images/logo.png";
import "./ChatHeader.css";

const ChatHeader = () => {
    return (
        <div className="client">
            <img src={Logo} alt="Logo" />
            <div className="client-info">
                <h2>Nurzhan</h2>
                <p>online</p>
            </div>
        </div>
    )
}

export default ChatHeader