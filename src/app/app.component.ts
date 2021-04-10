import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreenPluginWeb } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,
    private authService: AuthService,
    private router: Router
    ) {}

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth')
    }
}
