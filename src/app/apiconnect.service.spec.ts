import { TestBed } from '@angular/core/testing';
import { ArticleService } from './apiconnect.service';
import { HttpClient } from '@angular/common/http';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            { provide: HttpClient, useValue: {} },
        ],
    });
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
