import ChatContent from "./ChatContent/ChatContent";
import ChatFooter from "./ChatFooter/ChatFooter";
import ChatHeader from "./ChatHeader/ChatHeader";


function App() {
  return <>
    <div className="App">
      <div className="chat-container">
        <div className="chat-box">
          <ChatHeader />
          <ChatContent />
          <ChatFooter />
        </div>
      </div>
    </div>
  </>
}

export default App;
