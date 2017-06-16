import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapdataService } from '../../../services/mapdata.service'
//import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader  } from '@agm/core';



declare var google: any;
@Component({
    selector: 'app-subtab1',
    templateUrl: './subtab1.component.html',
    styleUrls: ['./subtab1.component.css']
})
export class Subtab1Component implements OnInit, AfterViewInit {  
    zoom:number = 8;
    lat: number = 18.989089;
    lng: number = 75.760078;
    markers:marker[];
    styleArray:any[] = [
                          {
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#1d2c4d"
                              }
                            ]
                          },
                          {
                            "elementType": "labels",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#8ec3b9"
                              }
                            ]
                          },
                          {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#1a3646"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.country",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "color": "#4b6878"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.land_parcel",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#64779e"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.neighborhood",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "administrative.province",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "color": "#4b6878"
                              }
                            ]
                          },
                          {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "color": "#334e87"
                              }
                            ]
                          },
                          {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#023e58"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#283d6a"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#6f9ba5"
                              }
                            ]
                          },
                          {
                            "featureType": "poi",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#1d2c4d"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.business",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#023e58"
                              }
                            ]
                          },
                          {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#3C7680"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#304a7d"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#98a5be"
                              }
                            ]
                          },
                          {
                            "featureType": "road",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#1d2c4d"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#2c6675"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                              {
                                "color": "#255763"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#b0d5ce"
                              }
                            ]
                          },
                          {
                            "featureType": "road.highway",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#023e58"
                              }
                            ]
                          },
                          {
                            "featureType": "transit",
                            "stylers": [
                              {
                                "visibility": "off"
                              }
                            ]
                          },
                          {
                            "featureType": "transit",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#98a5be"
                              }
                            ]
                          },
                          {
                            "featureType": "transit",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                              {
                                "color": "#1d2c4d"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.line",
                            "elementType": "geometry.fill",
                            "stylers": [
                              {
                                "color": "#283d6a"
                              }
                            ]
                          },
                          {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#3a4762"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                              {
                                "color": "#0e1626"
                              }
                            ]
                          },
                          {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                              {
                                "color": "#4e6d70"
                              }
                            ]
                          }
                        ];

    
    
    
constructor(private _mapdataService:MapdataService, ) {        
       /*
        private _wrapper: GoogleMapsAPIWrapper
       this._wrapper.getNativeMap().then((m) => {
            var geocoder = new google.maps.Geocoder();
            console.log("geocoder");
            this.geocodeAddress(geocoder);
        });*/
    }

    ngOnInit() {
        this._mapdataService.getmapData()
        .subscribe(resmpaData => {
            this.markers = resmpaData
             console.log(this.markers);
        });
       
    }
    
    ngAfterViewInit(){
   
        /*this.mapsApiLoader.init().then(() => {
            console.log('google script loaded');
            var geocoder = new google.maps.Geocoder();
        });*/
    }
    
    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    geocodeAddress(geocoder) {
        var address = "beed" //document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            console.log(results[0].geometry.location);
            /*resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });*/
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    
    
}

interface marker{
    city:string,
    lat:number,
    lng: number
}
