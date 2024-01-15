import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('loginDialog', { static: true })
  loginDialog!: ElementRef<HTMLDialogElement>

  constructor(protected authService: AuthService) {
  }

  ngOnInit() {
    this.loginDialog.nativeElement.showModal();
  }
}
