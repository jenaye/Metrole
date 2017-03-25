import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http,Headers,URLSearchParams } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public stationstart:string;
	public stationsend:string;
	public temps:string;
	public stationshoraire:string='matin';
	protected resultats:any='';


  constructor(public navCtrl: NavController,public http: Http) {
    
  }

  public changeStart(value){
  	console.log(value);
  	this.stationstart=value;
  	this.resultats=null;
  }


  public changeHoraire(value){
  	console.log(value);
  	this.stationshoraire=value;
  	this.resultats=null;
  }


  public changeEnd(value){
  	console.log(value);
  	this.stationsend=value;
  	this.resultats=null;
  }

  public  sendForm(){


	let body = new URLSearchParams();

        body.set("start", this.stationstart);
        body.set("end", this.stationsend);
         body.set("horaire", this.stationshoraire);
        

	let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  this.http.post('http://localhost:7621/',body.toString(), {headers : headers
  }).subscribe(res=>{ 
  		if(res.status===200){
  			this.resultats=res.json();
  			this.temps = this.resultats[this.resultats.length-1].cost;

  			this.resultats.map(item => { console.log(item.name,'name')})	;
  			console.log(res.json());
  		}

  	}); 
}

}
