import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import AbstractController from "../abstracts/AbstractController";

@injectable()
export default class TodoController extends AbstractController {
	constructor() {
		super("/todo");
	}

	configureRoute(): void {
		this.routes.get("/", (req, res) => this.getTodo(req, res));
	}

	async getTodo(req: Request, res: Response) {
		res.json([]);
	}
}

container.register("Controller", TodoController);
