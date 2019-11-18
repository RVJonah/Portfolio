import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blogSiteToken } from '../../assets/tokens';

@Injectable()
export class CommentsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://127.0.0.1:5000/comments';
  }
  sendComment(formValues) {
    return this.http.post<boolean>(this.url, formValues, {
      headers: {
        token: blogSiteToken
      }
    });
  }}
