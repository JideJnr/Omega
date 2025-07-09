import express from 'express';
import authRoutes from './auth.routes.js';
import roomRoutes from './room.routes.js';
import bookingRoutes from './booking.routes.js';
import customerRoutes from './customer.routes.js';
import activityRoutes from './activity.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/rooms', roomRoutes);
router.use('/bookings', bookingRoutes);
router.use('/customers', customerRoutes);
router.use('/activities', activityRoutes);

export default router;
