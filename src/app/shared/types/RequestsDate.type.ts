export type RequestsDate = (Record<
  'user' | 'previousRange' | 'newRange',
  string
> & { accept: boolean | null })[];
