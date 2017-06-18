import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { ValidateSubtitle } from "app/shared/validate-length";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  data: any = {};
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': ['This is title', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]],
      'metadata': this.fb.group({
        'subtitle': ['This is subtitle', [
          Validators.required,
          ValidateSubtitle
        ]]
      }),
      'addresses': this.fb.array([
        this.fb.control('Address 1'),
        this.fb.control('Address 2')
      ])
    });
  }

  doSubmit(form: NgForm, $event) {
    console.log(form);
    console.log($event);
    if (form.invalid) {
      alert('表單無效，請檢查欄位!');
    }
  }

  addNewAddress() {
    let addresses = this.form.get('addresses') as FormArray;

    addresses.push(
      this.fb.control('New Address')
    );
  }

  checkValid(form: NgForm, fieldName: string) {
    return (form['submitted'] && this.form.get(fieldName)['touched'] && this.form.get(fieldName)['invalid']);
  }
}
