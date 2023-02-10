import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  myArray = ['val1','val2','val3','val4'];

  constructor(private fb : FormBuilder){
  }

  ngOnInit(){
      for(let a = 0; a < this.myArray.length; a++){
        this.inputsdata.push(this.fb.control(this.myArray[a]));
      }
  }

  stepsForm = this.fb.group({
    inputsdata: this.fb.array([]),
  });

  get inputsdata() {
    return this.stepsForm.get('inputsdata') as FormArray;
  }

  saveData(){
    console.log(this.inputsdata);
  }
}
