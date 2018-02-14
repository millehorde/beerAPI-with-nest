import {Module} from '@nestjs/common';
import {BeersController} from './beers.controller';
import {BeersService} from './beers.service';
import {Beer} from './entities/beer.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Beer])],
    controllers: [BeersController],
    components: [BeersService],
    exports: [BeersService]
})
export class BeersModule {}