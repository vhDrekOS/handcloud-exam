import { CarsService } from './../../../../core/services/cars.service';
import { UsedCarsManagmentComponent } from './../used-cars-managment/used-cars-managment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Car } from '@app/shared/models/car.model';
import { GenericModalComponent } from '@app/shared/components/generic-modal/generic-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'hc-used-cars-list',
  templateUrl: './used-cars-list.component.html',
  styleUrls: ['./used-cars-list.component.scss']
})
export class UsedCarsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'brand', 'model', 'year', 'kilometers', 'price', 'actions'];
  dataSource: Car[] = [];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private carsService: CarsService,
  ) {
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getAll().subscribe((data: []) => {
      this.dataSource = data as Car[];
    });
  }

  onAddCar(): void {
    const dialogRef = this.dialog.open(UsedCarsManagmentComponent, { width: '500px', data: null });

    dialogRef.afterClosed().subscribe(success => {
      if (success) {
        this.snackBar.open('RECORD CREATED');
        this.loadCars();
      }
      //  else {
      //   this.snackBar.open('AN ERROR OCCURRED WHILE CREATING THE RECORD');
      // }
    });
  }

  onEditCar(row: Car): void {
    const dialogRef = this.dialog.open(UsedCarsManagmentComponent, { width: '500px', data: row });

    dialogRef.afterClosed().subscribe(success => {
      if (success) {
        this.snackBar.open('RECORD UPDATED');
        this.loadCars();
      }
      //  else {
      //   this.snackBar.open('AN ERROR OCCURRED WHILE EDITING THE RECORD');
      // }
    });
  }

  onDeleteCar(row: Car): void {
    const confirm = this.dialog.open(GenericModalComponent, {
      width: '400px',
      data: {
        title: 'CONFIRM DELETE',
        message: `you want to proceed to delete record ${row.id}?`,
        showAccept: true,
        showCancel: true
      }
    });

    confirm.afterClosed().subscribe(accept => {
      if (accept) {
        this.carsService.delete(row.id).subscribe((data: any) => {
          this.snackBar.open('RECORD DELETED');
          this.loadCars();
        });
      }
    });
  }
}
