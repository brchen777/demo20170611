import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  form: any = {};
  data: any = {};
  addresses: any[] = [
    '',
    ''
  ];

  constructor() { }

  ngOnInit() {
    this.data = {
      'title': 'This is title.',
      'subtitle': 'This is subtitle.',
      'addresses': [
        'Address 1',
        'Address 2'
      ]
    };
  }

  doSubmit(form: NgForm, $event) {
    console.log(form);
    console.log($event);
    this.form = form;
    if (form.invalid) {
      alert('表單無效，請檢查欄位!');
    }
  }

  checkValid(field) {
      return (this.form['submitted'] && field['touched'] && field['invalid']);
    }
}
