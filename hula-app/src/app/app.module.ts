import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ParamMap, ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CategoriesComponent } from './categories/categories.component';
import { Constantes } from './constantes/constantes.utils';
import { CategorieComponent } from './categorie/categorie.component';
import { MenuComponent } from './menu/menu.component';
 
const appRoutes: Routes = [

  {path: 'home', component: HomeComponent}, 
  {path: 'contacts', component: ContactsComponent}, 
  {path: 'categories', component: CategoriesComponent},
  {path: 'categorie/:id', component: CategorieComponent},  
  {path: '', redirectTo:'/home', pathMatch:'full'} 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    CategoriesComponent,
    CategorieComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
