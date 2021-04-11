import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.create({
    email: `alice@prisma.io`,
    name: 'Alice',
    posts: {
      create: {
        title: 'Check out Prisma with Next.js',
        content: 'https://www.prisma.io/nextjs',
        published: true,
      },
    },
  });

  console.log({ alice });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
