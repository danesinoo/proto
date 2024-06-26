import {Match} from "./match";
import {Question} from "./question";

export let flags: {[event: string]: boolean} = {}

export let partecipants: {[event: string]: (string)[]} = {}

export let question: Question[] = [];

export let question_match: {[event: string]: Match} = {}

export let current_question: {[event: string]: number} = {}
