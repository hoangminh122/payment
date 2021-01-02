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

@Table({ tableName: 'products', timestamps: false })
export class Products extends Model<Products> {
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
  type: String;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  dvt: Number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  count: String;

  @Column({
    field:'unit_price',
    allowNull: false,
    type: DataType.STRING,
  })
  unitPrice: String;

  @Column({
    allowNull: false,
    type: DataType.BOOLEAN,
  })
  discontinued: boolean;

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
