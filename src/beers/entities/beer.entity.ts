import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Beer {
    @PrimaryGeneratedColumn('uuid')
    beer_id: string;

    @Column({ type: 'varchar', length: 255, nullable: false})
    name: string;

    @Column({ type: 'varchar', length: 1000, nullable: false})
    description: string;

    @Column({ type: 'int', nullable: true, default: 0})
    note: number;

    @Column({ type: 'int', default: 0})
    alcohol_percent: number;
}
