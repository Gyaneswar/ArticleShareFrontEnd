import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FetcharticlesComponent } from './fetcharticles/fetcharticles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { fetchapiservice } from './Services/fetchService';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { FormsModule } from '@angular/forms';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { registerapiservice } from './Services/RegisterService';
import { loginservice } from './Services/loginservice';
import { AdminreviewComponent } from './adminreview/adminreview.component';
import { postArticles } from './Services/postArticle';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FetcharticlesComponent,
    NotfoundComponent,
    ViewarticleComponent,
    CreatearticleComponent,
    AdminreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [fetchapiservice,registerapiservice,loginservice,postArticles],
  bootstrap: [AppComponent]
})
export class AppModule { }
