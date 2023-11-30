import { User } from "./schemas";

export interface CreateUserDto extends Omit<User, '_id' | 'createdAt' | 'updatedAt'> {}
export interface UpdateUserDto extends Partial<User> {}
