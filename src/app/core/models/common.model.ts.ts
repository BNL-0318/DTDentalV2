export interface CommonTypeData {
  value: string;
  title: string;
}
export interface FilterStatus {
  valueFil?: string | boolean | null;
  titleFil: string;
  key: string;
  defaultValue?: string | boolean | null;
  data: Array<ValueRadioCT>;
}
export interface ValueRadioCT {
  title: string;
  value: string | boolean;
}
