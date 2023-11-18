import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAttestationFormValues } from 'src/app/user/interfaces/form.interfaces';

@Component({
  selector: 'app-attestation-form',
  templateUrl: './attestation-form.component.html',
  styleUrls: ['./attestation-form.component.scss'],
})
export class AttestationFormComponent implements OnInit {
  @Output() attestationFormSubmitHandler =
    new EventEmitter<IAttestationFormValues>();
  protected attestationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  protected userMock = {
    id: '36293',
    firstName: 'Jakub',
    lastName: 'Nowak',
    staffStatus: 0,
    studentStatus: 1,
    email: 's022222@student.tu.kielce.pl',
    studentNumber: '22222',
    studentProgrammes: [
      {
        id: '1',
        programme: 'Informatyka',
      },
    ],
  };

  ngOnInit(): void {
    this.createAttestationForm();
  }

  protected submitHandler() {
    this.attestationFormSubmitHandler.emit(this.attestationForm.value);
  }

  private createAttestationForm() {
    this.attestationForm = this.formBuilder.group({
      destination: 'zaliczenie praktyki studenckiej',
      fullName: `${this.userMock.firstName} ${this.userMock.lastName} `,
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyProfile: ['', Validators.required],
      workStation: ['', Validators.required],
      workTime: [, Validators.required],
      studentResponsibilities: ['', Validators.required],
      studentSuperviser: ['', Validators.required],
      comments: [''],
    });
  }
}
