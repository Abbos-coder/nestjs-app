import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { CreateHeaderDto } from './dto/header.dto';

@Table({ tableName: 'headers' })
export class HeaderModel extends Model<HeaderModel, CreateHeaderDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  subtitle: string;
}
