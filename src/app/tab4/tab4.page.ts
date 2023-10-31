import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numeroRandom : number = 0;
  numeroImput : number = 0;
  respuesta : string = "Introduce un número entre 0 y 100";
  constructor() { }

  ngOnInit() {
    this.numeroRandom = Math.floor(Math.random()*100);
    console.log(this.numeroRandom);
  }

  onClick() {
    if (this.numeroImput > this.numeroRandom) {
      this.respuesta = "Introduce un número menor";
    }
    else if(this.numeroImput < this.numeroRandom){
      this.respuesta = "Introduce un número mayor";
    }
    else{
      this.respuesta = "Has acertado";
    }

  }

}
