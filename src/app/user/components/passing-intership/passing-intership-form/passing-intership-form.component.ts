import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IAttestationFormValues,
  IPassFormValues,
} from 'src/app/user/interfaces/form.interfaces';
import { traineeApplication } from 'src/app/user/templates/passing-intership-pdf';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { cerificateInternship } from 'src/app/user/templates/certificate-internship-pdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-passing-intership-form',
  templateUrl: './passing-intership-form.component.html',
  styleUrls: ['./passing-intership-form.component.scss'],
})
export class PassingIntershipFormComponent {
  constructor() {
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
    this.generatePDF(this.passFormValues, attestationFormValues);
  }

  generatePDF(
    passFormValues: IPassFormValues,
    attestationFormValues: IAttestationFormValues
  ) {
    const html = htmlToPdfmake(traineeApplication(passFormValues));
    const certificate = htmlToPdfmake(
      cerificateInternship(attestationFormValues)
    );

    const documentDefinition = {
      content: html,
      defaultStyle: {
        font: 'times', // Ustaw nazwę lokalnej czcionki
      },
    };

    pdfMake.createPdf(documentDefinition).download('zalacznikNr4.pdf');

    setTimeout(() => {
      const documentDefinition2 = { content: certificate };
      pdfMake.createPdf(documentDefinition2).download('zaswiadczenie.pdf');
    }, 600);
  }

  printPDF(attestationFormValues: IAttestationFormValues) {
    const html = htmlToPdfmake(
      traineeApplication(this.passFormValues) +
        cerificateInternship(attestationFormValues)
    );

    const documentDefinition = {
      content: html,
      defaultStyle: {
        font: 'times',
      },
    };

    pdfMake.createPdf(documentDefinition).print();
  }

  toggleNextActive() {
    this.nextActive = true;
  }
}
