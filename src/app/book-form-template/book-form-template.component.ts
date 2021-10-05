import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css'],
})
export class BookFormTemplateComponent {
  bookTitle = '';
  formHasBeenSubmitted = false;
  bookDetails = {
    title: '',
    author: '',
    genre: '',
  };

  onFormSubmit(formObj: NgForm) {
    // console.log('Submitted!', formObj);

    // Set Local "bookDetails" object to the values on the form inputs
    this.bookDetails.title = formObj.value.title;
    this.bookDetails.author = formObj.value.author;
    this.bookDetails.genre = formObj.value.genre;
    this.formHasBeenSubmitted = true;

    // Reset our Form
    formObj.reset();
  }
}
