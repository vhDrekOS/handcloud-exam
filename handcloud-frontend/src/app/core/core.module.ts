import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ToolbarNavigationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ToolbarNavigationComponent
  ],
})
export class CoreModule { }
