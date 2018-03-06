import { AppComponent } from "../app.component";

export abstract class State {
  public candyMachine: AppComponent;

  abstract insertCoin();
  abstract ejectCoin();
  abstract turnCrank();
  abstract dispense();

  public setCandyMachine(machine: AppComponent) {
    this.candyMachine = machine;
  }
}
