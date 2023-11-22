import React, { useEffect } from 'react';
import io from 'socket.io-client';

const YourComponent = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000'); // Replace with your server URL
    socket.on('connect', () => {
      console.log('Connected to server');
    
      // Emit a test event to the server
      socket.emit('testEvent', 'Hello from client!');
    });
    
    socket.on('testEventResponse', (data) => {
      console.log('Received response from server:', data);
    });

    return () => {
      socket.disconnect(); // Clean up on component unmount
    };
  }, []);

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};

export default YourComponent;
