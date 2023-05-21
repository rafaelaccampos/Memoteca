import { Component } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtsService } from '../thoughts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  thought : Thought = {
    content: '',
    author: '',
    model: 'modelo1'
  }

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router){
  }

  createThought(){
    this.thoughtService.create(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }

  cancelThought(){
    this.router.navigate(['/listThought']);
  }
}
