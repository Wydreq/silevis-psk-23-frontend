import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { contractInternship } from '../../templates/contract-internship-pdf';
import { UserService } from 'src/app/core/user.service';
import { ManageDatesService } from 'src/app/admin/services/manage-dates.service';
import { TranslateService } from '@ngx-translate/core';
import { contractInternshipEn } from '../../templates/contractIntershipEn';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-application-for-intern-form',
  templateUrl: './application-for-intern-form.component.html',
  styleUrls: ['./application-for-intern-form.component.scss'],
})
export class ApplicationForInternFormComponent implements OnInit {
  protected applicationForm: FormGroup;
  protected dates: any;

  constructor(
    private companyService: CompanyService,
    private userService: UserService,
    private manageDatesService: ManageDatesService,
    private translate: TranslateService
  ) {
    (pdfMake as any).fonts = {
      times: {
        normal:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
        bold: 'https://db.onlinewebfonts.com/t/f3a3df668a6b2982e99096657b8dba7f.ttf',
        italics:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
        bolditalics:
          'https://db.onlinewebfonts.com/t/32441506567156636049eb850b53f02a.ttf',
      },
    };
  }

  ngOnInit(): void {
    this.initForm();
    this.manageDatesService.getDates();
    this.manageDatesService.practisesDates.subscribe((dates) => {
      this.dates = dates;
      console.log(dates);
    });
  }

  initForm() {
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
      internDateRange: new FormControl(null, Validators.required),
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
      this.translate.currentLang === 'pl'
        ? contractInternship(this.applicationForm.value)
        : contractInternshipEn(this.applicationForm.value)
    );

    const documentDefinition = {
      defaultStyle: {
        font: 'times',
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
