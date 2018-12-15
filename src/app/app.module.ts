import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import {HttpModule} from '@angular/http'
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtwComponent } from './htw/htw.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { HostsComponent } from './hosts/hosts.component';
const routes:Routes=[
  {path:''  ,redirectTo:'login', pathMatch:'full'},
  { path:'home',component:HomeComponent },
  { path:'register',component:RegComponent },
  { path:'hosts',component:HostsComponent },
  { path:'login',component:LoginComponent },
  { path:'htw',component:HtwComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtwComponent,
    LoginComponent,
    RegComponent,
    HostsComponent
  ],
  imports: [
    BrowserModule,HttpModule,RxReactiveFormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
