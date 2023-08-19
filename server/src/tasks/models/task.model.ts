import {Model, Table, Column, DataType} from 'sequelize-typescript';

enum StatusType {
  ACTIVE = "active",
  COMPLETED = "completed"
}

@Table({
  timestamps: true,
})
class Tasks extends Model<Tasks> {

  @Column
  title: string;

  @Column
  description?: string;

  @Column({
    defaultValue: StatusType.ACTIVE,
    type: DataType.ENUM(...Object.values(StatusType)),
  })
  status: StatusType;

}

export default Tasks