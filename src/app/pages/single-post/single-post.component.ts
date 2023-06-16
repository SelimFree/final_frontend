import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/apiconnect.service';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
    post: any;
    id: number = 0;
    constructor(
        private articleService: ArticleService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // Gettig article id from the url
        this.route.params.subscribe((param) => {
            this.id = parseInt(param['id']);
        });

        this.articleService.getArticle(this.id).subscribe((data) => {
            this.post = data;
        });
    }
}
