import { routeUtil } from 'utils';
import createProduct from './actions/create-product';
import list from './actions/list';

const publicRoutes = routeUtil.getRoutes([]);

const privateRoutes = routeUtil.getRoutes([createProduct, list]);

const adminRoutes = routeUtil.getRoutes([]);

export default {
  publicRoutes,
  privateRoutes,
  adminRoutes,
};
