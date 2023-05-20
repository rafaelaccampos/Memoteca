import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Dev',
    model: 'modelo1'
  }

  createThought(){
    alert('Novo pensamento criado!');
  }

  cancelThought(){
    alert('Novo pensamento cancelado!');
  }
}
