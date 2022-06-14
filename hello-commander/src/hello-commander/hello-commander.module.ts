import { Module } from '@nestjs/common';
import { HelloCommander } from './hello-commander';
import { PersonInfoQuestions } from './person-info-questions';

@Module({
  providers: [HelloCommander, PersonInfoQuestions],
  exports: [HelloCommander],
})
export class HelloCommanderModule {}
