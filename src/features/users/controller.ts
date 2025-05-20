import type { Request, Response, NextFunction } from "express";
import * as userService from "./services";
import { success, error } from "@common/utils/response";

export async function createUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const user = await userService.create(req.body);
		success(res, user, "User created", 201);
	} catch (err) {
		next(err);
	}
}

export async function getUsers(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const users = await userService.list();
		success(res, users);
	} catch (err) {
		next(err);
	}
}

export async function getUserById(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const id = Number(req.params.id);
		const user = await userService.getById(id);
		if (!user) {
			error(res, "User not found", 404);
			return;
		}
		success(res, user);
	} catch (err) {
		next(err);
	}
}

export async function updateUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const id = Number(req.params.id);
		const user = await userService.edit(id, req.body);
		if (!user) {
			error(res, "User not found", 404);
			return;
		}
		success(res, user, "User updated");
	} catch (err) {
		next(err);
	}
}

export async function deleteUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const id = Number(req.params.id);
		const user = await userService.remove(id);
		if (!user) {
			error(res, "User not found", 404);
			return;
		}
		success(res, null, "User deleted", 204);
	} catch (err) {
		next(err);
	}
}
