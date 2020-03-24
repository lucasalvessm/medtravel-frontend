import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MedicineService } from '../commons/service/medicine.service';
import { Medicine } from '../commons/model/medicine.model';
import { ToastService } from '../components/toast/toast.service';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { Address } from '../commons/model/address.model';


@Component({
  selector: 'app-medicine-insert',
  templateUrl: './medicine-insert.component.html',
  styleUrls: ['./medicine-insert.component.less']
})
export class MedicineInsertComponent implements OnInit {

  handleCallback: Function;

  image: string;
  addressList: Address[] = [];

  medicineForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    composition: [''],
    posology: [''],
    leaflet: ['']
  });

  constructor(
    private fb: FormBuilder,
    private medicineService: MedicineService,
    private toastService: ToastService
  ) {
    this.handleCallback = this.getImage.bind(this);
  }

  ngOnInit() {
  }

  onSubmit = (upload: FileUploadComponent) => {
    this.medicineService
    .insert(Medicine.fromForm(this.medicineForm.value, this.image, this.addressList))
    .subscribe(
      () => {
        this.medicineForm.reset();
        upload.resetSelection();
        this.toastService.success('Medicine inserted successfully');
      },
      res => this.toastService.error(`Medicine not inserted successfully. Error: ${res.error.message}`)
    );
  }
    

  getImage = (image: string) => this.image = image;

  addCountry = () => this.addressList.push(new Address());

  removeAddress = (event: Event, address: Address) => {
    event.preventDefault();
    this.addressList = this.addressList.filter(add => add !== address);
  }

}
