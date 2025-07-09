import express from 'express';
import {
  getOverview,
  getBookingsByDate,
  getRevenue,
  getTopRooms,
  getSalaryExpense
} from '../../../controllers/analyticsController.js';
import { verifyJWT } from '../../../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Analytics endpoints for dashboards and reports
 */

/**
 * @swagger
 * /analytics/overview:
 *   get:
 *     summary: Get dashboard overview metrics
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Overview data retrieved successfully
 */

/**
 * @swagger
 * /analytics/bookings-by-date:
 *   get:
 *     summary: Get bookings grouped by date
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bookings by date data retrieved successfully
 */

/**
 * @swagger
 * /analytics/revenue:
 *   get:
 *     summary: Get total revenue analytics
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Revenue data retrieved successfully
 */

/**
 * @swagger
 * /analytics/top-rooms:
 *   get:
 *     summary: Get top-performing rooms
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Top rooms data retrieved successfully
 */

/**
 * @swagger
 * /analytics/salary-expense:
 *   get:
 *     summary: Get total salary expense data
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Salary expense data retrieved successfully
 */

router.get('/overview', verifyJWT, getOverview);
router.get('/bookings-by-date', verifyJWT, getBookingsByDate);
router.get('/revenue', verifyJWT, getRevenue);
router.get('/top-rooms', verifyJWT, getTopRooms);
router.get('/salary-expense', verifyJWT, getSalaryExpense);

export default router;
