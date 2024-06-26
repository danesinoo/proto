// Original file: proto/match.proto

export const evaluation = {
  LIKE: 0,
  NEUTRAL: 1,
  DISLIKE: 2,
} as const;

export type evaluation =
  | 'LIKE'
  | 0
  | 'NEUTRAL'
  | 1
  | 'DISLIKE'
  | 2

export type evaluation__Output = typeof evaluation[keyof typeof evaluation]
