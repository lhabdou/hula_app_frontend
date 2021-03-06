import { Constantes } from './../constantes/constantes.utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
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

private categorieData = new BehaviorSubject<any>(this.getCategories());

currentCategories = this.categorieData.asObservable(); 


  getCategories(): Promise<Object> {

   return this.httpClient.get(this.backendURL + this.categoriesUrl)
    .toPromise();
    
  }

  goToCategorie(id:Number): Promise<Object>  {
    return this.httpClient.get(this.backendURL + this.categorieUrl + id)
    .toPromise();
  }
}


