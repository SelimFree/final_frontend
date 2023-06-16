import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ArticleService } from 'src/app/apiconnect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    articles: any;
    articles$: any;
    constructor (private articleService : ArticleService) {}

    ngOnInit(): void {
        // Storing fetched data into the pipe then to be easily accessed in html template
        this.articles$ = this.articleService.getArticles().pipe(tap((data) => (this.articles = data)));
    }
}
