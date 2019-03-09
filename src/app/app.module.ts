import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ButtonComponent, DynamicFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
