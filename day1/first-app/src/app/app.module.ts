import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringListComponent } from './components/string-list/string-list.component';
import { EndWithPipe } from './pipes/end-with.pipe';
import { MarkPipe } from './pipes/mark.pipe';
import { UseServiceComponent } from './components/use-service/use-service.component';
import { MessageService } from './services/message.service';
import { CounterComponent } from './components/counter/counter.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StringListComponent,
    EndWithPipe,
    MarkPipe,
    UseServiceComponent,
    CounterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //providers: [{ provide: MessageService, useClass: MessageService }],
  // providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
