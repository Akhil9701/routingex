import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { ContactusComponent } from './contactus/contactus.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { ShowallplayersComponent } from './showallplayers/showallplayers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdateplayersComponent } from './updateplayers/updateplayers.component';

let routArray: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'addPlayers', component: AddplayersComponent },
  { path: 'showallplayers', component: ShowallplayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'`updateplayers`/:id',component:UpdateplayersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    ContactusComponent,
    AddplayersComponent,
    ShowallplayersComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    UpdateplayersComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
