import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://172.16.16.148:3000/todo/"

  constructor(private http: HttpClient) { 
    this.getTodo()
  }

  getTodo() { 
    return this.http.get(this.url)
    

  }

  postTodo(todo:any){
    return this.http.post(this.url,todo)
  }
  putTodo(todo:any){
    return this.http.put(this.url+todo.id,todo)
  }
  deleteTodo(todo:any){
    return this.http.delete(this.url+todo.id)
  }

}
