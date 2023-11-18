import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IAttestationFormValues,
  IPassFormValues,
} from 'src/app/user/interfaces/form.interfaces';
import { jsPDF } from 'jspdf';
import { traineeApplication } from 'src/app/user/templates/passing-intership-pdf';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { cerificateInternship } from 'src/app/user/templates/certificate-internship-pdf';
import { contractInternship } from 'src/app/user/templates/contract-internship-pdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
    this.generatePDF(this.passFormValues, attestationFormValues);
  }

  generatePDF(
    passFormValues: IPassFormValues,
    attestationFormValues: IAttestationFormValues
  ) {
    const html = htmlToPdfmake(traineeApplication(passFormValues));
    // const certificate = htmlToPdfmake(
    //   cerificateInternship(attestationFormValues)
    // );

    const contract = htmlToPdfmake(contractInternship());

    const documentDefinition = {
      content: contract, ///htm
    };

    pdfMake.createPdf(documentDefinition).download('zalacznikNr4.pdf');

    // setTimeout(() => {
    //   const documentDefinition2 = { content: certificate };
    //   pdfMake.createPdf(documentDefinition2).download('zaswiadczenie.pdf');
    // }, 600);
  }

  toggleNextActive() {
    this.nextActive = true;
  }
}
