import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  myArray = ['val1', 'val2', 'val3', 'val4'];
  stepsForm = FormGroup;
  myData:any;

  constructor(fb: FormBuilder) {
    this.stepsForm = fb.group({
      inputsdata: fb.array([]),
    });

    for (let a = 0; a < this.myArray.length; a++) {
      this.inputsdata.push(fb.control(this.myArray[a]));
    }
  }

  get inputsdata() {
    return this.stepsForm.get('inputsdata') as FormArray;
  }

  saveData() {
    console.log(this.stepsForm.value.inputsdata);
    this.myData = this.stepsForm.value.inputsdata;
  }
}
