import type { ErrorRequestHandler } from "express";
import { error as apiError } from "@common/utils/response";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err?.code?.toString().startsWith("P")) {
		apiError(res, "Database error", 500, err.meta || err.message);
		return;
	}
	console.error(err);
	apiError(res, err?.message || "Internal server error");
};

export default errorHandler;
