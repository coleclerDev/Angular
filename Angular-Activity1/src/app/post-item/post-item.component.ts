import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  loveIts = 0;

  constructor() {
    this.postDate = new Date();
  }

  ngOnInit() {
  }

  addLoveIt() {
    this.loveIts++;
    console.log(this.loveIts);
  }

  removeLoveIt() {
    this.loveIts--;
    console.log(this.loveIts);
  }

}
