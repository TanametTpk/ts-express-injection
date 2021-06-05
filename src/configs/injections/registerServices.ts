import { container } from "tsyringe";
import UserService from "../../services/UserService";

export default () => {
	container.register("IUserService", { useClass: UserService });
};
