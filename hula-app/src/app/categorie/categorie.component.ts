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

  private categorie:any;
  private categorieUrl = "hula-api/categorie"; 

  constructor(
    private categoriesService: CategoriesService, 
    private route:Router, private paramMap:ParamMap,
    private http:Http) { }

    ngOnInit() {
      
      this.categorie = this.http.get(this.route.url);
    }

}
