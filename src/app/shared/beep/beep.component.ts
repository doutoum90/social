import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beep',
  templateUrl: './beep.component.html',
  styleUrls: ['./beep.component.scss'],
})
export class BeepComponent implements OnInit {
  constructor(private _audioContext: AudioContext) {}

  public async beep() {
    if (this._audioContext.state === 'suspended') {
      await this._audioContext.resume();
    }

    const oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.onended = () => oscillatorNode.disconnect();
    oscillatorNode.connect(this._audioContext.destination);

    oscillatorNode.start();
    oscillatorNode.stop(this._audioContext.currentTime + 0.5);
  }

  ngOnInit(): void {}
}
