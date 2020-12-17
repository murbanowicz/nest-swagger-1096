import { ApiProperty } from '@nestjs/swagger';
import { FooEnum } from './foo.enum';

export class BuggyQueryDTO {
  @ApiProperty({
    isArray: true,
    enum: FooEnum,
    enumName: 'buggy',
  })
  public readonly foos!: FooEnum[];
}
