import { PrismaClient, Prisma } from '../../../prisma/generated/client';

let prisma: PrismaClient;
let PrismaObj: any = Prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export { PrismaObj };
export default prisma;
