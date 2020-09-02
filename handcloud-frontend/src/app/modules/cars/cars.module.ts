import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../shared/angular-material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { UsedCarsListComponent } from './components/used-cars-list/used-cars-list.component';
import { UsedCarsManagmentComponent } from './components/used-cars-managment/used-cars-managment.component';


@NgModule({
  declarations: [
    UsedCarsListComponent,
    UsedCarsManagmentComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
