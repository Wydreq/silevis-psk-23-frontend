import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPassFormValues } from 'src/app/user/interfaces/form.interfaces';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.scss'],
})
export class PassFormComponent implements OnInit {
  @Output() passFormSubmitHandle = new EventEmitter<IPassFormValues>();
  passForm!: FormGroup;

  protected userMock = {
    id: '36293',
    firstName: 'Jakub',
    lastName: 'Nowak',
    staffStatus: 0,
    studentStatus: 1,
    email: 's022222@student.tu.kielce.pl',
    studentNumber: '22222',
    traineeManager: 'somesome',
    studentProgrammes: [
      {
        id: '1',
        programme: 'Informatyka',
      },
    ],
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createPassForm();
  }

  submitHandler() {
    this.passFormSubmitHandle.emit(this.passForm.value);
  }
  private createPassForm() {
    this.passForm = this.formBuilder.group({
      firstName: this.userMock.firstName,
      lastName: this.userMock.lastName,
      studentNumber: this.userMock.studentNumber,
      programme: [''],
      year: [],
      studiesForm: ['stacjonarne'],
      deputyDean: [''],
      academicYear: [],
      practicesBase: [''],
      traineeManager: [''],
    });
  }
}
