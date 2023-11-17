import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IAttestationFormValues,
  IPassFormValues,
} from 'src/app/user/interfaces/form.interfaces';
import { jsPDF } from 'jspdf';
import { xd } from 'src/app/user/templates/passing-intership-pdf';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
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
    this.generatePDF();
  }

  generatePDF() {
    // Utwórz nowy obiekt jsPDF
    const pdf = new jsPDF();

    var html = htmlToPdfmake(xd);
    // Dodaj treść do pliku PDF
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();

    // Zapisz plik PDF
  }

  toggleNextActive() {
    this.nextActive = true;
  }
}
