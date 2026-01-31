import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import * as mistralService from './Services/mistralAIService';

// Mock the API service
jest.mock('./Services/mistralAIService');

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation();
  jest.spyOn(console, 'error').mockImplementation();
});

describe('App Component', () => {
  describe('Rendering', () => {
    test('renders AI Chatbot header', () => {
      render(<App />);
      const header = screen.getByRole('heading', { name: /AI Chatbot/i });
      expect(header).toBeInTheDocument();
    });

    test('renders chat input field', () => {
      render(<App />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Message...');
    });

    test('renders submit button', () => {
      render(<App />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    test('sends message and displays it in chat', async () => {
      // Mock API response
      const mockResponse = 'Hello! How can I help you?';
      jest.spyOn(mistralService, 'sendMessageToMistral').mockResolvedValue(mockResponse);

      render(<App />);
      
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      await userEvent.type(input, 'Hello bot');
      await userEvent.click(button);

      expect(await screen.findByText('Hello bot')).toBeInTheDocument();
      
      expect(await screen.findByText(mockResponse)).toBeInTheDocument();
      
      expect(input).toHaveValue('');
    });

    test('does not send empty messages', async () => {
      const mockSendMessage = jest.spyOn(mistralService, 'sendMessageToMistral');

      render(<App />);
      
      const button = screen.getByRole('button');

      await userEvent.click(button);

      expect(mockSendMessage).not.toHaveBeenCalled();
    });

    test('handles API errors gracefully', async () => {
      // Mock API error
      jest.spyOn(mistralService, 'sendMessageToMistral').mockRejectedValue(new Error('API Error'));

      render(<App />);
      
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');

      await userEvent.type(input, 'Test message');
      await userEvent.click(button);

      // Verify error message appears
      expect(await screen.findByText(/Sorry, I encountered an error/i)).toBeInTheDocument();
    });
  });
});
