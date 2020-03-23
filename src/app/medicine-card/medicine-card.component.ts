import { Component, OnInit, Input } from '@angular/core';
import { MedicineLight } from '../commons/model/medicine.light.model';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.less']
})
export class MedicineCardComponent implements OnInit {

  @Input()
  public onDetail: Function;

  @Input()
  public medicineLight: MedicineLight;

  constructor() { }

  ngOnInit() {
  }

  openDetail = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    this.onDetail(this.medicineLight);
  }

}
