import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import bcrypt from "bcryptjs";

const createUserService = async ({ nome, email, password, adm}: IUserRequest): Promise<User> => {

  const userRepository = AppDataSource.getRepository(User);

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = userRepository.create({
    nome,
    email,
    password: hashedPassword,
    adm,
    ativo: true
  }) 

  await userRepository.save(newUser);

  return newUser; 
}

export default createUserService;