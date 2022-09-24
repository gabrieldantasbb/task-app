import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-app';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    {title: 'Curso de Python', description: 'Terminar o curso de Python', done: true, action: 'Faça agora!'},
    {title: 'Curso de Javascript', description: 'Terminar o curso de Javascript', done: true, action: 'Faça agora!'},
    {title: 'Curso de Python', description: 'Terminar o curso de Python', done: true, action: 'Faça agora!'},
  ]
}
