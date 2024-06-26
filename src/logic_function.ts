import {response} from "./endpoints";
import {GetPartecipants} from "./event";
import {
  current_question,
  flags,
  partecipants,
  question,
  question_match
} from "./global_variable";
import {Match} from "./match";
import {UserSendRequest} from "./user";
import {getRandomIndex, sleep} from "./utils";

// I send the same number to the matching couple
export async function Start(EventID: string) {
  flags[EventID] = true;
  while (flags[EventID]) {
    {
      let partecipants = await GetPartecipants(EventID);
      ShareQuestion(EventID, partecipants);
      // await sleep(5)
      await sleep(0.1)
      const matches = question_match[EventID].match(partecipants)

      for (let i = 0; i < matches.length; i++) {

        new UserSendRequest()
            .to(matches[i].a)
            .what('match')
            .content(matches[i].b, i + 1)
            .send();

        new UserSendRequest()
            .to(matches[i].b)
            .what('match')
            .content(matches[i].a, i + 1)
            .send();
      }

      await sleep(0.1)
    }
  }
}

export async function ShareQuestion(EventID: string, ps: string[]) {
  let i = getRandomIndex(question)
  current_question[EventID] = i
  question_match[EventID] = new Match(i)

  for (let p of ps) {

    new UserSendRequest()
        .to(p)
        .what('question')
        .content({
          question : question[current_question[EventID]].q,
          answers : question[current_question[EventID]].a,
          event : EventID
        })
        .send()
  }
}

export function Stop(EventID: string) { flags[EventID] = false; }

export interface AnswerResponse {
  event: string;
  user: string;
  answer: number;
  eval: number;
}

export function Answer(ar: AnswerResponse):
    {ok: boolean, error_message: string} {
  // add the answer of the partecipant
  question_match[ar.event].answer(ar.user, ar.answer)
  // evaluate the question
  question[current_question[ar.event]].addLike(ar.eval)

  return response()
}
