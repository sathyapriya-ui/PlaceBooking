import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../booking/create-booking/create-booking.component';
import { Places } from 'src/app/model/places';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-discover-detail',
  templateUrl: './discover-detail.page.html',
  styleUrls: ['./discover-detail.page.scss'],
})
export class DiscoverDetailPage implements OnInit {

 placeBookDetail: Places; 

  modalEl: (value: HTMLIonModalElement) => HTMLIonModalElement | PromiseLike<HTMLIonModalElement>;

  constructor(private router: Router,
              private navCtrl: NavController,
              private placeService: PlaceService,
              private route : ActivatedRoute, 
              private modalCtrl: ModalController) {


               }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('tabs/offers');
        return;
      }
      this.placeBookDetail = this.placeService.place.find(
        p=> p.id === paramMap.get('id')
      );
    });
  }

  onBookPlace(){
   // this.router.navigateByUrl('/tabs/discover');

console.log(this.placeBookDetail);

   this.modalCtrl
   .create({ component: CreateBookingComponent ,
              componentProps: { value: this.placeBookDetail}
            })
   .then(modalEl => {
     modalEl.present();
     return modalEl.onDidDismiss();
   })
   .then(resultData => {
     console.log(resultData.data, resultData.role);
     if( resultData.role === 'confirm'){
       console.log('Booked!')
     }
   })
  }
  

}
