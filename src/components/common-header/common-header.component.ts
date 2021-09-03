import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

  modalDataResponse: any;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: LoginDialogComponent,
      componentProps: {
        'name': 'The Winter Soldier'
      }
    });
    
    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }


}
