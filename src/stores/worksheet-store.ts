import { defineStore } from 'pinia';

export type TWorksheet = [number, number];

export enum EOperations {
  ADDITION = '+',
  SUBTRACTION = '-',
  MULTIPLICATION = '×',
  DIVISION = '÷'
}

export interface IWorksheetState {
  worksheets: TWorksheet[]
  currentOperation: EOperations | ''
}

export const useWorksheetStore = defineStore('worksheet', {
  state: (): IWorksheetState => ({
    worksheets: [],
    currentOperation: '',
  }),

  actions: {
    generate(operation: EOperations, maxDigit = 2, count = 6) {
      switch (operation) {
        case EOperations.ADDITION:
        case EOperations.SUBTRACTION:
        case EOperations.MULTIPLICATION:
        case EOperations.DIVISION:
          this.currentOperation = operation;
          this.worksheets = [];

          for (let i = 0; i < count; i += 1) {
            const firstNum = Math.floor(Math.random() * (10 * maxDigit));
            const secondNum = Math.floor(Math.random() * (10 * maxDigit));

            this.worksheets.push([
              Math.max(firstNum, secondNum),
              Math.min(firstNum, secondNum),
            ]);
          }

          break;

          // case EOperations.DIVISION: {
          //   //
          //   return;
          // }

        default:
          throw TypeError();
      }
    },

    remove() {
      this.worksheets = [];
      this.currentOperation = '';
    },
  },
});
