import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IAttestationFormValues,
  IPassFormValues,
} from 'src/app/user/interfaces/form.interfaces';

@Component({
  selector: 'app-passing-intership-form',
  templateUrl: './passing-intership-form.component.html',
  styleUrls: ['./passing-intership-form.component.scss'],
})
export class PassingIntershipFormComponent {
  private passFormValues!: IPassFormValues;
  protected nextActive = false;
  protected attestationForm!: FormGroup;

  protected passSubmitHandler(formValue: IPassFormValues) {
    this.nextActive = true;
    this.passFormValues = formValue;
  }

  protected attestationSubmitHandler(
    attestationFormValues: IAttestationFormValues
  ) {
    console.log(attestationFormValues);
    console.log(this.passFormValues);
  }

  toggleNextActive() {
    this.nextActive = true;
  }
}
