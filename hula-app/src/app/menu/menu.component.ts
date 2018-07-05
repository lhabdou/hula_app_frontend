import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

private categoriesService: CategoriesService;


  private categ: any; 

  ngOnInit() {
  
 
  }

}
