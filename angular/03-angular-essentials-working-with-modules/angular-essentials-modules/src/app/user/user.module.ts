import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { CardModule } from "../shared/card/card.module";

@NgModule({
    declarations: [UserComponent],
    imports: [CommonModule, CardModule],
    exports: [UserComponent],
})
export class UserModule {}