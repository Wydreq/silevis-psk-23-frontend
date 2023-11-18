import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-application-for-intern-form',
  templateUrl: './application-for-intern-form.component.html',
  styleUrls: ['./application-for-intern-form.component.scss'],
})
export class ApplicationForInternFormComponent implements OnInit {
  protected applicationForm: FormGroup;

  ngOnInit(): void {
    this.applicationForm = new FormGroup({
      agreementDate: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      company: new FormGroup({
        companyName: new FormControl(null, Validators.required),
        companyCity: new FormControl(null, Validators.required),
        companyStreet: new FormControl(null, Validators.required),
        krs: new FormControl(null, Validators.required),
        nip: new FormControl(null, Validators.required),
        regon: new FormControl(null, Validators.required),
        companyRepresentedBy: new FormControl(null, Validators.required),
      }),
      internStartDate: new FormControl(null, Validators.required),
      internEndDate: new FormControl(null, Validators.required),
      companySupervisorContact: new FormGroup({
        phoneNumber: new FormControl(null, Validators.required),
        emailAddress: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
      }),
      universitySupervisorContact: new FormGroup({
        phoneNumber: new FormControl(null, Validators.required),
        emailAddress: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
      }),
    });
  }

  submitHandler() {}
}
