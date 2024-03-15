import { Component, Input } from '@angular/core';
import { nfcreader } from 'nfcreader';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  async testpluginMethod(msg: string) {
    await nfcreader.ReadNFCTag({ msg: msg }).then((res: any) => {
      alert("Return Value is: " + JSON.stringify(res.value));
    });
  }

  async writeNFC() {
    await nfcreader.WriteNFCTag(12345).then((res: any) => {
      alert(JSON.stringify(res.value));
    })
  }
}
