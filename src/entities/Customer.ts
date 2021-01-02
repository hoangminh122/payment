import { UUIDV4 } from 'sequelize';
import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  Default,
  Sequelize,
  PrimaryKey,
  IsUUID,
  BelongsTo,
} from 'sequelize-typescript';

@Table({ tableName: 'customers', timestamps: false })
export class Customers extends Model<Customers> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  code: boolean;

  @Column({
    allowNull: false,
    type: DataType.UUID,
  })
  name: string;
  

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  address: String;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  phone: Number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  email: String;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  dateOfBirth: String;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  description: Number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  note: String;

  @Column({
    allowNull: false,
    field: 'created_date',
    type: DataType.DATE,
  })
  createdDate: Date;

  
}
