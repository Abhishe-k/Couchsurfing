import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RxwebValidators,RxFormBuilder } from "@rxweb/reactive-form-validators";
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  [x: string]: any;
  formdata;
  email;
  

  constructor( private formBuilder: RxFormBuilder) { }

  ngOnInit() {
    this.formdata = new FormGroup({
       email:new FormControl(" ",Validators.compose([
         Validators.required,
         Validators.email,
       ]) ),
       name:new FormControl(" ",Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(15),
        
    ]))
  },
  this.formdata = this.formBuilder.group({
    _passwd: ['', RxwebValidators.password({ validation: { maxLength: 10, minLength: 5, digit: true, specialCharacter: true } })], 
    get passwd() {
      return this._passwd;
    },
    set passwd(value) {
      this._passwd = value;
    },
    rpasswd:['', RxwebValidators.compare({fieldName:'password' })],
  }));      
}
}
