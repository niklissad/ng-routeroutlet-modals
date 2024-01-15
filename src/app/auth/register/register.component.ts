import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerDialog', { static: true })
  registerDialog!: ElementRef<HTMLDialogElement>

  constructor(protected authService: AuthService) {
  }

  ngOnInit() {
    this.registerDialog.nativeElement.showModal();
  }

}
