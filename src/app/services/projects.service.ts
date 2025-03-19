import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { CategoryTypes } from '../models/category-types.enum';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url: string = 'data/projects.json'

  constructor(private httpClient: HttpClient) { }

  getProjectById = (id: number) => this.getProjects('all')
    .pipe(map(data => {
      return data.find(project => project.id === id)
    }));

  getProjects = (categoryType: CategoryTypes | 'all') => {
    return this.httpClient.get<Project[]>(this.url).pipe(
      map(data => data.reverse()),
      map(data => {
      return categoryType === 'all' ? data : data.filter(project => project.categoryType === (categoryType as unknown as CategoryTypes));
    }))
  }
}
