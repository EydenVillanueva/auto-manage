import { Model, Table, Column, } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
class Tasks extends Model<Tasks> {

  @Column
  title: string;

  @Column
  description?: string;

}

export default Tasks