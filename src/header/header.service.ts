import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HeaderModel } from './header.model';
import { CreateHeaderDto } from './dto/header.dto';

@Injectable()
export class HeaderService {
  constructor(
    @InjectModel(HeaderModel) private userRepository: typeof HeaderModel,
  ) {}

  async createHeader(dto: CreateHeaderDto) {
    return await this.userRepository.create(dto);
  }

  async getHeaders() {
    return await this.userRepository.findAll();
  }
}
