import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { contractInternship } from '../../templates/contract-internship-pdf';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-application-for-intern-form',
  templateUrl: './application-for-intern-form.component.html',
  styleUrls: ['./application-for-intern-form.component.scss'],
})
export class ApplicationForInternFormComponent implements OnInit {
  protected applicationForm: FormGroup;

  constructor(
    private companyService: CompanyService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.applicationForm = new FormGroup({
      agreementDate: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      company: new FormGroup({
        companyName: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),

        krs: new FormControl(null, Validators.required),
        nip: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
        ]),
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

  get controls() {
    return this.applicationForm.controls;
  }

  get companyControls() {
    return (this.controls['company'] as FormGroup).controls;
  }
  getCompanyByNip() {
    this.companyService
      .getCompany(this.companyControls['nip'].value)
      .subscribe((res: any) => {
        this.companyControls['regon'].setValue(res['regon'] || '');
        this.companyControls['krs'].setValue(res['krs'] || '');
        this.companyControls['companyName'].setValue(res['name'] || '');
        this.companyControls['address'].setValue(res['workingAddress'] || '');
        this.companyControls['companyRepresentedBy'].setValue(
          `${
            res['representatives'][0]
              ? res['representatives'][0].firstName || ''
              : ''
          } ${
            res['representatives'][0]
              ? res['representatives'][0].lastName || ''
              : ''
          }`
        );
      });
  }

  generatePDF(passFormValues: any, attestationFormValues: any) {
    const html = htmlToPdfmake(
      contractInternship(
        this.applicationForm.value,
        this.userService.user.getValue()
      )
    );

    const documentDefinition = {
      content: html, ///htm
    };

    pdfMake.createPdf(documentDefinition).download('zalacznikNr4.pdf');
  }

  submitHandler() {}
}
