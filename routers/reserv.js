const express = require('express');
const { CourtController } = require('../controllers/court.controller');
const { BookingController } = require('../controllers/booking.controller');

const router = express.Router();

const courtController = new CourtController();
const bookingController = new BookingController();

router.get('/courts', (req, res) => courtController.getAllCourts(req, res));
router.post('/courts', (req, res) => courtController.createCourt(req, res));

router.get('/bookings', (req, res) => bookingController.showAllBookings(req, res));
router.post('/bookings', (req, res) => bookingController.createBooking(req, res));

module.exports = router;
