import { Todo } from ".prisma/client";
import ITodoService from "../interfaces/services/ITodoService";

export default class TodoService implements ITodoService {
	getTodo(): Promise<Todo[]> {
		throw new Error("Method not implemented.");
	}

	updateTodo(id: string, text: string): Promise<Todo> {
		throw new Error("Method not implemented.");
	}

	deleteTodo(id: string): Promise<Todo> {
		throw new Error("Method not implemented.");
	}
}
