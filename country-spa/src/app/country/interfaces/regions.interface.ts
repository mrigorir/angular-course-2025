export type Region =
  | 'Africa'
  | 'America'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';

type RegionButton = {
  region: Region;
  color: string;
};

export const regionButtons: RegionButton[] = [
  { region: 'Africa', color: 'btn-primary' },
  { region: 'America', color: 'btn-warning' },
  { region: 'Asia', color: 'btn-error' },
  { region: 'Europe', color: 'btn-info' },
  { region: 'Oceania', color: 'btn-success' },
  { region: 'Antarctic', color: 'btn-accent' },
];
