import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { ClockComponent } from './components/clock/clock.component';
import { MyNumericComponent } from './components/my-numeric/my-numeric.component';
import { AddressComponent } from './components/address/address.component';
import { AddressWithControlContainerComponent } from './components/address-with-control-container/address-with-control-container.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditPersonComponent,
    ClockComponent,
    MyNumericComponent,
    AddressComponent,
    AddressWithControlContainerComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
