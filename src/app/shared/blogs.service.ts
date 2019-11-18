import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlog } from './blog.model';
import { blogSiteToken } from 'src/assets/tokens';

@Injectable()
export class BlogsService {
  constructor(private http: HttpClient) {
  }
  getBlogs(numberOfBlogs) {
    return this.http.get<IBlog[]>(
      'https://purplestriped-blog-server.herokuapp.com/blogs?numberOfBlogs=' + numberOfBlogs,
    {
      headers: {
        token: blogSiteToken
      }
    });
  }
}
