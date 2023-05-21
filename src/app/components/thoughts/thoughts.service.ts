import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './Thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThoughtsService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  getAll() : Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  getById(id: number) : Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

  update(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number) : Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }
}
