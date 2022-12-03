export class result{
    public city_id!:number;
    public city!:String;
    public country_id!:number;
    public lastupdate!:String;
    constructor(data:any){
        this.city_id=data.city_id;
        this.city=data.city;
        this.country_id=data.country_id;
        this.lastupdate=data.lastupdate;
    }
}