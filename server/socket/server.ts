import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Example: Listen for a specific event from the client
  @SubscribeMessage('testEvent')
  handleTestEvent(client: Socket, payload: any): void {
    console.log('Received test event from client:', payload);
    
    // Sending a response back to the client
    this.server.emit('testEventResponse', 'Hello from server!');
  }
}