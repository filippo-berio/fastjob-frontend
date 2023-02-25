import { RegionInterface } from './region.interface';

export interface CityInterface {
    id: number;
    title: string;
    region: RegionInterface;
}
