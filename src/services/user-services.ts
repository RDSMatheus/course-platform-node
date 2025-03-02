import { User } from '../models/user-model';
import { UserRepository } from '../repository/user-repository';
import bcrypt from 'bcrypt';

export class UserServices {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async post(body: User & { passwordCheck: string }): Promise<void> {
    const { cpf, email, name, password, passwordCheck } = body;
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const existingUserEmail = await this.userRepository.getByEmail(email);
    const existingUserCpf = await this.userRepository.getByCpf(cpf);

    if (!cpf || !email || !name || !password) {
      throw new Error('É necessário enviar todos os dados.');
    }

    if (password !== passwordCheck) {
      throw new Error('As senhas não são correspondentes');
    }

    if (existingUserCpf) {
      throw new Error('Usuário com este CPF já cadastrado.');
    }

    if (existingUserEmail) {
      throw new Error('Usuário com este email já cadastrado.');
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      await this.userRepository.post({ ...body, password: hash });
    });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.userRepository.getByEmail(email);
  }

  async get(page: number, pageSize: number): Promise<User[]> {
    const skip = (page - 1) * pageSize;
    const pageSkip = skip || 1;
    const limit = pageSize || 10;
    const users = (await this.userRepository.get(pageSkip, limit)) as User[];
    if (!users) throw new Error('Não foi possivel retornar os usuários');
    return users;
  }

  async delete(id: string): Promise<void> {
    if (!id) throw new Error('Insira um id válido.');
    const user = this.userRepository.delete(id);
    if (!user) throw new Error('Usuário não encontrado.');
  }

  async update(id: string, body: User): Promise<User> {
    if (!id) throw new Error('Insira um id válido.');
    const { oldUser, updatedUser } = await this.userRepository.update(id, body);
    if (!oldUser) throw new Error('Usuário não encontrado.');
    return updatedUser;
  }
}
