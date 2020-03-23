import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedicineService } from '../commons/service/medicine.service';
import { Medicine } from '../commons/model/medicine.model';
import { ToastService } from '../components/toast/toast.service';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';


@Component({
  selector: 'app-medicine-insert',
  templateUrl: './medicine-insert.component.html',
  styleUrls: ['./medicine-insert.component.less']
})
export class MedicineInsertComponent implements OnInit {

  handleCallback: Function;

  images: string[] = [];

  medicineForm = this.fb.group({
    fantasyName: ['', Validators.required],
    openingHours: ['', Validators.required],
    price: ['', Validators.required],
    activities: [''],
    teachingMethod: [''],
    cnpj: [''],
    address: [''],
    city: [''],
    neighborhood: ['']
  });

  constructor(
    private fb: FormBuilder,
    private medicineService: MedicineService,
    private toastService: ToastService
  ) {
    this.handleCallback = this.getImages.bind(this);
  }

  ngOnInit() {
  }

  onSubmit = (upload: FileUploadComponent) =>
    this.medicineService
      .insert(Medicine.fromForm(this.medicineForm.value, this.images))
      .subscribe(
        () => {
          this.medicineForm.reset();
          upload.resetSelection();
          this.toastService.success('Medicine inserted successfully');
        },
        res => this.toastService.error(`Medicine not inserted successfully. Error: ${res.error.message}`)
      );

  getImages = (images: string[]) => this.images = images;

}
