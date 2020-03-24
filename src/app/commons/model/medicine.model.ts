import { Address } from './address.model';

export class Medicine {
    idMedicine: number;
    name: string;
    description: string;
    composition: string;
    posology: string;
    leaflet: Number;

    imageBase64: string;

    addressInfo: Address;

    public static fromForm(formValues, medicineImage, addressList): Medicine {
        const medicine = new Medicine();
        medicine.name = formValues.name;
        medicine.description = formValues.description;
        medicine.composition = formValues.composition;
        medicine.posology = formValues.posology;
        medicine.leaflet = formValues.leaflet;
        medicine.imageBase64 = medicineImage;

        medicine.addressInfo = addressList;
        return medicine;
    }
}