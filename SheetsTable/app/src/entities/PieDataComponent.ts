import { randomColor } from "../utils/calculationUtils";

export class PieDataComponent {
     count: number;
     key: string;
     color: string = randomColor();
  
    constructor(count: number, key: string) {
      this.count = count;
      this.key = key;
 
    }

    raiseCount(): void {
        this.count++
    }

    setCount(precentage: number): void {
        this.count = precentage
    }
}