import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['student', 'teacher'],
    default: 'student',
  })
  role: string;

  @Column()
  user_id: number;
}
