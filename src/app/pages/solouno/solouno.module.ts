import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolounoPageRoutingModule } from './solouno-routing.module';

import { SolounoPage } from './solouno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolounoPageRoutingModule
  ],
  declarations: [SolounoPage]
})
export class SolounoPageModule {}
