import { Model, Table, Column, } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Task extends Model {

  @Column
  title: string;

  @Column
  description?: string;

}