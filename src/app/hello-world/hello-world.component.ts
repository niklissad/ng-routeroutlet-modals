import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html',
  imports: [
    NgIf,
    RouterLink
  ],
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  constructor(protected authService: AuthService) {

  }

}
