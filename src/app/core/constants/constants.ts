import * as models from "../models";

export const PAGINATION_INIT = {
  limit: 20,
  offset: 0,
};
export const FILTER = {
  isActive: true,
};

export const DataGeneralInfomation: Array<models.GeneralInfomation> = [
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


export const filterOrderState = [
  { value: '', title: 'Tất cả' },
  { value: 'sale', title: 'Đang điều trị' },
  { value: 'done', title: 'Hoàn thành' },
  { value: 'draft', title: 'Chưa phát sinh' },
];