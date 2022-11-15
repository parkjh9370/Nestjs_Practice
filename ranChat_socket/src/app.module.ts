import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { AppController } from './app.controller';
import { ChatsGateway } from './chats/chats.gateway';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo_db', {
      user: 'chatName',
      pass: 'chatPass',
      dbName: 'chatting',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [ChatsGateway],
})
export class AppModule implements NestModule {
  configure() {
    mongoose.set('debug', true);
  }
}
