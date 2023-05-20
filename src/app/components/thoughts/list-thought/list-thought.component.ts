import { Component } from '@angular/core';
import { Thought } from '../Thought';
@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent {
  listThoughts : Thought[] = [];
}
