import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SoldState } from "./state/sold";
import { SoldOutState } from "./state/soldOut";
import { NoCoinState } from "./state/noCoin";
import { HasCoinState } from "./state/hasCoin";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SoldOutState, NoCoinState, HasCoinState, SoldState],
  bootstrap: [AppComponent]
})
export class AppModule {}
