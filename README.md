# AI Chatbot App

A React TypeScript chatbot application using Mistral AI. Built to learn React component architecture, state management, and API integration.

## Features

- Real-time AI responses using Mistral AI
- React 18 with TypeScript
- Modern purple gradient UI
- Tests with Jest and React Testing Library
- Environment variable configuration

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- Mistral AI API key

### Installation

Clone and install:

```bash
git clone https://github.com/andrewh1994/chatbot-app.git
cd chatbot-app
npm install
```

### API Key Setup

Get your API key from [Mistral AI Console](https://console.mistral.ai/). Create an account, go to API Keys, and generate a new key.

Create a `.env` file in the root directory:

```bash
REACT_APP_MISTRAL_API_KEY=your_api_key_here
```

**Note:** Don't commit your `.env` file. It's already in `.gitignore`.

### Running the App

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

### Running Tests

```bash
npm test
```

For coverage:

```bash
npm test -- --coverage
```

## Project Structure

```
src/
├── components/
│   ├── Chat.tsx           - Main chat container
│   ├── ChatLog.tsx        - Message list
│   ├── ChatInput.tsx      - Input form
│   ├── MessageBubble.tsx  - Individual messages
│   ├── Header.tsx         - App header
│   └── SubmitButton.tsx   - Submit button
├── Services/
│   └── mistralAIService.ts - API integration
├── App.tsx
└── App.test.tsx
```

## Customization

To change the chatbot personality/role, edit the system prompt in `src/Services/mistralAIService.ts`:

```typescript
{ role: "system", content: "You are a helpful assistant." }
```

## Tech Stack

- React 18
- TypeScript
- Mistral AI API
- Jest
- React Testing Library

## License

MIT
