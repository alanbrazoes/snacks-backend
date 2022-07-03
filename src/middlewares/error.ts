import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err.status || 500).json({ message: err.message });
};

export { error };
