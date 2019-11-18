import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { BlogsService } from '../shared/blogs.service';
import { IBlog } from '../shared/blog.model';
import { slideUpDownAnimation } from '../animations/slide-up-down-animation';
import { scaleContentYAnimation } from '../animations/content-scale-animation';

@Component({
  selector: 'app-my-journey',
  templateUrl: './my-journey.component.html',
  styleUrls: ['./my-journey.component.scss'],
  animations: [
    slideUpDownAnimation,
    scaleContentYAnimation
  ],
})
export class MyJourneyComponent implements OnInit {
  blogs: IBlog[];
  numberOfBlogs;
  constructor(private blogService: BlogsService) {
    this.numberOfBlogs = 5;
   }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.numberOfBlogs === 0) {
      return;
    }
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight + 10;
    const max = document.documentElement.scrollHeight;
    if (pos >= max )   {
      this.numberOfBlogs += 5;
      this.blogService.getBlogs(this.numberOfBlogs - 5)
        .subscribe(extraBlogs => {
          if (extraBlogs.length === 0) {
            this.numberOfBlogs = 0;
          }
          extraBlogs.forEach(blog => {
            blog.date = blog.date.slice(0, 16);
            this.blogs.push(blog);
          });
      });
    }
  }

  ngOnInit() {
    this.blogService.getBlogs(0)
      .subscribe(blogsData => {
        blogsData.forEach(blog => blog.date = blog.date = blog.date.slice(0, 17));
        this.blogs = blogsData;
    });
  }
}
