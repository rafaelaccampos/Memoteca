import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {

  @Input() thought = {
    content: 'Aprendendo novas coisas',
    author: 'Eu',
    model: 'modelo3'
  }

  defineWidthThought(): string {
    if(this.thought.content.length > 256){
      return 'thought-g';
    }
      return 'thought-p';
  }
}
