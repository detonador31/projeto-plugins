import { AlertController, NavController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Geolocation, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  // tslint:disable: object-literal-shorthand

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  locationPoint = 'variado';

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  originPosition: string = null;
  destinationPosition: string = null;

  map: any;
  previousTracks = [];
  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  previousRoute = [];

  positionSubscription: Subscription;


  infoWindows: any = [];

  // Array para marcadores ao carregar o mapa
  markers: any = [
/*     {
      title: 'Tecnomed Saúde Ocupacional',
      latitude: '-23.5700423',
      longitude: '-46.6466466'
    }, */
    {
      title: 'Sesc Avenida Paulista',
      latitude: '-23.5707946',
      longitude: '-46.6458151'
    },
    {
      title: '9º Cartório de Registro Civil da Vila Mariana',
      latitude: '-23.571714',
      longitude: '-46.6455791'
    },
    {
      title: 'Padaria 14 de julho',
      latitude: '-23.554365',
      longitude: '-46.6461827'
    },
    {
      title: 'Padaria Bella Paulista',
      latitude: '-23.561074',
      longitude: '-46.647848'
    }
  ];

  constructor(
    public navCtrl: NavController,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  /* -------------------------------- Primeira Versão --------------------------------------------------------------- */

  ionViewWillEnter() {
  /* Primeira versão: carrega o mapa junto e o que tiver no array de marks, carrega o mapa, marcadores e opção para
  navegar do site do google maps até o local */
    // this.showMap();

    this.carregarSegundaVer();
  }



  // Adiciona os marcadores junto com uma janela de informações personalizadas
  addMarkersToMap(markers) {
    for (const marker of markers) {
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      const mapMarker = new google.maps.Marker({
        // tslint:disable-next-line: object-literal-shorthand
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  // Carrega a janela de cada marcador com botão para fechar e função para fechar ao clicar em outro marcador
  addInfoWindowToMarker(marker) {
    const infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                              '<ion-button id="navigate">Rota</ion-button>' +
                              '</div>';
    const infoWindow  = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
      // Código para o botão de navegar, caso clicado abre o google maps para navegar do ponto de partida até a coordenada do marcador
      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('navigate').addEventListener('click', () => {
          window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude + ',' + marker.longitude);
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }

  // fecha qualquer janela de informação de marcador aberto antes de abrir a clicada
  closeAllInfoWindows() {
    for (const window of this.infoWindows) {
      window.close();
    }
  }

  // Mostra o map com algumas opções setadas, executa ao final o método para adicionar os marcadores no mapa
  showMap() {
    const location = new google.maps.LatLng(-23.5700423, -46.6466466);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

/* -------------------------------- Segunda Versão --------------------------------------------------------------- */

  carregarSegundaVer(){
    /* Segunda versão: As linhas abaixo carrega o mapa, lê a geolocalização do dispositivo
    e salva os ultimos rastreamentos */
    this.plt.ready().then(() => {
      this.loadHistoricRoutes();
      let lat: any;
      let lng: any;
      let mapOptions: any;

      let location: any;

      lat = -23.5700423;
      lng = -46.6466466;
      location = new google.maps.LatLng(lat, lng);
      mapOptions = {
        center: location,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: false
      };

      if (this.locationPoint !== 'fixo') {
        delete mapOptions.center;
        lat = null;
        lng = null;
      }

      this.map = new google.maps.Map(this.mapRef.nativeElement, mapOptions);
      if (!lat) {
        this.geolocation.getCurrentPosition().then(pos => {
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
          const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          this.originPosition = latLng;

          this.map.setCenter(latLng);
          this.map.setZoom(16);
          const myLocation = {
            title: 'Minha Localização Atual',
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          };
          this.markers.push(myLocation);
          this.addMarkersToMap(this.markers);

        }).catch((error) => {
          console.log('Error getting location', error);
        });
      } else {
        const myLocation = {
          title: 'Minha Localização Atual',
          latitude: lat.toString(),
          longitude: lng.toString()
        };
        this.markers.push(myLocation);
        this.addMarkersToMap(this.markers);
      }

    });
  }

  loadHistoricRoutes() {
    this.storage.get('routes').then(data => {
      if (data) {
        this.previousTracks = data;
      }
    });
  }

  startTracking() {
    this.isTracking = true;
    this.trackedRoute = [];

    this.positionSubscription = this.geolocation.watchPosition()
      .subscribe(position => {
      if ((position as Geoposition).coords !== undefined) {
        const geoposition = (position as Geoposition);
        console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);

        setTimeout(() => {
          this.trackedRoute.push({lat: geoposition.coords.latitude, lng: geoposition.coords.longitude});
          this.redrawPath(this.trackedRoute);
        });

      } else {
        const positionError = (position as PositionError);
        console.log('Error ' + positionError.code + ': ' + positionError.message);
      }
    });
  }

  redrawPath(path) {
    this.currentMapTrack = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#ff00ff',
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    this.currentMapTrack.setMap(this.map);
  }

  stopTracking() {
    const newRoute = { finished: new Date().getTime(), path: this.trackedRoute};
    this.previousTracks.push(newRoute);
    this.storage.set('routes', this.previousTracks);

    this.isTracking = false;
    this.positionSubscription.unsubscribe();
    this.currentMapTrack.setMap(null);
  }

  showHistoryRoute(route) {
    this.redrawPath(route);
  }

/* -------------------------------- Segunda Versão --------------------------------------------------------------- */
  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service, display, request: any) {
    service.route(request, (result, status) => {
      console.log(result);
      if (status === 'OK') {
        display.setDirections(result);
        display.setMap(this.map);
      }
    });
  }

  locationPointTypeChanged(e) {
    const on = e.detail.checked;
    this.locationPoint = on ? 'fixo' : 'variado';
    this.carregarSegundaVer();
  }

}
