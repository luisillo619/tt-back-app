export interface Trip {
  name: string;

  agencyId: string;

  country: string;

  province: string;

  departure: Date;

  arrival: Date;

  price?: string;

  distance?: string;

  suggestion?: string;
}
