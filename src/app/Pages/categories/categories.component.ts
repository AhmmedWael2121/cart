import { TranslatePipe } from '@ngx-translate/core';
import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../Core/Services/Category/category.service';
import { ICategory } from '../../Shared/Interfaces/Category/icategory';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../Shared/Pipe/Search/search.pipe';


@Component({
  selector: 'app-categories',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  category : ICategory[] = []
  private readonly _categoryService = inject(CategoryService)

  ngOnInit(): void {
    this.Category()
  }
  
  Category(){
    this._categoryService.getCategoryList().subscribe({
      next: (response) => {
        this.category = response.data;
        },
    })
  }
}
