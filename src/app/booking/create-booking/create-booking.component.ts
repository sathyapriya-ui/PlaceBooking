import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Places } from 'src/app/model/places';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() value: Places;

  constructor(private modalCtrl: ModalController) {} 

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null ,'cancel');

  }
  onBookPlace(){
    this.modalCtrl.dismiss({ message: 'This is dummy message' }, 'confirm');

  }

}
