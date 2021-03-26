import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameColorDirective } from './username-color.directive';
import { ListPostComponent } from './list-post/list-post.component';


@NgModule({
  declarations: [ListUserComponent, UserFormComponent, UsernameColorDirective, ListPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListUserComponent, UserFormComponent, ListPostComponent],
  providers:[]
})
export class UserModule { }
