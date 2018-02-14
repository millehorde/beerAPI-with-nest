import {Body, Controller, Get, Param, Param, Post, Put} from '@nestjs/common';
import {BeersService} from './beers.service';
import {BeerOutDto} from './dto/beer.out.dto';
import {NewBeerInDto} from './dto/new.beer.in.dto';

@Controller('beers')
export class BeersController {
    constructor(private readonly beersService: BeersService) {}

    @Get()
    async findAll(): Promise<BeerOutDto[]> {
        return await this.beersService.findAll() as BeerOutDto[];
    }

    @Post()
    async create(@Body() beer: NewBeerInDto): Promise<BeerOutDto> {
        return await this.beersService.insert(beer) as BeerOutDto;
    }

    @Put(':id')
    async update(@Body() beerUpdated: NewBeerInDto, @Param() params): Promise<BeerOutDto> {
        const oldBeer = await this.beersService.findById(params.id);

        return await this.beersService.update(oldBeer, beerUpdated);
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<BeerOutDto> {
        return await this.beersService.findById(params.id);
    }
}