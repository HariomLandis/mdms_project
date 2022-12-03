import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ModuleserviceService {
  url:string="http://localhost:8080/datesearch";

  public res:any=[];
  public itemList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }
  exceptioncall(){
    //return this.http.get<any>(this.url);
    return this.http.get(this.url, { observe: 'response' ,responseType: 'text' as 'json'});
  }
  fetchtestdata(){
    return this.http.get<result[]>("http://localhost:8080/testdata").pipe(
      map((Response: any[])=>Response.map(resultdata=>new result(resultdata)))
    );
  }
}
