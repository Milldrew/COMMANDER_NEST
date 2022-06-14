import { Command, CommandRunner } from 'nest-commander';

@Command({ name: 'sayHello', options: { isDefault: true } })
export class HelloCommander implements CommandRunner {
  async run(inputs: string[], options: { name: string; age: number }) {
    console.log(`Hello ${options.name} are you ${options.age} years old?`);
  }
}

@Option({flags: '-n <name>'})
parseName(val: string) {
  return val
}