import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-quantity',
  imports: [],
  templateUrl: './asset-quantity.component.html',
  styles: ``
})
export class AssetQuantityComponent {
  @Input() coin:any
}
