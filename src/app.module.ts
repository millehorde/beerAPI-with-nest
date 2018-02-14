import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BeersModule} from './beers/beers.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: '192.168.99.100',
          port: 3306,
          username: 'admin',
          password: 'admin',
          database: 'beers',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      BeersModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
