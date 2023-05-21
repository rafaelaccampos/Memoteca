import { Component } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtsService } from '../thoughts.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})

export class ListThoughtComponent {

  listThoughts : Thought[] = [];

  constructor(private thoughtsService: ThoughtsService){ }

  ngOnInit(): void {
    this.thoughtsService
      .getAll()
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts
    });
  }
}
