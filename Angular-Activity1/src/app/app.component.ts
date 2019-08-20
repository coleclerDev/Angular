import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas ex quis quam malesuada iaculis. Vivamus semper bibendum orci. Mauris libero urna, auctor in interdum a, dapibus ut enim. Praesent porttitor, risus quis fermentum dignissim, purus turpis facilisis elit, in facilisis libero lorem iaculis magna. Mauris sit amet egestas neque, vel tempus enim.',
      loveIts: 0
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas ex quis quam malesuada iaculis. Vivamus semper bibendum orci. Mauris libero urna, auctor in interdum a, dapibus ut enim. Praesent porttitor, risus quis fermentum dignissim, purus turpis facilisis elit, in facilisis libero lorem iaculis magna. Mauris sit amet egestas neque, vel tempus enim.',
      loveIts: 0
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas ex quis quam malesuada iaculis. Vivamus semper bibendum orci. Mauris libero urna, auctor in interdum a, dapibus ut enim. Praesent porttitor, risus quis fermentum dignissim, purus turpis facilisis elit, in facilisis libero lorem iaculis magna. Mauris sit amet egestas neque, vel tempus enim.',
      loveIts: 0
    }
  ];
}
