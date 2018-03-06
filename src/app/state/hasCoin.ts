import { State } from "./state";
import { Injectable } from "@angular/core";
import { NoCoinState } from "./noCoin";
import { SoldState } from "./sold";

@Injectable()
export class HasCoinState extends State {
  name = "已投幣";

  insertCoin() {
    this.candyMachine.display("已經有投代幣了，不用再投了");
  }

  ejectCoin() {
    this.candyMachine.state = this.candyMachine.noCoin;
    this.candyMachine.display("退代幣給你");
  }

  turnCrank() {
    this.candyMachine.state = this.candyMachine.sold;
  }

  dispense() {
    this.candyMachine.display("沒辦法給你糖果");
  }
}
