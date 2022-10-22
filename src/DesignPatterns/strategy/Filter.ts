export interface Filter {
  apply(fileName: string): string;
}
