import './MessageBubble.css';

interface MessageBubbleProps {
    text: string;
    isUser: boolean;
}

export const MessageBubble = ({ text, isUser }: MessageBubbleProps) => (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
        {!isUser && <div className="bot-avatar">🤖</div>}
        <div className="message-bubble">
            <p>{text}</p>
        </div>
    </div>
);
