export async function sleep(min: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, min * 60 * 1000));
}

export function getRandomIndex<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length)
}
