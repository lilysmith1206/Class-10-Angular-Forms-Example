import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {

  formResults = {
    title: '',
    genre: '',
    author: '',
    isBestSeller: ''
  }

  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {

    for (let prop in form.value) {
      this.formResults[prop] = form.value[prop];
    }

    this.formSubmitted = true;

    setTimeout( () => {
      this.formSubmitted = false;
    }, 5000);
  }

}
