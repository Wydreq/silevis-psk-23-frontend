import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCurrentDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Dodaj 1, ponieważ miesiące są indeksowane od 0
    const day = today.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  getCompany(nip: string) {
    return this.http
      .get(
        `https://wl-api.mf.gov.pl/api/search/nip/${nip}/?date=${this.getCurrentDate()}`
      )
      .pipe(map((res: any) => res.result.subject));
  }
}
