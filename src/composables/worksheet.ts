import { ref } from "vue";

type TWorksheet = [number, number];

enum EOperations {
  ADDITION = "+",
  SUBTRACTION = "-",
  MULTIPLICATION = "×",
  DIVISION = "÷"
}

const currentOperation = ref<EOperations>();
const worksheets = ref<TWorksheet[]>([]);

export const useWorksheet = () => {
  const generate = (operation: EOperations, maxDigit = 1, count = 6) => {
    switch (operation) {
      case EOperations.ADDITION:
      case EOperations.SUBTRACTION:
      case EOperations.MULTIPLICATION:
      case EOperations.DIVISION:
        currentOperation.value = operation;
        worksheets.value = [];

        for (let i = 0; i < count; i++) {
          const firstNum = Math.floor(Math.random() * (10 * maxDigit));
          const secondNum = Math.floor(Math.random() * (10 * maxDigit));

          worksheets.value.push([
            Math.max(firstNum, secondNum),
            Math.min(firstNum, secondNum)
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
  };

  const clear = () => {
    worksheets.value = [];
  };

  return { EOperations, currentOperation, worksheets, generate, clear };
};
