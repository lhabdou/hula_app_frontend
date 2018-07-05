import { Constantes } from './../constantes/constantes.utils';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

import{Http} from '@angular/http';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
private categories:any;

  constructor(
    private categoriesService: CategoriesService) { }

    loadCategories():any {

      return this.categoriesService.getCategories();
    }

    ngOnInit() {

      this.categories = this.loadCategories();
    }

}

