export interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}
export interface PartnerInfoPaged2 {
  assign(sale: string): any;
  aggregates: string;
  items: Array<IPartnerInfoPaged2>;
  limit: number;
  offset: number;
  totalItems: number;
  valueOrderState?: string;
}

export interface IPartnerInfoPaged2 {
  active: boolean;
  address: string;
  age: string;
  appointmentDate: string;
  avatar: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  cardTypeName: string;
  categories: Array<string>;
  cityName: string;
  companyName: string;
  dateOfBirth: string;
  displayName: string;
  districtName: string;
  email: string;
  id: string;
  jobTitle: string;
  memberLevel: string;
  name: string;
  orderResidual: number;
  orderState: string;
  valueOrderState?: string;
  phone: string;
  ref: string;
  saleOrderDate: string;
  sourceName: string;
  totalDebit: number;
  wardName: string;
}

