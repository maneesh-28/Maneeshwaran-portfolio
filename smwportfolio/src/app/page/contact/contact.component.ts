import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent {
  loading = false;
  contactForm: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.http.post('http://localhost:5000/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.toastr.success('Message sent successfully!');
        this.contactForm.reset();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Something went wrong. Please try again.');
        this.loading = false;
      },
    });
  }
}