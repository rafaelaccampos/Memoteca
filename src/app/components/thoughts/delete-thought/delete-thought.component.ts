import { Component } from '@angular/core';
import { ThoughtsService } from '../thoughts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../Thought';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {

  constructor(
    private thoughtService: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    thought: Thought = {
      id: 0,
      content: '',
      author: '',
      model: ''
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
        this.thought = thought;
      })
    }

    deleteThought(){
      if(this.thought.id){
          this.thoughtService.delete(this.thought.id!).subscribe(() => {
            this.router.navigate(['/listThought']);
        });
      }
    }

    cancel() {
      this.router.navigate(['/listThought']);
    }
}
