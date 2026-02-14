// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-linkedin-post',
//   imports: [],
//   templateUrl: './linkedin-post.component.html',
//   styleUrl: './linkedin-post.component.css'
// })
// export class LinkedinPostComponent {

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-linkedin-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-post.component.html',
  styleUrl: './linkedin-post.component.css'
})
export class LinkedinPostComponent {

  title = 'LinkedIn Posts';
  
  intro = 'I regularly share insights on UX design, product thinking, and full-stack development. Here are some of my recent posts.';

  posts = [
    {
      id: '7412653519473647616',
      title: 'Post 1'
    },
    {
      id: '7416286490496057344',
      title: 'Post 2'
    },
    {
      id: '7414759881074757632',
      title: 'Post 3'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getEmbedUrl(postId: string): SafeResourceUrl {
    const url = `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${postId}?collapsed=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
