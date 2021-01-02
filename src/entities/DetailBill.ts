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
import { Bills } from './Bill';
import { Products } from './Product';

@Table({ tableName: 'bills', timestamps: false })
export class DetailBills extends Model<DetailBills> {

  @ForeignKey(() => Bills)
  @Column({
    primaryKey: true,
    field: 'bill_id',
    type: DataType.UUIDV4,
  })
  billId!: string;

  @ForeignKey(() => Products)
  @Column({
    primaryKey: true,
    field: 'product_id',
    type:DataType.UUIDV4
  })
  doctorId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    
  })
  unitPrice: boolean;

  @Column({
    allowNull: false,
    field: 'created_date',
    type: DataType.DATE,
  })
  createdDate: Date;
}
