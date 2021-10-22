import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {

  public form: FormGroup;
  formSubmitted: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      isBestSeller: new FormControl(null),
    })

  }

  onFormSubmit(form) {
    this.formSubmitted = true;

    setTimeout(() => {
      this.formSubmitted = false;
    }, 5000)
    console.log(form);
  }
}
