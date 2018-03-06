import { State } from "./state";
import { HasCoinState } from "./hasCoin";
import { Injectable } from "@angular/core";

export class NoCoinState extends State {
  name = "未投幣";

  insertCoin() {
    this.candyMachine.state = this.candyMachine.hasCoin;
    this.candyMachine.display("投入代幣");
  }

  ejectCoin() {
    this.candyMachine.display("沒有代幣可以退");
  }

  turnCrank() {
    this.candyMachine.display("請先投入代幣");
  }

  dispense() {
    this.candyMachine.display("請先投入代幣");
  }
}
