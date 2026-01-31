import "./ChatLog.css";
import { MessageBubble } from "./MessageBubble";

interface ChatLogProps {
    messages: Array<{ text: string; isUser: boolean }>;
}

export const ChatLog = ({ messages }: ChatLogProps) => (
    <div className="chat-log">
        {messages.map((msg, index) => <MessageBubble key={index} text={msg.text} isUser={msg.isUser} />)}
    </div>
);
