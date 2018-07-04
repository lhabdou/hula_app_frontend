import { Http } from '@angular/http';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})

export class CategorieComponent implements OnInit {

  private categorie:any; 

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
  private router: Router ) { }
    
    ngOnInit() {
      const selectedId = +this.route.snapshot.paramMap.get('id');
      console.log("Hello" + selectedId);

      this.getCategorie(selectedId);
    }

    getCategorie(id:Number) {
    this.categorie = this.categoriesService.goToCategorie(id).then(
      categorie=>{
        this.categorie = categorie; 
      }
    );
    
    }

}
