import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/apiconnect.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {
    user: string = "Some user";
    constructor(private articleService : ArticleService, private router: Router) {}

    ngOnInit(): void {}

    createPost(data:any) {
        try {
            let now = new Date()
            // Passing the data from the html form and adding a user property to it, then posting
            console.log({...data, Posted: now})
            return this.articleService.createArticle({...data, Posted: now}).subscribe((result) => {
                // Go back to some page
                this.router.navigateByUrl("/")
            });
        } catch (err) {
            console.log(err)
            return;
        }

    }
}
