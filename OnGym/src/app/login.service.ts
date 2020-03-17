import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Entrenador} from './models/entrenador'


const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  EUrl: string = 'http://localhost:3000/Entrenadores';
  uE:Entrenador;
  constructor(private http: HttpClient) { }

  loginE(username:string,password:string){
    return this.http.get(this.EUrl+'/Entrenadores?username='+username+'&password='+password).subscribe(
      (data: Entrenador) => {
        this.uE = data;
        console.table(this.uE);
      }); 
  }

}   
