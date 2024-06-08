declare global {
    interface Array<T> {
      snail(rowsCount: number, colsCount: number): number[][];
    }
  }
  
  export {};