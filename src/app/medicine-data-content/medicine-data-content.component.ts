import { Component, OnInit, Input } from '@angular/core';
import { Medicine } from '../commons/model/medicine.model';

@Component({
  selector: 'app-medicine-data-content',
  templateUrl: './medicine-data-content.component.html',
  styleUrls: ['./medicine-data-content.component.less']
})
export class MedicineDataContentComponent implements OnInit {

  @Input() public medicine: Medicine;

  constructor() { }

  ngOnInit() {
  }

}
