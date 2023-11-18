import { RequestChangeDateService } from './../../../core/services/request-change-date.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { RequestsDate } from 'src/app/shared/types/RequestsDate.type';

@Component({
  selector: 'app-request-new-dates',
  templateUrl: './request-new-dates.component.html',
  styleUrls: ['./request-new-dates.component.scss'],
})
export class RequestNewDatesComponent {
  requests$: Observable<RequestsDate>;

  constructor(private requests: RequestChangeDateService) {}

  displayedColumns: string[] = ['name', 'previousDate', 'newDate', 'accept'];

  ngOnInit(): void {
    this.requests$ = this.requests.requests;
  }
}
