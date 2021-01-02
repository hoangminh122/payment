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
import { Customers } from './Customer';
import { Staffs } from './Staff';

@Table({ tableName: 'bills', timestamps: false })
export class Bills extends Model<Bills> {
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
    type: DataType.DATEONLY,
  })
  paymentDate: Date;


  // @ForeignKey(() => Staffs)
  // @Column({
  //   type: DataType.UUID,
  //   defaultValue:UUIDV4
  // })
  // staffId: string;

  // @ForeignKey(() => Customers)
  // @Column({
  //   type: DataType.UUID,
  //   defaultValue:UUIDV4
  // })
  // customerId: string;

  @Column({
    field: 'money',
    type: DataType.INTEGER,
  })
  relativeId?: number;

  @Column({
    field: 'tax',
    type: DataType.INTEGER,
  })
  tax?: number;

  @Column({
    field: 'total',
    type: DataType.INTEGER,
  })
  total?: number;
  
  @Column({
    allowNull: false,
    field: 'created_date',
    type: DataType.DATE,
  })
  createdDate: Date;
}
