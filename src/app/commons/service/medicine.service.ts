import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND } from '../urls';
import { Medicine } from '../model/medicine.model';
import { Observable } from 'rxjs';
import { MedicineLight } from '../model/medicine.light.model';

@Injectable()
export class MedicineService {
    uri = '/medicines';

    constructor(private httpClient: HttpClient) { }

    insert = (medicineList: Medicine): Observable<Medicine> =>
        this.httpClient.post<Medicine>(`${BACKEND}/${this.uri}`, medicineList);

    list = (): Observable<MedicineLight[]> =>
        this.httpClient.get<MedicineLight[]>(`${BACKEND}/${this.uri}`);

    detail = (id: number): Observable<Medicine> =>
        this.httpClient.get<Medicine>(`${BACKEND}/${this.uri}/${id}`);
}