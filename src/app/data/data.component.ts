import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
 todos:any
 newTodo:any={}
 oszlopok:any

constructor(private base:BaseService, private config:ConfigService){
  this.base.getTodo().subscribe(
    (adatok)=>this.todos=adatok
  )
  this.oszlopok=config.getTodoColumns()
}

ment(todo:any){
  todo.userId=Number(todo.userId)
  this.base.putTodo(todo).subscribe()
  console.log(todo)
}

torol(todo:any){
  this.base.deleteTodo(todo).subscribe()
  console.log(todo)
}
hozzaad(){
  if (Object.keys(this.newTodo).length !== 0){
    this.newTodo.userId=Number(this.newTodo.userId)
    console.log(this.newTodo)
    this.base.postTodo(this.newTodo).subscribe(
    ()=>this.base.getTodo().subscribe(
      (adatok)=>this.todos=adatok
    )
    )
    this.newTodo={}
  }
  else{
    console.log("Hülye a user!")
  }
  // HU
}
}