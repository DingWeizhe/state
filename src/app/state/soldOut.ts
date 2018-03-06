import { State } from "./state";
import { Injectable } from "@angular/core";

@Injectable()
export class SoldOutState extends State {
  name = "已售完";

  constructor() {
    super();
  }

  insertCoin() {
    this.candyMachine.display("已經賣完了！別再投代幣了");
  }

  ejectCoin() {
    this.candyMachine.display("沒有投代幣，不能退代幣");
  }

  turnCrank() {
    this.candyMachine.display("沒有投代幣，不能轉動曲柄");
  }

  dispense() {
    this.candyMachine.display("沒有糖果掉下來");
  }
}
