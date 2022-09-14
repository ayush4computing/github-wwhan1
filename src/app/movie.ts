export class Movie {
    id: number = -1;
    name: string = "";
    desc: string = "";
    directors: string[] = [];
    rating: number = 0;
    top_cast: string[] = [];
    genre: string[] = [];
    year: number = 0;
    length: number = 0;
    transactType: number = 0;
    rentPrice: number = 0;
    buyPrice: number = 0;
    isAvailable: boolean = false;
    inCart? : boolean = false;
}