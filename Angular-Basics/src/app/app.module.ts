import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DPCReplicaComponent } from "./Components/dpc-replica/dpc-replica.component";
import { PasswordGeneratorComponent } from "./Components/password-generator/password-generator.component";
import { PractiseFormComponent } from "./Components/practise-form/practise-form.component";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    DPCReplicaComponent,
    PasswordGeneratorComponent,
    PractiseFormComponent,
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
