import { SubmitButton } from './SubmitButton';
import './ChatInput.css';

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
}

export const ChatInput = ({ value, onChange, onSend }: ChatInputProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSend();
    }

    return (
        <form onSubmit={handleSubmit} className="chat-input-container">
            <input 
                type="text" 
                className="chat-input" 
                placeholder="Message..." 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <SubmitButton />
        </form>
    );
};
