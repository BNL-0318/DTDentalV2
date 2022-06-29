import { TDSMenuDTO } from 'tds-ui/menu';


export const DataDot: Array<TDSMenuDTO> = [
  {
    name: 'Tổng quan',
    icon: 'tdsi-dashboard-fill',
    link: '/',
  },
  {
    name: 'Khách hàng',
    icon: 'tdsi-group-people-fill',
    link: 'customer',
  },
  {
    name: 'Lịch hẹn',
    icon: 'tdsi-calendar-fill',
    
  },
  {
    name: 'Bán thuốc',
    icon: 'tdsi-product-line',
  },
  {
    name: 'Labo',
    icon: 'tdsi-star-2-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Khảo sát đánh giá',
    icon: 'tdsi-chart-pie-line',
    link: '/dskh',
  },
  {
    name: 'Mua hàng',
    icon: 'tdsi-cart-fill-green-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Kho',
    icon: 'tdsi-marketing-fill',
    link: '/qcsp',
  },
  {
    name: 'Lương',
    icon: 'tdsi-money-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Sổ quỹ',
    icon: 'tdsi-accounting-fill',
    link: '/qlvc',
  },
  {
    name: 'Marketing',
    icon: 'tdsi-supplier-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'SMS Brandname',
    icon: 'tdsi-wallet-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Hoa hồng',
    icon: 'tdsi-chart-pie-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Báo cáo',
    icon: 'tdsi-report-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Danh mục',
    icon: 'tdsi-list-view-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
  {
    name: 'Cấu hình',
    icon: 'tdsi-gear-1-fill',
    listChild: [
      {
        link: '/menu',
        name: 'Menu',
      },
      {
        link: '/pagination',
        name: 'Pagination',
      },
      {
        link: '/step',
        name: 'Step',
      },
    ],
  },
];
