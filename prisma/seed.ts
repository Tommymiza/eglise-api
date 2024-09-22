import { PrismaClient, Role } from '@prisma/client';
import { hashSync } from 'bcrypt';

async function main() {
  try {
    const prisma = new PrismaClient();
    // Seed admin user
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      const user = {
        email: 'admin@ekar.mg',
        password: hashSync('password', 10),
        name: 'Admin EKAR',
        role: Role.ADMIN,
      };
      await prisma.user.create({
        data: user,
      });
    }

    // Seed all sacrament
    const sacramentCount = await prisma.sacrament.count();
    if (sacramentCount === 0) {
      const sacraments = [
        {
          name: 'Batemy',
        },
        {
          name: 'Fampihavanana',
        },
        {
          name: 'Eokaristia',
        },
        {
          name: 'Fankaherezana',
        },
        {
          name: 'Fanambadiana',
        },
        {
          name: 'Fanosorana ny marary',
        },
        {
          name: 'Ôrdinasiôna',
        },
      ];
      await prisma.sacrament.createMany({
        data: sacraments,
      });
    }
    console.log('Seed finished successfuly !');
  } catch (error) {
    console.log(error);
  }
}
main();
