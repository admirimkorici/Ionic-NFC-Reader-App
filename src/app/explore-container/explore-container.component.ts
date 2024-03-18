import { Component, Input } from '@angular/core';
import { nfcreader } from 'nfcreader';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  constructor() {
    nfcreader.setNfcDataCallback((data: any) => {
      alert(JSON.stringify(data));
    })
  }

  async writeNFC() {
    await nfcreader.writeNfcTag({ data: "Test Test Test" }).then((res: any) => {
      alert(JSON.stringify(res.value));
    })
  }

  async startNfcReading() {
    await nfcreader.startNfcReading({}).then((result: any) => {
      alert(JSON.stringify(result));
    })
  }

  async stopReading() {
    await nfcreader.stopNfcReading({}).then((result: any) => {
      alert(JSON.stringify(result));
    })
  }

  async isActive() {
    await nfcreader.checkNfcAvailability({ available: false }).then((res: any) => {
      alert(JSON.stringify(res));
    })
  }

  async read() {
    await nfcreader.readNfcTag({ data: "" }).then((res: any) => {
      alert(JSON.stringify(res));
    })
  }
}
