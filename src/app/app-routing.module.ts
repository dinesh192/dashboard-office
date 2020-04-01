import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SignUpLayoutComponent } from './layouts/default/sign-up-layout/sign-up.component';
import { SignInLayoutComponent } from './layouts/default/sign-in-layout/sign-in.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ListCollaboratorComponent } from './shared/components/list-collaborator/list-collaborator.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'collaborator-list',
        component: ListCollaboratorComponent,
        data: { animation: 'signUP' },
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'sign-in',
    component: SignInLayoutComponent,
    data: { animation: 'signIN' }
  },
  // {
  //   path: 'sign-up',
  //   component: SignUpLayoutComponent,
  //   data: { animation: 'signUP' }
  // },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
