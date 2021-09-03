import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeyondABetterBoxPageRoutingModule } from './beyond-a-better-box-routing.module';
import { CommonFooterComponent } from "../../components/common-footer/common-footer.component";

import { BeyondABetterBoxPage } from './beyond-a-better-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeyondABetterBoxPageRoutingModule
  ],
  declarations: [BeyondABetterBoxPage, CommonFooterComponent]
})
export class BeyondABetterBoxPageModule {}
