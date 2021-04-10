import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Places } from 'src/app/model/places';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {
placeItem: Places;
  constructor(private route : ActivatedRoute, 
              private navCtrl: NavController,
              private placeservice: PlaceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')){
        this.navCtrl.navigateBack('tabs/offers');
        return;
      }
      this.placeItem = this.placeservice.place.find(
        p=> p.id === paramMap.get('id')
      );
    });
  }

}
