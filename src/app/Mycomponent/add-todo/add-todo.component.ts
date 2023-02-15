import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
//  title:string;
//  desc:string;
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
 onSubmit(){
  const todo={
    sno:8,
    title:this.toDoForm.value.title,
    desc:this.toDoForm.value.desc,
    active:true
  }
  console.log(todo);
  this.todoAdd.emit(todo);
 }
toDoForm=new FormGroup({
    title:new FormControl(),
    desc: new FormControl()
}
)
}
