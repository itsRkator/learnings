import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from "./investment-results.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [InvestmentResultsComponent],
    imports: [CommonModule],
    providers: [],
    exports: [InvestmentResultsComponent]
})

export class InvestmentResultsModule {}