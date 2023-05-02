import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { UserDto } from './dto/users.dto';

interface UserCreationAttr {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class UserModel extends Model<UserModel, UserCreationAttr> {

     @Column({type:DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
     id: string;

     @Column({type:DataType.STRING, unique:true, allowNull: false})
     email: string;

     @Column({type:DataType.STRING, allowNull: false})
     password: string;
     
     @Column({type:DataType.BOOLEAN, defaultValue: false})
     banned: boolean;

      @Column({type:DataType.STRING, allowNull: true})
     banReason: string;
}