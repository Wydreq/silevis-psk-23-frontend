import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestsDate } from 'src/app/shared/types/RequestsDate.type';

@Injectable({
  providedIn: 'root',
})
export class RequestChangeDateService {
  requests = new BehaviorSubject<RequestsDate>([
    {
      user: 'Jan Kowalski',
      previousRange: '15.11.2023 - 23.11.2023',
      newRange: '17.11.2023 - 2.11.2023',
      accept: null,
    },
    {
      user: 'Jan Kowalski',
      previousRange: '15.11.2023 - 23.11.2023',
      newRange: '17.11.2023 - 2.11.2023',
      accept: null,
    },
  ]);
}
