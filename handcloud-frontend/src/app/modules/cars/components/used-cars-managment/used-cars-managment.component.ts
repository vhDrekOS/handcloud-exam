import { Car } from './../../../../shared/models/car.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarsService } from '@app/core/services/cars.service';
import { isNullOrUndefined } from 'util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateForm } from '@app/shared/functions/common.function';

@Component({
  selector: 'hc-used-cars-managment',
  templateUrl: './used-cars-managment.component.html',
  styleUrls: ['./used-cars-managment.component.scss']
})
export class UsedCarsManagmentComponent implements OnInit {

  carData: Car;
  carForm: FormGroup;
  isUpdate = false;
  brands = [
    { value: 'Ford', viewValue: 'Ford' },
    { value: 'Chevrolet', viewValue: 'Chevrolet' },
    { value: 'Nissan', viewValue: 'Nissan' },
    { value: 'Volkswagen', viewValue: 'Volkswagen' },
    { value: 'Toyota', viewValue: 'Toyota' }
  ];

  years = [
    { value: 2010, viewValue: '2010' },
    { value: 2011, viewValue: '2011' },
    { value: 2012, viewValue: '2012' },
    { value: 2013, viewValue: '2013' },
    { value: 2014, viewValue: '2014' },
    { value: 2015, viewValue: '2015' },
    { value: 2016, viewValue: '2016' },
    { value: 2017, viewValue: '2017' },
    { value: 2018, viewValue: '2018' },
    { value: 2019, viewValue: '2019' },
    { value: 2020, viewValue: '2020' }
  ];

  constructor(
    public dialogRef: MatDialogRef<UsedCarsManagmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private carsService: CarsService
  ) {
    this.carData = data;
    this.isUpdate = !isNullOrUndefined(data);
    this.carForm = this.formBuilder.group({
      id: [null],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      year: [null, Validators.required],
      kilometers: [null, [Validators.required, Validators.min(0), Validators.max(1000000)]],
      price: [null, [Validators.required, Validators.min(1), Validators.max(10000000)]],
      description: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      this.loadCarData(this.carData);
    }
  }

  get form(): any { return this.carForm.controls; }

  loadCarData(data: Car): void {
    this.form.id.setValue(data.id);
    this.form.brand.setValue(data.brand);
    this.form.description.setValue(data.description);
    this.form.model.setValue(data.model);
    this.form.year.setValue(data.year);
    this.form.kilometers.setValue(data.kilometers);
    this.form.price.setValue(data.price);
  }

  onSaveCar(): void {
    if (!validateForm(this.carForm)) {
      this.snackBar.open('INVALID DATA');
      return;
    }

    const newCar: Car = {
      id: this.form.id.value,
      brand: this.form.brand.value,
      description: this.form.description.value,
      model: this.form.model.value,
      year: this.form.year.value,
      kilometers: this.form.kilometers.value,
      price: this.form.price.value
    };
    if (this.isUpdate) {
      this.carsService.put(newCar).subscribe((data: any) => {
        console.log(newCar);
        this.dialogRef.close(true);
      });
    } else {
      this.carsService.post(newCar).subscribe((data: any) => {
        console.log(newCar);
        this.dialogRef.close(true);
      });
    }
  }

}
