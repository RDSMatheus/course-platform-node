import { User } from '../models/user-model';

export class UserRepository {
  async post(body: User): Promise<void> {
    const user = new User(body);
    await user.save();
  }

  async getByEmail(email: string): Promise<User> {
    const user = (await User.findOne({ email })) as User;
    return user;
  }

  async getByCpf(cpf: string): Promise<User> {
    const user = (await User.findOne({ cpf })) as User;
    return user;
  }

  async get(page: number, limit: number): Promise<User[]> {
    const users = (await User.find().skip(page).limit(limit)) as User[];
    return users;
  }

  async delete(id: string): Promise<User> {
    const user = (await User.findById(id)) as User;
    await User.findByIdAndDelete(id);
    return user;
  }

  async update(
    id: string,
    body: User,
  ): Promise<{ oldUser: User; updatedUser: User }> {
    const oldUser = (await User.findById(id)) as User;
    const updatedUser = (await User.findByIdAndUpdate(id, body, {
      new: true,
    })) as User;
    return { oldUser, updatedUser };
  }
}
