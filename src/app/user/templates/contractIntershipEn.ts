export function contractInternshipEn(formValues: any) {
  return `<div style="margin:0;display:flex; width:100vw; justify-content: flex-end; text-align: right">
    <div style="width:50px; font-weight: bold; font-size:10px;">
        <div>Annex No. 1 to Rector's Order No. 54/19
         <div>of the Rector of the Świętokrzyskie University of Technology dated September 20, 2019 </div></div>     
    </div>

    <div style="text-align:center; font-size:16px" >
       
           <h4> Agreement </h4>
            <h4> on organizing the internship of a student of the Świętokrzyskie University of Technology </h4>   
    </div>

    <div style="text-align:left; font-size:13px">
        <div>concluded on DATE between:</div>
       <span><b>Świętokrzyska University of Technology</b> at al. Tysiąclecia Państwa Polskiego 7, 25-314 Kielce </span> 
       <span>hereinafter referred to as the <b>University</b>, represented based on authorization granted by the Rector of the University</span>
       <span>, by the Dean of the Faculty of …………………………………       </span>
       <span>and </span>
       <span>${formValues.companyName} located at ${formValues.address},</span>
       <span>with the company registration number KRS ${formValues.krs}, NIP  ${formValues.nip}, REGON  ${formValues.regon}, hereinafter referred to as</span>
       <span><b>the Establishment</b> or <b>Workplace</b>, represented by ${formValues.respresentant}</span>
       <span>………………………………………………………………………………………………….</span>
      
       <span>§ 1. The University directs the student …………………………………………………………………,</span>
       <span>student ID number ………………… to the Establishment for the purpose of completing the student internship </span>
       <span>from ……………… to ….………………</span>
       <span>§ 2. The Establishment undertakes:       </span>
       <span><b>1)</b> to provide appropriate workstations, rooms, workshops, equipment, tools</span>
       <span>and materials in accordance with the internship program attached as Annex No. 1 to this </span>
       <span>agreement;</span>
       <span><b>2)</b> to acquaint the student with the workplace work regulations, safety regulations </span>
       <span>and hygiene, as well as confidentiality/data protection related to the company etc., applicable</span>
       <span>at the Workplace;</span>
       <span><b>3)</b> supervision over the student's completion of tasks resulting from the internship program.</span>
       <span><b>§ 3.</b> The University undertakes to provide didactic supervision over the student's internship </span>
       <span>and its assessment, in accordance with the internship program. </span>
       <span><b>§ 4.</b> In case the Establishment decides to grant the student remuneration </span>
       <span>for work performed during the internship, a relevant agreement is concluded </span>
       <span>between the Establishment and the student, without the involvement or mediation of the University.</span>
        <span><b> § 5. 1.</b> The parties designate responsible persons for current matters:</span>
        <span><b>1)</b> on behalf of the Workplace …………………………………………………………………</span>
        <span> &emsp; &emsp;  tel.: …………………………………………………………………</span>
        <span> &emsp; &emsp;e-mail: …………………………………………………………………</span>
        <span><b>2)</b> on behalf of the University: …………………………………………………………………</span>
        <span> &emsp; &emsp;  tel.: …………………………………………………………………</span>
        <span> &emsp; &emsp;e-mail: …………………………………………………………………</span>
        <span><b>2.</b> Information clause regarding the processing of personal data by the University</span>
        <span>obtained from the Establishment constitutes Annex No. 2 to this agreement. The Establishment undertakes</span>
        <span>to provide the annex to individuals whose data was transferred based on this </span>
        <span>agreement.</span>
        <span><b>§ 6</b>. This agreement has been prepared in two identical copies.</span>
        <span>one for each Party. </span>
        <span><b>§ 7</b>. Any disputes arising from the application of this agreement shall be settled.</span>
        <span>through mediation by mediators selected by each of the Parties</span>
        <span>The agreement was concluded for the duration of the student's internship as specified in § 1.        </span>


        <div style="display:flex;">
            <div>
                <span><b>On behalf of the Establishment: </b>     &emsp;&emsp;&emsp;   </span>
                <div>………………………………………………. </div>
                <small> Signature and seal</small>
            </div>
            <div style="width:30%;">
                <div><b>On behalf of the Świętokrzyska University of Technology: </b></div>
                <div>………………………………………………. </div>
                <small> Signature and seal</small>
            </div>
        </div>
    </div>
</div>`;
}
