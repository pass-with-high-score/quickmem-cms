import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { params } from '../../sources/typeorm/config.js';
import { MongooseSchemasModule } from './mongoose/mongoose.module.js';

@Module({
  imports: [TypeOrmModule.forRoot(params), MongooseSchemasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
