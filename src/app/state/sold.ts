import { State } from "./state";
import { Injectable } from "@angular/core";
import { SoldOutState } from "./soldOut";
import { NoCoinState } from "./noCoin";

@Injectable()
export class SoldState extends State {
  name = "販賣中";

  insertCoin() {
    this.candyMachine.display("這個階段不能投代幣");
  }

  ejectCoin() {
    this.candyMachine.display("這個階段不能退代幣");
  }

  turnCrank() {
    this.candyMachine.display("這個階段不能轉動曲柄");
  }

  dispense() {
    this.candyMachine.display("恭喜你獲得一個糖果");
    this.candyMachine.count = this.candyMachine.count - 1;
    if (this.candyMachine.count == 0) {
      this.candyMachine.state = this.candyMachine.soldOut;
    } else {
      this.candyMachine.state = this.candyMachine.noCoin;
    }
  }
}
