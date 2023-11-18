import { IUser } from 'src/app/shared/interface/user.interface';

export function contractInternship(formValues: any) {
  return `<div style="margin:0;display:flex; width:100vw; justify-content: flex-end; text-align: right">
    <div style="width:50px;  font-weight: bold; font-size:10px;">
        <div>Załącznik nr 1 do Zarządzenia Nr 54/19
         <div>Rektora Politechniki Świętokrzyskiej z dnia 20 września 2019 r </div></div>     
    </div>

    <div style="text-align:center; font-size:16px" >
       
           <h4> Umowa </h4>
            <h4> o organizację praktyki studenta Politechniki Świętokrzyskiej </h4>   
    </div>

    <div style="text-align:left; font-size:13px">
        <div>zawarta w dniu DATA r. pomiędzy:</div>
       <span><b>Politechniką Świętokrzyską</b> al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce </span> 
       <span>zwaną dalej <b>Uczelnią, </b>  reprezentowaną na podstawie udzielonego przez Rektora Uczelni </span>
       <span> pełnomocnictwa, przez Dziekana Wydziału …………………………………       </span>
       <span>a </span>
       <span>${formValues.companyName} z siedzibą w ${formValues.address},</span>
       <span>o nr KRS ${formValues.krs}, NIP  ${formValues.nip}, Regon  ${formValues.regon}, zwanym dalej</span>
       <span><b>Zakładem</b> lub <b>Zakładem Pracy</b>, reprezentowanym przez ${formValues.respresentant}</span>
       <span>………………………………………………………………………………………………….</span>
      
       <span>§ 1. Uczelnia kieruje studenta …………………………………………………………………,</span>
       <span>nr albumu ………………… do Zakładu w celu odbycia przez niego praktyki studenckiej </span>
       <span>w okresie od ……………… do ….………………</span>
       <span>§ 2. Zakład zobowiązuje się do:       </span>
       <span><b>1)</b> zapewnienia odpowiednich stanowisk pracy, pomieszczeń, warsztatów, urządzeń, narzędzi</span>
       <span>i materiałów zgodnie z programem praktyki stanowiącym załącznik nr 1 do niniejszej </span>
       <span>umowy;</span>
       <span><b>2)</b> zapoznania studenta z zakładowym regulaminem pracy, przepisami o bezpieczeństwie </span>
       <span>i higienie pracy oraz o ochronie danych/tajemnicy przedsiębiorstwa itp. obowiązujących</span>
       <span>w Zakładzie;</span>
       <span><b>3)</b> nadzoru nad wykonaniem przez studenta zadań wynikających z programu praktyki.</span>
       <span><b>§ 3.</b> Uczelnia zobowiązuje się do sprawowania kierownictwa dydaktycznego nad praktyką </span>
       <span>studencką oraz jej kontroli i oceny, zgodnie z programem praktyk. </span>
       <span><b>§ 4.</b> W przypadku gdy Zakład zdecyduje o możliwości przyznania studentowi wynagrodzenia </span>
       <span>z tytułu pracy wykonywanej w trakcie odbywania praktyki, stosowna umowa zawierana jest </span>
       <span>pomiędzy Zakładem a studentem, bez udziału i pośrednictwa Uczelni.</span>
        <span><b> § 5. 1.</b> Strony wyznaczają osoby właściwe do kontaktu w bieżących sprawach:</span>
        <span><b>1)</b> z ramienia Zakładu Pracy …………………………………………………………………</span>
        <span> &emsp; &emsp;  tel.: …………………………………………………………………</span>
        <span> &emsp; &emsp;e-mail: …………………………………………………………………</span>
        <span><b>2)</b> z ramienia Uczelni: …………………………………………………………………</span>
        <span> &emsp; &emsp;  tel.: …………………………………………………………………</span>
        <span> &emsp; &emsp;e-mail: …………………………………………………………………</span>
        <span><b>2.</b> Klauzula informacyjna dotycząca przetwarzania przez Uczelnię danych osobowych</span>
        <span>pozyskanych z Zakładu stanowi załącznik nr 2 do niniejszej umowy. Zakład zobowiązuje się</span>
        <span>do udostępnienia załącznika osobom, których dane przekazano na podstawie niniejszej </span>
        <span>umowy.</span>
        <span><b>§ 6</b>. Umowa niniejsza została sporządzona w dwóch jednobrzmiących egzemplarzach po.</span>
        <span>jednym dla każdej ze Stron. </span>
        <span><b>§ 7</b>. Ewentualne spory mogące wyniknąć na tle stosowania niniejszej umowy będą.</span>
        <span>rozstrzygane na zasadzie mediacji przez wytypowanych przez każdą ze Stron mediatorów</span>
        <span>Umowa została zawarta na czas odbywania przez studenta praktyki określony w § 1.        </span>


        <div style="display:flex;">
            <div>
                <span><b>W imieniu Zakładu: </b>     &emsp;&emsp;&emsp;   </span>
                <div>………………………………………………. </div>
                <small> Podpis i pieczęć</small>
            </div>
            <div style="width:30%;">
                <div><b>W imieniu Politechniki Świętokrzyskiej: </b></div>
                <div>………………………………………………. </div>
                <small> Podpis i pieczęć</small>
            </div>
        </div>
    </div>
</div>`;
}
