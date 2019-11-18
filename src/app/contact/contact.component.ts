import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../shared/comments.service';
import { slideUpDownAnimation } from '../animations/slide-up-down-animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideUpDownAnimation]
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;
  messageSent: boolean;

  constructor(private commentsService: CommentsService) {
  }

  submit(formValues) {
    this.commentsService.sendComment(formValues)
      .subscribe(response => this.messageSent = response);
    setTimeout(() => this.messageSent = false , 10000);
  }
  ngOnInit() {
  }

}
