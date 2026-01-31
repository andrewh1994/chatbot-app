const API_KEY = process.env.REACT_APP_MISTRAL_API_KEY || '';
console.log('API Key loaded:', API_KEY ? 'Yes' : 'No - API Key missing!');

export async function sendMessageToMistral(message: string): Promise<string> {
    try {
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "mistral-small-latest",
                messages: [
                    //The content of the role below this line can be changed to assign different roles to the chatbot
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: message }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Mistral API Error:', errorData);
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const text = data.choices[0].message.content || 'No response';
        return text;
    } catch (error) {
        console.error('Error calling Mistral API:', error);
        throw new Error('Failed to get response from Mistral');
    }
}
