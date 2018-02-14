import { Component } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Beer} from './entities/beer.entity';
import {Repository} from 'typeorm';
import {NewBeerInDto} from './dto/new.beer.in.dto';


@Component()
export class BeersService {
    constructor( @InjectRepository(Beer) private readonly beerRepository: Repository<Beer>) {}

    async findAll(): Promise<Beer[]> {
        return await this.beerRepository.find({});
    }

    async findById(id: string): Promise<Beer> {
        return await this.beerRepository.findOneById(id);
    }

    async insert(beer: NewBeerInDto): Promise<Beer> {
        const newBeer = new Beer();

        Object.keys(beer).forEach((key) => {
            newBeer[key] = beer[key];
        });

        return await this.beerRepository.save(newBeer);
    }

    async update(oldBeer: Beer, updated_values: NewBeerInDto): Promise<Beer> {
        const updatedBeer = oldBeer;

        Object.keys(updated_values).forEach((key) => {
            updatedBeer[key] = updated_values[key];
        });

        return await this.beerRepository.save(updatedBeer)
    }

}