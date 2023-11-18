export type SingleDateToDisplay = Record<
  'startDate' | 'endDate' | 'requestEndDate',
  Date
> & { id: string };
