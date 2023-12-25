/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 * 
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 * 
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 * 
 * 輸入: []
 * 輸出: 0
 */
export function arraySum(numbers: number[]): number {
    // 在此實現函式
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    return sum;
}

const input1: number[] = [1, 2, 3, 4, 5];
const output1: number = arraySum(input1);
console.log(output1);

const input2: number[] = [-1, -2, -3];
const output2: number = arraySum(input2);
console.log(output2);

const input3: number[] = [];
const output3: number = arraySum(input3);
console.log(output3);