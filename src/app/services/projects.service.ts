import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { CategoryTypes } from '../models/category-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project1/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project1/process-img-1.jpg',
        'images/projects/project1/process-img-2.jpg',
        'images/projects/project1/process-img-3.jpg',
        'images/projects/project1/process-img-4.jpg',
        'images/projects/project1/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project1/styleframe-img-1.jpg',
        'images/projects/project1/styleframe-img-2.jpg',
        'images/projects/project1/styleframe-img-3.jpg',
        'images/projects/project1/styleframe-img-4.jpg',
        'images/projects/project1/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project2/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project2/process-img-1.jpg',
        'images/projects/project2/process-img-2.jpg',
        'images/projects/project2/process-img-3.jpg',
        'images/projects/project2/process-img-4.jpg',
        'images/projects/project2/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project2/styleframe-img-1.jpg',
        'images/projects/project2/styleframe-img-2.jpg',
        'images/projects/project2/styleframe-img-3.jpg',
        'images/projects/project2/styleframe-img-4.jpg',
        'images/projects/project2/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.MotionGraphics
    },
    {
      id: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project3/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project3/process-img-1.jpg',
        'images/projects/project3/process-img-2.jpg',
        'images/projects/project3/process-img-3.jpg',
        'images/projects/project3/process-img-4.jpg',
        'images/projects/project3/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project3/styleframe-img-1.jpg',
        'images/projects/project3/styleframe-img-2.jpg',
        'images/projects/project3/styleframe-img-3.jpg',
        'images/projects/project3/styleframe-img-4.jpg',
        'images/projects/project3/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ThreeDimensionalAnimations
    },
    {
      id: 4,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project4/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project4/process-img-1.jpg',
        'images/projects/project4/process-img-2.jpg',
        'images/projects/project4/process-img-3.jpg',
        'images/projects/project4/process-img-4.jpg',
        'images/projects/project4/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project4/styleframe-img-1.jpg',
        'images/projects/project4/styleframe-img-2.jpg',
        'images/projects/project4/styleframe-img-3.jpg',
        'images/projects/project4/styleframe-img-4.jpg',
        'images/projects/project4/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.TwoDimensionalAnimations
    },
    {
      id: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project5/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project5/process-img-1.jpg',
        'images/projects/project5/process-img-2.jpg',
        'images/projects/project5/process-img-3.jpg',
        'images/projects/project5/process-img-4.jpg',
        'images/projects/project5/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project5/styleframe-img-1.jpg',
        'images/projects/project5/styleframe-img-2.jpg',
        'images/projects/project5/styleframe-img-3.jpg',
        'images/projects/project5/styleframe-img-4.jpg',
        'images/projects/project5/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.VideoProduction
    },
    {
      id: 6,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project6/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project6/process-img-1.jpg',
        'images/projects/project6/process-img-2.jpg',
        'images/projects/project6/process-img-3.jpg',
        'images/projects/project6/process-img-4.jpg',
        'images/projects/project6/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project6/styleframe-img-1.jpg',
        'images/projects/project6/styleframe-img-2.jpg',
        'images/projects/project6/styleframe-img-3.jpg',
        'images/projects/project6/styleframe-img-4.jpg',
        'images/projects/project6/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
    {
      id: 7,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project7/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project7/process-img-1.jpg',
        'images/projects/project7/process-img-2.jpg',
        'images/projects/project7/process-img-3.jpg',
        'images/projects/project7/process-img-4.jpg',
        'images/projects/project7/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project7/styleframe-img-1.jpg',
        'images/projects/project7/styleframe-img-2.jpg',
        'images/projects/project7/styleframe-img-3.jpg',
        'images/projects/project7/styleframe-img-4.jpg',
        'images/projects/project7/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ThreeDimensionalAnimations
    },
    {
      id: 8,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project8/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project8/process-img-1.jpg',
        'images/projects/project8/process-img-2.jpg',
        'images/projects/project8/process-img-3.jpg',
        'images/projects/project8/process-img-4.jpg',
        'images/projects/project8/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project8/styleframe-img-1.jpg',
        'images/projects/project8/styleframe-img-2.jpg',
        'images/projects/project8/styleframe-img-3.jpg',
        'images/projects/project8/styleframe-img-4.jpg',
        'images/projects/project8/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.MotionGraphics
    },
    {
      id: 9,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project9/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project9/process-img-1.jpg',
        'images/projects/project9/process-img-2.jpg',
        'images/projects/project9/process-img-3.jpg',
        'images/projects/project9/process-img-4.jpg',
        'images/projects/project9/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project9/styleframe-img-1.jpg',
        'images/projects/project9/styleframe-img-2.jpg',
        'images/projects/project9/styleframe-img-3.jpg',
        'images/projects/project9/styleframe-img-4.jpg',
        'images/projects/project9/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.VideoProduction
    },
    {
      id: 10,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      title: 'Title 1',
      mainImg: 'images/projects/project10/main-img.jpg',
      processDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet quia autem quis, dolore recusandae impedit architecto temporibus sint beatae praesentium veritatis aperiam labore dolorum doloremque dolorem minima quod nobis?',
      processImages: [
        'images/projects/project10/process-img-1.jpg',
        'images/projects/project10/process-img-2.jpg',
        'images/projects/project10/process-img-3.jpg',
        'images/projects/project10/process-img-4.jpg',
        'images/projects/project10/process-img-5.jpg',
      ],
      styleframeImages: [
        'images/projects/project10/styleframe-img-1.jpg',
        'images/projects/project10/styleframe-img-2.jpg',
        'images/projects/project10/styleframe-img-3.jpg',
        'images/projects/project10/styleframe-img-4.jpg',
        'images/projects/project10/styleframe-img-5.jpg',
      ],
      categoryType: CategoryTypes.ClientWork
    },
  ];

  constructor () { }

  getProjectById = (id: number) => this.getProjects('all').find(project => project.id === id);

  getProjects = (categoryType: CategoryTypes | 'all') =>
    categoryType === 'all'
      ? structuredClone(this.projects)
      : structuredClone(this.projects)
        .filter(project => project.categoryType === categoryType);
}
