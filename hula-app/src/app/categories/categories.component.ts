import { Constantes } from './../constantes/constantes.utils';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import{HttpModule,Http,Response} from '@angular/http';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
private categories:any;

  constructor(
    private categoriesService: CategoriesService,
    private constantes:Constantes,
  private http: Http) { }

    ngOnInit() {
      this.categories = this.categoriesService.getCategories();
      );

    }

}

