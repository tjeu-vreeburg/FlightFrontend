import { Airport} from './airport';

export type Flight = {
    id: number;
    number: number;
    destination: Airport;
    origin: Airport;
};

export type FlightSearchResponse = {
    content: Flight[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
    first: boolean;
};