import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { HeaderModel } from './header.model';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService],
  imports: [SequelizeModule.forFeature([HeaderModel])],
})
export class HeaderModule {}
