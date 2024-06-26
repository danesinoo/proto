import {question} from "./global_variable";

export class Question {
  q: string;
  a: string[];
  like: number;
  neutral: number;
  dislike: number;

  constructor(q: string) {
    this.q = q;
    this.a = [];
    this.like = 0;
    this.neutral = 0;
    this.dislike = 0;
  }

  public addAnswer(a: string): this {
    this.a.push(a)
    return this
  }

  public addLike(n: number) {
    switch (n) {
    case 0:
      this.like++;
      break;
    case 2:
      this.dislike++;
      break;

    default:
      this.neutral++
    }
  }

  public qa(): {q: string, a: string[]} {
    return { q: this.q, a: this.a }
  }

  /// TODO: function which return a question from a string
  /// TODO: function which return a string from a question
}

export function SetQuestion() {
  question.push(new Question("What's your favorite colour?")
                    .addAnswer("Red")
                    .addAnswer("Green")
                    .addAnswer("Blue")
                    .addAnswer("White")
                    .addAnswer("Black"))

  question.push(new Question("What's your favorite animal?")
                    .addAnswer("Dog")
                    .addAnswer("Cat")
                    .addAnswer("Bird")
                    .addAnswer("Fish")
                    .addAnswer("Turtle"))

  question.push(new Question("What's your favorite food?")
                    .addAnswer("Pizza")
                    .addAnswer("Pasta")
                    .addAnswer("Hamburger")
                    .addAnswer("Sushi")
                    .addAnswer("Candies"))

  // though we don't know the sex of the user
  question.push(new Question("Who do you wanna be paired with?")
                    .addAnswer("Girl")
                    .addAnswer("Boy")
                    .addAnswer("Both"))
}
