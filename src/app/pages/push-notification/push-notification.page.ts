import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.page.html',
  styleUrls: ['./push-notification.page.scss'],
})
export class PushNotificationPage implements OnInit {

  id = null;
 
  constructor(private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
 
  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
  }

}
