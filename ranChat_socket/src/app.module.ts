import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { AppController } from './app.controller';

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
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure() {
    // const DEBUG = process.env.MODE === 'dev' ? true : false;
    mongoose.set('debug', true);
  }
}
