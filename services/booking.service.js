const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BookingService {
  async createBooking({ date, startTime, endTime, clientName, courtName }) {
    const court = await prisma.court.findUnique({ where: { name: courtName } });

    if (!court) throw new Error('Quadra não encontrada');

    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        courtName,
        date: new Date(date),
        OR: [
          {
            startTime: { lt: endTime },
            endTime: { gt: startTime }
          }
        ]
      }
    });

    if (conflictingBooking) {
      throw new Error('Conflito de horário com reserva existente');
    }

    const newBooking = await prisma.booking.create({
      data: {
        date: new Date(date),
        startTime,
        endTime,
        clientName,
        courtName
      }
    });

    return newBooking;
  }

  async showAllBookings(courtName) {
    const court = await prisma.court.findFirst({ where: { name: courtName } });

    if (!court) throw new Error('Quadra não encontrada');

    const bookings = await prisma.booking.findMany({
      where: { courtName: court.name }
    });

    return {
      quadra: court.name,
      reservas: bookings.map(b => ({
        id: b.id,
        data: b.date.toISOString().split('T')[0],
        horario: `${b.startTime} - ${b.endTime}`,
        cliente: b.clientName
      }))
    };
  }
}

module.exports = { BookingService };
