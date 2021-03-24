import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [ListUserComponent, UserFormComponent],
  imports: [
    CommonModule
  ],
  exports: [ListUserComponent, UserFormComponent]
})
export class UserModule { }