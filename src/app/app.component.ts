import { Component, VERSION } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list = new TodoList('ahmed Elsawaf', [
    new TodoItem('PlayFootball', true),
    new TodoItem('Get Flowers'),
    new TodoItem('collect Tickets'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.Items.filter((item) => !item.complete).length;
  }

  get items(): readonly TodoItem[]{
    return this.list.Items.filter(item => !item.complete || !item.complete);
  }
  addItem(todoText:string){
    this.list.addItem(todoText);
  }
  showComplete:boolean = false ;
}
