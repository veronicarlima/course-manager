import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    courses: Course[]=[];

    ngOnInit(): void{
        this.courses=[
            {
                id: 1,
                name : 'angular froms',
                imagemUrl: '/assets/images/forms.png',
                price : 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating:4.5,
                releaseDate:'November'
            },
            {
                id: 2,
                name : 'angular HTTP',
                imagemUrl: '/assets/images/http.png',
                price : 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating:4.0,
                releaseDate:"January"
            }
        ]
    }
}