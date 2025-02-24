import { Routes } from '@angular/router';
import { StudentComponent } from `./student/student.component`;
import { DepartmentComponent } from `./department/department.component`;
import { TeacherComponent } from `./teacher/teacher.component`;

export const routes: Routes = [
    { path: 'students', component: StudentComponent },
    { path: 'departments', component: DepartmentComponent },
    { path: 'teachers', component: TeacherComponent},
    { path: '', redirectTo: '/students', pathMatch: 'full' }
];
