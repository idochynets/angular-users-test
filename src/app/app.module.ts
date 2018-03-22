import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'Users' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'User Details' }
  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: 'Create User' }
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: { title: 'Edit User' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
