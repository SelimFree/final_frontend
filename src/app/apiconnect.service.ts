import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http://localhost';

  constructor(private http: HttpClient) {}

  getArticle(id: number) {
    return this.http.get(`${this.baseUrl}/article/${id}`);
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/articles`);
  }

  updateArticle(id: number, article: any) {
    return this.http.put(`${this.baseUrl}/article/${id}`, article);
  }

  deleteArticle(id: number) {
    return this.http.delete(`${this.baseUrl}/article/${id}`);
  }

  createArticle(article: any) {
    return this.http.post(`${this.baseUrl}/articles`, article);
  }
}
