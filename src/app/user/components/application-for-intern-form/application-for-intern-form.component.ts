import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { contractInternship } from '../../templates/contract-internship-pdf';
import { UserService } from 'src/app/core/user.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  ) {
    (pdfMake as any).fonts = {
      times: {
        normal:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
        bold: 'https://db.onlinewebfonts.com/t/9ddfee5c410187b783c0be8d068a8273.ttf',
        italics:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
        bolditalics:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
      },
    };
  }

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

  prepareDocument() {
    const html = htmlToPdfmake(
      contractInternship(
        this.applicationForm.value,
        this.userService.user.getValue()
      )
    );

    const documentDefinition = {
      defaultStyle: {
        font: 'times', // Ustaw nazwę lokalnej czcionki
      },
      content: html,
    };
    return documentDefinition;
  }

  generatePDF() {
    pdfMake.createPdf(this.prepareDocument()).download('zalacznikNr4.pdf');
  }

  printSubmit() {
    pdfMake.createPdf(this.prepareDocument()).print();
  }

  submitHandler() {
    this.generatePDF();
  }
}
