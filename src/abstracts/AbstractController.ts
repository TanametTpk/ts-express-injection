import { Router } from "express";

export default abstract class AbstractController {
	protected routes: Router;
	private isConfigured: boolean;

	constructor() {
		this.routes = Router();
		this.isConfigured = false;
	}

	abstract configureRoute(): void;

	public getRoutes(): Router {
		if (!this.isConfigured) {
			this.configureRoute();
			this.isConfigured = true;
		}
		return this.routes;
	}
}
