import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDto } from './dto/header.dto';

@Controller('header')
export class HeaderController {
  constructor(private headerService: HeaderService) {}

  @Post()
  create(@Body() dto: CreateHeaderDto) {
    return this.headerService.createHeader(dto);
  }

  @Get()
  getAll() {
    return this.headerService.getHeaders();
  }
}
