'use client';

import { useChat } from 'ai/react';
import GPTLogo from './components/gpt-logo';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="pt-4 pb-32 bg-gray-50">
      {messages.map(message => (
        <div
          key={message.id}
          className={`border-t border-black/10 ${message.role === 'user' && 'bg-white'}`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            {message.role === 'assistant' && <GPTLogo />}
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="fixed inset-x-0 bottom-10">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message"
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md  bg-white px-3 text-sm focus-visible:ring-offset-green-300 ring-1 border border-gray-50 ring-gray-100 outline-none"
        />
      </form>
      {/* <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} placeholder="Enter a message" />
      </form>
    </div> */}
    </div>
  );
}
