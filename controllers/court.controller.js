const { CourtService } = require('../services/court.service');

class CourtController {
  constructor() {
    this.courtService = new CourtService();
  }

  async getAllCourts(req, res) {
    try {
      const courts = await this.courtService.getAllCourts();
      res.status(200).json(courts);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async createCourt(req, res) {
    try {
      const { name, type } = req.body;
      const court = await this.courtService.createCourt(name, type);
      res.status(201).json(court);
    } catch (error) {
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

module.exports = { CourtController };
