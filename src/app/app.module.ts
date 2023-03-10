import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { TodoItemsComponent } from './Mycomponent/todo-items/todo-items.component';
import { AddTodoComponent } from './Mycomponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponent/about/about.component';
import {ReactiveFormsModule}  from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
