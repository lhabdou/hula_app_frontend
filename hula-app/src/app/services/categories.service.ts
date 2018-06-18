import { Constantes } from './../constantes/constantes.utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient, 
    public constantes:Constantes) { }

private categoriesUrl = "hula-app/categories"; 
private categorieUrl = "hula-app/categorie/"; 
backendURL = this.constantes.LOCAL_BACKEND_URL; 


  getCategories() {

   return this.httpClient.get(this.backendURL + this.categoriesUrl)
    .subscribe(data => {
        console.log("voilà",data)
      })
    
  }
}


