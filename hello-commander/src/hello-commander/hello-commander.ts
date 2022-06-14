import {
  Command,
  CommandRunner,
  InquirerService,
  Option,
} from 'nest-commander';

@Command({ name: 'sayHello', options: { isDefault: true } })
export class HelloCommander implements CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {}

  async run(inputs: string[], options: { name: string; age: number }) {
    options = await this.inquirerService.ask('personInfo', options);
    console.log(`Hello ${options.name} are you ${options.age} years old?`);
  }
  @Option({
    flags: '-n, --name [name]',
    description: 'users name',
  })
  parseName(val: string) {
    return val;
  }

  @Option({
    flags: '-a, --age [age]',
    description: 'users age',
  })
  parseAge(val: string) {
    return Number(val);
  }
}
