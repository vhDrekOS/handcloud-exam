import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  declarations: [GenericModalComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
