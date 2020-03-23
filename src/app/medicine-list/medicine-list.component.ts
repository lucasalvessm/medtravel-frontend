import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MedicineService } from '../commons/service/medicine.service';
import { ToastService } from '../components/toast/toast.service';
import { MedicineLight } from '../commons/model/medicine.light.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicineDetailComponent } from '../medicine-detail/medicine-detail.component';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.less']
})
export class MedicineListComponent implements OnInit {

  public medicines: MedicineLight[];
  openDetail: Function;
  @ViewChild('app-medicine-detail', { static: false }) el: ElementRef;

  constructor(
    private medicineService: MedicineService,
    private toastService: ToastService,
    private modalService: NgbModal,
  ) {
    this.openDetail = this.openMedicineDetail.bind(this);
  }

  ngOnInit() {
    this.medicineService
      .list()
      .subscribe(medicines => {
        this.medicines = medicines;
      },
        error => {
          this.toastService.error(`MedicineList not listed successfully. Error: ${error.message}`)
        });
  }

  openMedicineDetail = (medicineLight: MedicineLight) => {
    this.medicineService
      .detail(medicineLight.id)
      .subscribe(medicine => {
        const modalRef = this.modalService.open(MedicineDetailComponent, { size: 'lg' });
        modalRef.componentInstance.medicine = medicine;
      },
        error =>
          this.toastService.error(`Medicine not detailed successfully. Error: ${error.message}`)
      );

  }

}
