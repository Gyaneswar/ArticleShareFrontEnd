import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { FetcharticlesComponent } from './fetcharticles/fetcharticles.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fetch', component: FetcharticlesComponent },
  { path: 'viewarticle', component: ViewarticleComponent },
  { path: 'create', component: CreatearticleComponent },
  { path: 'review', component: AdminreviewComponent },
  { path: '', redirectTo: '/fetch', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
