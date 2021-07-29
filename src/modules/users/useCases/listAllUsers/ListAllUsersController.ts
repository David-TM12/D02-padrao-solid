import { Request, Response } from "express";
import { User } from "modules/users/model/User";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {

    try{

      const { user_id } = request.headers;

      const id = user_id.toString();

      const users = this.listAllUsersUseCase.execute({ user_id: id });

      return response.status(200).json(users);

    }catch(e){
      return response.status(400).json({error: e.message});
    }
   
  }
}

export { ListAllUsersController };
