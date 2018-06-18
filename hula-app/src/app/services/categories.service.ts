import { Constantes } from './../constantes/constantes.utils';
import { Injectable } from '@angular/core';
import { RouterModule, Routes, ParamMap, ActivatedRoute, Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{HttpModule,Http,Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: Http, public constantes:Constantes) { }

private categoriesUrl = "hula-api/categories"; 
private categorieUrl = "hula-api/categorie"; 
backendURL = this.constantes.LOCAL_BACKEND_URL; 


  getCategories() {

    this.http.get(this.backendURL + this.categoriesUrl)
    .toPromise()
    .then(
      res => {
        return res.json(); 
     })
    
  }


}
