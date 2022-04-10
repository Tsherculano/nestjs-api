import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//ES7 - EcmaScript 7 Dcorators

@Module({
  imports: [], //registra os outros módulos
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
