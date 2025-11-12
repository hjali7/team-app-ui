'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip, Send } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  fileURL?: string;
  fileName?: string;
}

// Mock data for messages
const initialMessages: Message[] = [
  { id: 1, user: { name: 'Alice', avatar: 'https://github.com/shadcn.png' }, text: 'Hey everyone, let\'s sync up on the Q3 report.' },
  { id: 2, user: { name: 'Bob', avatar: 'https://github.com/shadcn.png' }, text: 'Sure, I have the preliminary data ready.' },
  { id: 3, user: { name: 'You', avatar: 'https://github.com/shadcn.png' }, text: 'Great! I\'ll set up a meeting for tomorrow.' },
];

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB

export function TeamChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const msg = {
      id: messages.length + 1,
      user: { name: 'You', avatar: 'https://github.com/shadcn.png' },
      text: newMessage,
    };
    setMessages([...messages, msg]);
    setNewMessage('');
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > FILE_SIZE_LIMIT) {
      toast.error(`File size exceeds the 5MB limit.`);
      return;
    }

    // Simulate file upload and message creation
    const msg = {
      id: messages.length + 1,
      user: { name: 'You', avatar: 'https://github.com/shadcn.png' },
      text: `File uploaded: ${file.name}`,
      file: URL.createObjectURL(file),
      fileName: file.name
    };
     // This is a simplified version. In a real app, you would upload the file to a server
     // and then broadcast the message with the file URL.
    console.log('Uploading file:', file.name);
    toast.success(`File "${file.name}" ready to be sent.`);

    // For demonstration, we'll just add a message with a downloadable link
    // In a real app, you'd handle the upload process.
    const messageWithFile = {
        id: messages.length + 1,
        user: { name: 'You', avatar: 'https://github.com/shadcn.png' },
        text: `Shared a file:`,
        fileURL: URL.createObjectURL(file),
        fileName: file.name,
    };
    setMessages([...messages, messageWithFile]);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 ${msg.user.name === 'You' ? 'justify-end' : ''}`}>
            {msg.user.name !== 'You' && <Avatar><AvatarImage src={msg.user.avatar} /><AvatarFallback>{msg.user.name.charAt(0)}</AvatarFallback></Avatar>}
            <div className={`rounded-lg p-3 max-w-xs ${msg.user.name === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
              <p className="font-semibold text-sm">{msg.user.name}</p>
              <p>{msg.text}</p>
              {msg.fileURL && (
                <a href={msg.fileURL} download={msg.fileName} className="text-blue-500 underline mt-2 block">
                  Download {msg.fileName}
                </a>
              )}
            </div>
             {msg.user.name === 'You' && <Avatar><AvatarImage src={msg.user.avatar} /><AvatarFallback>Y</AvatarFallback></Avatar>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t bg-background">
        <div className="relative">
          <Textarea
            placeholder="Type your message here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="pr-24"
          />
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex gap-2">
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <Button variant="ghost" size="icon" onClick={triggerFileInput}><Paperclip className="h-4 w-4" /></Button>
            <Button size="icon" onClick={handleSendMessage}><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
