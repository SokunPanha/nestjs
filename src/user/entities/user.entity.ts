import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
