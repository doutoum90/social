import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioContextModule } from 'angular-audio-context';
import { BeepComponent } from './shared/beep/beep.component';

@NgModule({
  declarations: [AppComponent, BeepComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AudioContextModule.forRoot('balanced'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
