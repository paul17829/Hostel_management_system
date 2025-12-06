import React, { useState, useEffect, useRef } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';
import { cn } from '../lib/utils';

const CONTACTS = [
    { id: 1, name: 'Alice Johnson', lastMessage: 'Hey, is the water working?', time: '2m', unread: 2 },
    { id: 2, name: 'Hostel Admin', lastMessage: 'Maintenance is scheduled for tomorrow.', time: '1h', unread: 0 },
    { id: 3, name: 'Room 103 Group', lastMessage: 'Who left the lights on?', time: '4h', unread: 5 },
    { id: 4, name: 'Bob Smith', lastMessage: 'Can I borrow your charger?', time: '1d', unread: 0 },
];

const INITIAL_MESSAGES = [
    { id: 1, sender: 'me', text: 'Hi Alice!', time: '10:30 AM' },
    { id: 2, sender: 'other', text: 'Hey, is the water working in your block?', time: '10:31 AM' },
    { id: 3, sender: 'me', text: 'Let me check, give me a sec.', time: '10:32 AM' },
];

const Chat = () => {
    const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            sender: 'me',
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setMessageInput('');

        // Simulate dummy response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: prev.length + 1,
                sender: 'other',
                text: "Thanks for checking!",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 2000);
    };

    return (
        <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-sm border border-gray-100 flex overflow-hidden">
            {/* Sidebar List */}
            <div className="w-80 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-1 focus:ring-primary-500 text-sm"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {CONTACTS.map(contact => (
                        <div
                            key={contact.id}
                            onClick={() => { setSelectedContact(contact); setMessages(INITIAL_MESSAGES); }}
                            className={cn(
                                "p-4 flex gap-3 hover:bg-gray-50 cursor-pointer transition-colors relative",
                                selectedContact.id === contact.id && "bg-primary-50 hover:bg-primary-50"
                            )}
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 shrink-0">
                                {contact.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-semibold text-gray-900 truncate">{contact.name}</h4>
                                    <span className="text-xs text-gray-400">{contact.time}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                            </div>
                            {contact.unread > 0 && (
                                <div className="absolute right-4 top-1/2 mt-3 bg-primary-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                    {contact.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                            {selectedContact.name[0]}
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">{selectedContact.name}</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-500">Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <button className="p-2 hover:bg-gray-50 rounded-lg"><Phone size={20} /></button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg"><Video size={20} /></button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg"><MoreVertical size={20} /></button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={cn("flex", msg.sender === 'me' ? "justify-end" : "justify-start")}>
                            <div className={cn(
                                "max-w-[70%] rounded-2xl p-4 shadow-sm",
                                msg.sender === 'me'
                                    ? "bg-primary-600 text-white rounded-br-none"
                                    : "bg-white text-gray-800 rounded-bl-none"
                            )}>
                                <p>{msg.text}</p>
                                <p className={cn(
                                    "text-[10px] mt-1 text-right",
                                    msg.sender === 'me' ? "text-primary-100" : "text-gray-400"
                                )}>
                                    {msg.time}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                    <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Paperclip size={20} />
                        </button>
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none"
                        />
                        <button
                            type="submit"
                            className={cn(
                                "p-3 rounded-xl transition-all",
                                messageInput.trim()
                                    ? "bg-primary-600 text-white hover:bg-primary-700 shadow-md"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            )}
                            disabled={!messageInput.trim()}
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
