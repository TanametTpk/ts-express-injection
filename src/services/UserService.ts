import { User } from ".prisma/client";
import IUserService from "../interfaces/services/IUserService";
import prisma from "../configs/prisma/client";

export default class UserService implements IUserService {
	getUsers(): Promise<User[]> {
		return prisma.user.findMany();
	}

	getUserById(id: string): Promise<User | null> {
		return prisma.user.findFirst({
			where: { id },
		});
	}

	updateUser(id: string, name: string): Promise<User> {
		return prisma.user.update({
			where: { id },
			data: { name },
		});
	}

	deleteUser(id: string): Promise<User> {
		return prisma.user.delete({
			where: { id },
		});
	}
}
