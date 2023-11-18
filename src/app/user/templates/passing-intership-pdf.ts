import {
  IAttestationFormValues,
  IPassFormValues,
} from '../interfaces/form.interfaces';

export function traineeApplication({
  firstName,
  lastName,
  studentNumber,
  academicYear,
  studiesForm,
  programme,
  deputyDean,
  practicesBase,
  traineeManager,
}: IPassFormValues) {
  return `
  <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<div style="display:flex; width:100vw; justify-content: flex-end; text-align: right;  ">
    <div style="width:50px;  font-weight: bold">
        <div>Załącznik nr 4 do Zarządzenia Nr 54/19
         <div>Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r </div></div>
       
    </div>
</div>
<div>
${firstName} ${lastName}, ${studentNumber}
<div style="font-size: 0.8rem"> Imię i nazwisko studenta, nr albumu</div>
</div>
<div>
${programme}, ${studiesForm}
<div style="font-size: 0.8rem"> Kierunek i forma studiów</div>
</div>
<div>
${academicYear}
<div style="font-size: 0.8rem"> Rok studiów </div>
</div>


<div style="text-align: right"> Pani/Pan <div style="text-align: right"> Prodziekan ds. Studenckich Wydziału </div></div>

<b style="text-align: right"> ${deputyDean} </b>

<div style="text-align: center; font-weight: bold"> Podanie o zaliczenie praktyki studenckiej <p style="text-align: center; font-weight: normal"> Zwracam się z uprzejmą prośbą o zaliczenie mi praktyki na studiach stacjonarnych/niestacjonarnych na kierunku …………………………………….. w roku akademickim …….…/………
na podstawie (wpisać jedną z sytuacji określoną w § 6 ust. 10 Regulaminu praktyk zawodowych)

${practicesBase} Jako potwierdzenie załączam (załącznik A) stosowne zaświadczenie.



………………………………

 </p>
 <div style="text-align: right"> ......................... <p style="font-size: 0.9rem; text-align: right"> Podpis studenta </p></div>
</div>
 
 

 <b> Opinie: </b>
 <ul>
 <li>
 <b>Opiekun praktyki na kierunku ${programme} </b>
  <br>
 Wyrażam zgodę/nie wyrażam zgody na zaliczenie praktyki i przedstawiam sprawę do dalszego rozpatrzenia
 <br>
 <br>
 data, podpis........................
  <br>
 </li>
  <li>
  <b>Wydziałowy kierownik praktyk ${traineeManager}</b>
  <br>
 Wyrażam zgodę/nie wyrażam zgody na zaliczenie praktyki i przedstawiam sprawę do dalszego rozpatrzenia

 <br>
 <br>

Podpis………………………………….
 <br>
 </li>
  <li>
 <b>Prodziekan ds. Studenckich Wydziału ${deputyDean} </b>
  <br>
 Wyrażam zgodę/nie wyrażam zgody na zaliczenie praktyki

 <br>
 <br>

Podpis………………………………….
 </li>
 </ul>
 </html>
`;
}
