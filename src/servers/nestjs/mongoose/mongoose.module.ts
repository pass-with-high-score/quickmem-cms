import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminSchema } from '../../../sources/mongoose/models/admin.model.js';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DATABASE_URL),
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
