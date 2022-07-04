import * as models from '../models';

export const PAGINATION_INIT = {
  limit: 10,
  offset: 0,
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

export const FILTERORDERSTATE: Array<models.CommonTypeData> = [
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
    {
      title: 'Ngưng theo dõi',
      value: false,
    },
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
    {
      title: 'Không có dự kiến thu',
      value: false,
    },
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
    {
      title: 'Không có công nợ',
      value: false,
    },
  ],
};

export const VALUETABLECUSTOMER: Array<models.FieldTable> = [
  {
    key: 'phone',
    value: 'Điện thoại',
    width: '7rem',
  },
  {
    key: 'dateOfBirth',
    value: 'Ngày sinh',
    width: '7rem',
  },
  {
    key: 'age',
    value: 'Tuổi',
    width: '5rem',
  },
  {
    key: 'appointmentDate',
    value: 'Ngày điều trị gần nhất',
    width: '11.5rem',
  },
  {
    key: 'valueOrderState',
    value: 'Tình trạng điều trị',
    width: '11.5rem',
  },
  {
    key: 'orderResidual',
    value: 'Dự kiến thu',
    width: '8.75rem',
  },
  {
    key: 'totalDebit',
    value: 'Công nợ',
    width: '8.75rem',
  },
  {
    key: 'cardTypeName',
    value: 'Thẻ nhân viên',
    width: '11.25rem',
  },
  {
    key: 'categories',
    value: 'Nhãn khách hàng',
    width: '13rem',
  },
  {
    key: 'companyName',
    value: 'Chi nhánh tạo',
    width: '8.75rem',
  },
];
export const BASICDISPLAYOPTIONS: Array<string> = [
  'displayName',
  'phone',
  'dateOfBirth',
  'age',
  'valueOrderState',
  'orderResidual',
  'totalDebit',
  'cardTypeName',
  'categories',
  'companyName',
  'manipulation',
  'name',
  'ref',
  'id',
];
export const CUSTOMLISTDISPLAYCUSTOMER: Array<models.FieldTable> = [
  {
    key: 'phone',
    value: 'Điện thoại',
    isChecked: true,
  },
  {
    key: 'dateOfBirth',
    value: 'Ngày sinh',
    isChecked: true,
  },
  {
    key: 'age',
    value: 'Tuổi',
    isChecked: true,
  },
  {
    key: 'appointmentDate',
    value: 'Ngày điều trị gần nhất',
    isChecked: false,
  },
  {
    key: 'valueOrderState',
    value: 'Tình trạng điều trị',
    isChecked: false,
  },
  {
    key: 'orderResidual',
    value: 'Dự kiến thu',
    isChecked: false,
  },
  {
    key: 'totalDebit',
    value: 'Công nợ',
    isChecked: true,
  },
  {
    key: 'cardTypeName',
    value: 'Thẻ nhân viên',
    isChecked: true,
  },
  {
    key: 'categories',
    value: 'Nhãn khách hàng',
    isChecked: true,
  },
  {
    key: 'companyName',
    value: 'Chi nhánh tạo',
    isChecked: false,
  },
];
