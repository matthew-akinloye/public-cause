import { Component } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  standalone: false,
  
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.scss'
})
export class GetInvolvedComponent {
  isSubmit: boolean = false;
  message: string = 'Submit failed';
  formData = {
    name: '',
    email: '',
    selectedCause: ''
  };


  causes = ['Environmental Protection', 'Education', 'Healthcare', 'Animal Welfare'];


  onSubmit() {
    console.log('Form submitted with the following data:', this.formData);
    this.isSubmit = true;
    this.message = 'Thank you for getting involved!';
    this.formData = {
      name: '',
      email: '',
      selectedCause: ''
    };
  }
}
