export interface GeneralInfomation {
  img: string;
  title: string;
  value: string;
  type?: string;
}
export const DataGeneralInfomation: Array<GeneralInfomation> = [
  {
    img: 'assets/images/Frame-34957.png',
    title: 'Quỹ tiền mặt (VNĐ)',
    value: '1000000000',
    type: 'number',
  },
  {
    img: 'assets/images/untitled-1.png',
    title: 'Phiếu điều trị mới',
    value: '05',
  },
  {
    img: 'assets/images/conservation1-2.png',
    title: 'Khách khám mới',
    value: '20',
  },
  {
    img: 'assets/images/call-1.png',
    title: 'Khách tái khám',
    value: '25',
  },
];
