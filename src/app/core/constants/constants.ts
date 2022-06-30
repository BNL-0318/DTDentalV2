import * as models from '../models';

export const PAGINATION_INIT = {
  limit: 10,
  offset: 0,
};
export const FILTER = {};

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

export const FILTERORDERSTATE = [
  { value: '', title: 'Tất cả' },
  { value: 'sale', title: 'Đang điều trị' },
  { value: 'done', title: 'Hoàn thành' },
  { value: 'draft', title: 'Chưa phát sinh' },
];
export const TRACKINGSTATUS: models.FilterStatus = {
  titleFil: 'TRẠNG THÁI THEO DÕI',
  key: 'isActive',
  valueFil: true,
  defaultValue: true,
  data: [
    {
      title: 'Đang theo dõi',
      value: true,
    },
    { title: 'Ngưng theo dõi', value: false },
  ],
};

export const REVENUEEXPECT: models.FilterStatus = {
  titleFil: 'DỰ KIẾN THU',
  key: 'isRevenueExpect',
  defaultValue: null,
  data: [
    {
      title: 'Có dự kiến thu',
      value: true,
    },
    { title: 'Không có dự kiến thu', value: false },
  ],
};

export const DEBT: models.FilterStatus = {
  titleFil: 'CÔNG NỢ',
  key: 'isDebt',
  defaultValue: null,
  data: [
    {
      title: 'Có công nợ',
      value: true,
    },
    { title: 'Không có công nợ', value: false },
  ],
};

export const VALUETABLECUSTOMER = {
  displayName: 'Họ tên',
  phone: 'Điện thoại',
  dateOfBirth: 'Ngày sinh',
  age: 'Tuổi',
  appointmentDate: 'Ngày hẹn gần nhất',
  saleOrderDate: 'Ngày điều trị gần nhất',
  valueOrderState: 'Tình trạng điều trị',
  orderResidual: 'Dự kiến thu',
  totalDebit: 'Công nợ',
  cardTypeName: 'Thẻ nhân viên',
  categories: 'Nhãn khách hàng',
  companyName:'Chi nhánh tạo',
  manipulation: 'Thao tác',
  
};

// export const VALUETABLECUSTOMER = [
//   {
//     key: 'displayName',
//     value: 'Họ tên',
//   },
//   {
//     key: 'phone',
//     value: 'Điện thoại',
//   },
//   {
//     key: 'dateOfBirth',
//     value: 'Ngày sinh',
//   },
//   {
//     key: 'age',
//     value: 'Tuổi',
//   },
//   {
//     key: 'appointmentDate',
//     value: 'Ngày điều trị gần nhất',
//   },
//   {
//     key: 'valueOrderState',
//     value: 'Tình trạng điều trị',
//   },
//   {
//     key: 'orderResidual',
//     value: 'Dự kiến thu',
//   },
//   {
//     key: 'totalDebit',
//     value: 'Công nợ',
//   },
//   {
//     key: 'cardTypeName',
//     value: 'Thẻ nhân viên',
//   },
//   {
//     key: 'categories',
//     value: 'Nhãn khách hàng',
//   },
//   { key: 'manipulation', value: 'Thao tác' },
// ];
