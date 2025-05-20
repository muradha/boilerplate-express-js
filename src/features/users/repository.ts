import prisma from "prisma/client";
import type { CreateUserDTO } from "./dto/user.schema";

export function createUser(data: CreateUserDTO) {
	return prisma.user.create({ data });
}
export function findAllUsers() {
	return prisma.user.findMany();
}
export function findUserById(id: number) {
	return prisma.user.findUnique({ where: { id } });
}
export function updateUser(id: number, data: Partial<CreateUserDTO>) {
	return prisma.user.update({ where: { id }, data });
}
export function deleteUser(id: number) {
	return prisma.user.delete({ where: { id } });
}
