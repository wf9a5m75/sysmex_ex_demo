import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {

    @Input() name: string;

    constructor(
      private modalCtr: ModalController,
    ) { }

    ngOnInit() { }

    async close() {
      console.log("--->close");
      const closeModal: string = "Modal Closed";
      await this.modalCtr.dismiss(closeModal);
    }

}
