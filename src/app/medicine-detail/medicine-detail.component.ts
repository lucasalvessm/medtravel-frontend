import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Medicine } from '../commons/model/medicine.model';
import { Address } from '../commons/model/address.model';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.less']
})
export class MedicineDetailComponent implements OnInit {
  @Input() medicine: Medicine;
  address: Address;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.medicine);
    this.address = this.medicine.addressInfo ? this.medicine.addressInfo : new Address;
  }

}
