const { BookingService } = require('../services/booking.service');

class BookingController {
  constructor() {
    this.bookingService = new BookingService();
  }

  async createBooking(req, res) {
    try {
      const novaReserva = await this.bookingService.createBooking(req.body);
      res.status(201).json(novaReserva);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async showAllBookings(req, res) {
    try {
      const { name } = req.body;
      const reservas = await this.bookingService.showAllBookings(name);
      res.status(200).json(reservas);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = { BookingController };
