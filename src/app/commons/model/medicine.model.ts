import { Address } from './address.model';

export class Medicine {
    id: number;
    activities: string;
    teachingMethod: string;
    fantasyName: string;
    openingHours: string;
    price: Number;
    cnpj: String;

    images: Array<{
        imageBase64: string
    }> = [];

    addressInfo: Address;

    public static fromForm(formValues, medicineImages): Medicine {
        const medicine = new Medicine();
        medicine.activities = formValues.activities;
        medicine.teachingMethod = formValues.teachingMethod;
        medicine.fantasyName = formValues.fantasyName;
        medicine.openingHours = formValues.openingHours;
        medicine.price = new Number(formValues.price);
        medicine.images = medicineImages;
        medicine.cnpj = formValues.cnpj;

        const address = new Address;
        address.address = formValues.address;
        address.city = formValues.city;
        address.neighborhood = formValues.neighborhood;

        medicine.addressInfo = address;
        return medicine;
    }
}