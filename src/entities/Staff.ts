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

@Table({ tableName: 'staffs', timestamps: false })
export class Staffs extends Model<Staffs> {
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
  job: String;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  dateOfBirth: Number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  address: String;

  @Column({
    field:'unit_price',
    allowNull: false,
    type: DataType.STRING,
  })
  phone: String;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  photo: boolean;

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
