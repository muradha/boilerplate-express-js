import type { CreateUserDTO } from "./dto/user.schema";
import * as repo from "./repository";

export const create = (data: CreateUserDTO) => {
	return repo.createUser(data);
}

export const list = () => {
	return repo.findAllUsers();
}

export const getById = (id: number) =>{
	return repo.findUserById(id);
}

export const edit = (id: number, data: CreateUserDTO) =>{
	return repo.updateUser(id, data);
}

export const remove = (id: number) => {
	return repo.deleteUser(id);
}
