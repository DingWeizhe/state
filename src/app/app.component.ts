import { Component } from "@angular/core";
import { SoldOutState } from "./state/soldOut";
import { NoCoinState } from "./state/noCoin";
import { HasCoinState } from "./state/hasCoin";
import { SoldState } from "./state/sold";
import { State } from "./state/state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayText: string;
  public state: State;
  public count = 10;

  public constructor(
    public soldOut: SoldOutState,
    public noCoin: NoCoinState,
    public hasCoin: HasCoinState,
    public sold: SoldState
  ) {
    soldOut.setCandyMachine(this);
    noCoin.setCandyMachine(this);
    hasCoin.setCandyMachine(this);
    sold.setCandyMachine(this);

    if (this.count > 0) {
      this.state = this.noCoin;
    }
  }

  insertCoin() {
    this.state.insertCoin();
  }

  ejectCoin() {
    this.state.ejectCoin();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  display(text: string) {
    this.displayText = text;
  }
}
