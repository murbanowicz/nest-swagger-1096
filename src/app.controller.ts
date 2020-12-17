import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from './app.service';
import { BuggyQueryDTO } from './dto/query.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: BuggyQueryDTO): string {
    return this.appService.getHello();
  }
}
