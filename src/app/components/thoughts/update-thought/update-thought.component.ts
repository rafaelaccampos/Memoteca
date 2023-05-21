import { Component } from '@angular/core';
import { Thought } from '../Thought';
import { ThoughtsService } from '../thoughts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent {

  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
  )
  {

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
    });
  }

  updateThought(){
    this.thoughtService.update(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    })
  }

  cancel(){
    this.router.navigate(['/listThought']);
  }
}
