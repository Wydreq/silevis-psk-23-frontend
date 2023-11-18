import { IAttestationFormValues } from '../interfaces/form.interfaces';

export function cerificateInternship({
  fullName,
  companyName,
  companyAddress,
  companyProfile,
  workStation,
  workTime,
  studentResponsibilities,
  studentSuperviser,
}: IAttestationFormValues) {
  return `
  <html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

    <h1 style="text-align: center; > Zaświadczenie </h1>
    <ol>
    <li> <b> Cel Wystawienia: </b> zaliczenie praktyki studenckiej </li>
     <li> <b> Imię i nazwisko studenta: </b> ${fullName} </li>
     <li> <b> Nazwa instytucji/zakładu, w której pracuje/pracował student: </b> ${companyName} </li>
     <li> <b> Adres instytucji/zakładu: </b> ${companyAddress} </li>
      <li> <b> Profil działalności: </b> ${companyProfile} </li>
       <li> <b> Stanowisko studenta w czasie pracy: </b> ${workStation} </li>
       <li> <b> Czas pracy: </b> ${workTime} </li>
       <li> <b> Zakres obowiązków studenta w czasie pracy w odniesieniu do kierunku jego studiów </b> ${studentResponsibilities} </li>
       <li> <b> Uwagi</b> ${studentSuperviser} </li>
       <li>Data i podpis studenta……………………………………………………………………………..</li>
    </ol>
    </html>
    `;
}
