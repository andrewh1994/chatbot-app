import { useState } from 'react';
import { ChatLog } from './ChatLog';
import { ChatInput } from './ChatInput';
import { sendMessageToMistral } from '../Services/mistralAIService';
import './Chat.css';

interface Message {
    text: string;
    isUser: boolean;
}

export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    
    const [inputValue, setInputValue] = useState('');

    const handleSend = async () => {
        const trimmedInputValue = inputValue.trim();
        if (trimmedInputValue === '') return;

        setMessages(prevItems => [...prevItems, { text: trimmedInputValue, isUser: true }]);
        setInputValue('');

        try {
            const botResponse = await sendMessageToMistral(trimmedInputValue);
            setMessages(prevItems => [...prevItems, { text: botResponse, isUser: false }]);
        } catch (error) {
            console.error('Failed to get bot response:', error);
            setMessages(prevItems => [...prevItems, { text: 'Sorry, I encountered an error. Please try again.', isUser: false }]);
        }
    }

    return(
        <div className="chat-wrapper">
            <div className="chat-card">
                <div className="chat-card-header">
                    <div className="chat-header-icon">🤖</div>
                    <h2>Chatbot</h2>
                </div>
                <ChatLog messages={messages} />
                
                <ChatInput 
                    value={inputValue} 
                    onChange={setInputValue} 
                    onSend={() => handleSend()} 
                />
            </div>
        </div>
    )
}