import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private todoColumns:any
  url="assets/lang_"
  constructor(private http: HttpClient) { 
    this.http.get(this.url+"en"+".json").subscribe(
      (adatok:any)=>{this.todoColumns=adatok.columns
      console.log(adatok)
      }
     
    )
  }

  getTodoColumns(){
    return this.todoColumns
  }

}
