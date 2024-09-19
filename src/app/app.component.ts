import { Component, Inject } from '@angular/core';
import { AudioService } from './views/audio.service';
import { isSupported } from 'angular-audio-context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social';

  constructor(
    @Inject(isSupported) public isSupported,
    private readonly audio: AudioService){

  }
}
