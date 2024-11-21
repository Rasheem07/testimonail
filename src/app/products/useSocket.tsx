import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url: string) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const connect = () => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      setIsConnected(true);
      if (reconnectIntervalRef.current) {
        clearInterval(reconnectIntervalRef.current);
        reconnectIntervalRef.current = null;
      }
    };

    socket.onclose = () => {
      setIsConnected(false);
      attemptReconnect();
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    wsRef.current = socket;
    setWs(socket);
  };

  const attemptReconnect = () => {
    if (reconnectIntervalRef.current) return;

    reconnectIntervalRef.current = setInterval(() => {
      console.log('Attempting to reconnect...');
      connect();
    }, 5000); // Try to reconnect every 5 seconds
  };

  useEffect(() => {
    connect();
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectIntervalRef.current) {
        clearInterval(reconnectIntervalRef.current);
      }
    };
  });

  return { ws, isConnected };
};

export default useWebSocket;
