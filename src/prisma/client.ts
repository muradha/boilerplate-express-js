import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

export default prisma;
