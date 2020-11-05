import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

// const: 常數變數設定方法;
// routes變數名稱 ;
// Routes變數的類別(資料型態) ;
// []在這之中加入自料欄位的規則
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'introduction', component: IntroComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
