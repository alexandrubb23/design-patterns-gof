export class IndexOutOfBoundsException extends Error {
  constructor(index: number) {
    super(`Index ${index} is out of bounds`);
  }
}
