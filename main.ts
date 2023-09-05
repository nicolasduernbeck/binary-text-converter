class Encryption {
  private binaryTable: number[] = [128, 64, 32, 16, 8, 4, 2, 1];

  constructor() {}

  private convertToBinary(num: number): string {
    let result: string = '';
    for (const x of this.binaryTable) {
      if (num - x >= 0) {
        result += '1';
        num -= x;
      } else {
        result += '0';
      }
    }
    return result;
  }

  private convertFromBinary(str: string): number {
    let result: number = 0;

    for (let i = 0; i < this.binaryTable.length; i++) {
      if (str[i] == '1') {
        result += this.binaryTable[i];
      }
    }

    return result;
  }

  public encrypt(value: string): string {
    const output: string[] = [];
    for (const x of value.split('')) {
      const binaryASCIINumber = this.convertToBinary(x.charCodeAt(0));
      output.push(binaryASCIINumber);
    }
    return output.join(' ');
  }

  public decrypt(str: string): string {
    let result = '';
    for (const x of str.split(' ')) {
      const ASCIICode = this.convertFromBinary(x);
      result += String.fromCharCode(ASCIICode);
    }
    return result;
  }
}
