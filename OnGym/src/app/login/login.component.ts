import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs'
import { Entrenador } from '../models/entrenador';
import { Atleta } from '../models/Atleta';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  typeUser:number;
  private entrenador:Entrenador={
    username:'',
    password:'',
  
  };
  atleta:Atleta;


  constructor(private loginService :LoginService,
              private route: ActivatedRoute, ) { }

  

  ngOnInit(): void {
    this.getTypeUser();
  }
  
  /*logAtleta(username: string, password: string): Observable<Atleta> {
   
    return 
    
  }*/

  logEntrenador(username: string, password: string){
    return this.loginService.loginE(username,password); 
  }
  logIn(username: string, password: string){
    if(this.typeUser==1){
        this.logEntrenador(username,password)
    }else{
      if (this.typeUser==2) {
        
      } else {
        
      }
    }
  }

  getTypeUser():void{
    this.typeUser=+this.route.snapshot.paramMap.get('id');
    console.log(this.typeUser);
  }
}
