import type { Response } from "express";

export interface ApiResponse<T = unknown> {
	status: "success" | "error";
	message: string;
	data?: T;
	details?: unknown;
}

export const success = <T = unknown>(
	res: Response,
	data: T,
	message = "Success",
	status = 200,
) => {
	return res
		.status(status)
		.json({ status: "success", message, data } as ApiResponse<T>);
};

export const error = (
	res: Response,
	errorMessage = "Error",
	status = 500,
	details: unknown = null,
) => {
	return res
		.status(status)
		.json({ status: "error", message: errorMessage, details } as ApiResponse);
};
