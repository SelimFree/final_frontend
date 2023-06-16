import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ArticleService } from 'src/app/apiconnect.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
    post: any;
    post$: any;
    id: number = 0;
    constructor (private articleService : ArticleService, private route : ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            this.id = parseInt(param["id"]);
        })

        this.post$ = this.articleService.getArticle(this.id).pipe(map((data) => (this.post = data)));

    }

}

