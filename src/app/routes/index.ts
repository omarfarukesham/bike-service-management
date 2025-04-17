import express from 'express';
import { UserRoutes } from '../user/user.routes';
import { AdminRoutes } from '../Admin/admin.routes';
import { AuthRoutes } from '../auth/auth.route';
import { CustomerRoutes } from '../customer/customer.route';
import { BikesRoutes } from '../bike/bike.route';

const router = express.Router();

const moduleRoutes = [
    {
    path: '/user',
    route: UserRoutes
  },
  {
    path: '/admin',
    route: AdminRoutes
  },
  {
    path: '/auth',
    route: AuthRoutes
  },

  {
    path: '/customers',
    route: CustomerRoutes
  },
  {
    path: '/bikes',
    route: BikesRoutes
  }

]


moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;