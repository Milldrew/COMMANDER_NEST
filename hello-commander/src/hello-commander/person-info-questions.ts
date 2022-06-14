import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'personInfo' })
export class PersonInfoQuestions {
  @Question({
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  })
  parseName(val: string) {
    return val;
  }
  @Question({
    type: 'input',
    name: 'age',
    message: 'How old are you?',
  })
  parseAge(val: string) {
    return Number(val);
  }
}
