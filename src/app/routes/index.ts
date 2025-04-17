import express from 'express';
import { CustomerRoutes } from '../customer/customer.route';
import { BikesRoutes } from '../bike/bike.route';
import { BikeServiceRoutes } from '../bikeService/bikeService.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CustomerRoutes
  },
  {
    path: '/bikes',
    route: BikesRoutes
  },
  {
    path: '/services',
    route: BikeServiceRoutes
  }

]


moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;