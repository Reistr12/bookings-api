const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CourtService {
  async getAllCourts() {
    return await prisma.court.findMany();
  }

  async createCourt(name, type) {
    if (!name || !type) {
      const error = new Error('Campos "name" e "type" são obrigatórios');
      error.statusCode = 400;
      throw error;
    }

    name = name.toLowerCase();

    const exists = await prisma.court.findFirst({ where: { name } });
    if (exists) {
      const error = new Error('Nome de quadra já cadastrado');
      error.statusCode = 409; // conflito
      throw error;
    }

    const newCourt = await prisma.court.create({
      data: { name, type }
    });

    return newCourt;
  }
}

module.exports = { CourtService };
