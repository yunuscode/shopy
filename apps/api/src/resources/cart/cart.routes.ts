import { routeUtil } from 'utils';
import addCart from './actions/add-cart';
import removeCart from './actions/remove-cart';
import list from './actions/list';

const publicRoutes = routeUtil.getRoutes([]);

const privateRoutes = routeUtil.getRoutes([addCart, removeCart, list]);

const adminRoutes = routeUtil.getRoutes([]);

export default {
  publicRoutes,
  privateRoutes,
  adminRoutes,
};
