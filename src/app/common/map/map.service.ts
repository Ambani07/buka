import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';


@Injectable()
export class MapService{

    private geoCoder;
    private locationCache: any = {};
    constructor(private camelizePipe: CamelizePipe){

    }

    private camelize(value: string): string{
        return this.camelizePipe.transform(value);
    }

    private cacheLocation(location: string, coordinates: any){
        debugger;
        const camelizedLocation = this.camelize(location);

        debugger;
        this.locationCache[camelizedLocation] = coordinates;
    }

    private isLocationCached(location: string): boolean{
        return this.locationCache[this.camelize(location)] ? true : false;
    }



    public geocodeLocation(location: string): Observable<any>{
        if(!this.geoCoder) { this.geoCoder = new (<any>window).google.maps.Geocoder(); }

        return new Observable((observer) =>{

            if(this.isLocationCached(location)){
                //return location from cache
                debugger;
                observer.next(this.locationCache[this.camelize(location)]);

            }else{

                this.geoCoder.geocode({address: location}, (result, status) =>{
                    if(status === 'OK'){
                        const geometry = result[0].geometry.location;
    
                        const coordinates = {lat: geometry.lat(), lng: geometry.lng()};
                        debugger;
                        this.cacheLocation(location, coordinates);
    
                        observer.next(coordinates);
                    }else{
                        observer.error('Location could not be geocoded');
                    }
                });
            }



            
        });
    }
}