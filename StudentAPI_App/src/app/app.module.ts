import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { StudentComponent} from "./student/student.component";
import { ShowStudentComponent } from "./student/show-student/show-student.component";
import { AddEditStudentComponent } from "./student/add-edit-student/add-edit-student.component";

import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';

@NgModule({
    declarations: [
      AppComponent,
      StudentComponent,
      ShowStudentComponent,
      AddEditStudentComponent,
      DepartmentComponent,
      ShowDepartmentComponent,
      AddEditDepartmentComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [SharedService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }