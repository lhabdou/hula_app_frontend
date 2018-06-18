import { Http } from '@angular/http';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ParamMap, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  private produits:any;
  private categorie: any; 
  private categorieUrl = "hula-app/categorie"; 
  

    ngOnInit() {

     //this.categorie = this.categoriesService.goToCategorie('1');
      //this.produits = this.categorie.produits;
    }

}
