

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    save(order: any): Observable<any> {
        return this.http.post(`${environment.todoAPI}`, order) as Observable<any>;
    }

    find(): Observable<any> {
        console.log('find tasks');
        return this.http.get(`${environment.todoAPI}`) as Observable<any>;
    }


}
