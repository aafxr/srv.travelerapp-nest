import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: '*',
})
export class SocketGateway {
    @WebSocketServer()
    server: Server


    @SubscribeMessage('join')
    
}
