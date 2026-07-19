import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  registration_number: string;

  @Column({ default: 'operador' })
  role: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;
}
