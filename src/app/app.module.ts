import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskLabelComponent } from './components/task-label/task-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
