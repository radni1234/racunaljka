import {Component, QueryList, ViewChildren} from '@angular/core';
import {EnergentComponent} from "./energent/energent.component";
import {forEach} from "@angular/router/src/utils/collection";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedNamena: number;
  vrstaObjekta : string;
  namenaObjekta: string;
  tipObjekta: string;
  proizvod: number = 0;
  povrsina: number = 0;
  element: number = 1;
  specPotrosnja: number = 0;
  list: Array<number> = [];
  skalaPasos: Array<number> = [];
  namena: boolean = false;
  title = 'app';
  @ViewChildren('cmp') components:QueryList<EnergentComponent>;
  prvi: string;
  drugi: string;
  treci; string;
  klasa: number;
  klasaString: string;
  listOfKlasa: Array<string> = ["A++","A","B","C","D","E","F","G"];

  myObj = {
    "stambene":{ "jedanStan": {"nove":[0,10,17,33,65,98,130,163], "postojece":[0,12,20,38,75,113,150,188]}, "viseStanova":{"nove":[0,9,15,30,60,90,120,150], "postojece":[0,10,18,35,70,105,140,175]}},
    "nestambene":{ "upravne": {"nove":[0,8,14,28,55,83,110,138], "postojece":[0,10,17,33,65,98,130,163]}, "obraz":{"nove":[0,10,17,33,65,98,130,163], "postojece":[0,12,20,38,75,113,150,188]},"zdrav":{"nove":[0,15,25,50,100,150,200,250], "postojece":[0,18,30,60,120,180,240,300]},"turizam":{"nove":[0,14,23,45,90,135,180,225], "postojece":[0,15,25,50,100,150,200,250]},"sport":{"nove":[0,12,20,40,80,120,160,200], "postojece":[0,14,23,45,90,135,180,225]},"trgovina":{"nove":[0,10,18,35,70,105,140,175], "postojece":[0,12,20,40,80,120,160,200]}}
  }



  onNamenaClick1(){
    this.namena = false;
    console.log (this.namena);
  }

  onNamenaClick2(){
    this.namena = true;
    console.log (this.namena);
  }

  onDodajEnergent(){
    this.list.push(this.element);
    this.element++;
    console.log (this.list);
    console.log(this.components);
  }

  onUkloniEnergent(){
    this.element = this.list.pop()-1;

    console.log (this.list);
  }

  onIzracunaj(){
    this.proizvod = 0;
    this.specPotrosnja = 0;
    this.components.toArray().forEach(el => {
      console.log(el.energent);
      console.log(el.kolicina);
      this.proizvod += el.energent * el.kolicina;
      this.specPotrosnja = this.proizvod/this.povrsina;
    });
    console.log("SelectedNamena je:"+this.selectedNamena);
    console.log("Namena objekta je: "+this.namenaObjekta);



    if(this.namenaObjekta == "option1"){
      this.prvi = "stambene";
      if(this.vrstaObjekta == "option1"){
        this.drugi = "jedanStan";
      } else {
        this.drugi = "viseStanova";
      }
    } else {
      this.prvi = "nestambene";
      if(this.selectedNamena == 1){
        this.drugi = "upravne";
      }
      if(this.selectedNamena == 2){
        this.drugi = "obraz";
      }
      if(this.selectedNamena == 3){
        this.drugi = "zdrav";
      }
      if(this.selectedNamena == 4){
        this.drugi = "turizam";
      }
      if(this.selectedNamena == 5){
        this.drugi = "sport";
      }
      if(this.selectedNamena == 6){
        this.drugi = "trgovina";
      }
    }



    if(this.tipObjekta == "option1"){
      this.treci = "postojece";
    } else {
      this.treci = "nove";
    }

    console.log(this.myObj[this.prvi][this.drugi][this.treci]);
    this.skalaPasos = this.myObj[this.prvi][this.drugi][this.treci];
    for(var i = 0; i < this.skalaPasos.length ; i++ ){
      if(this.specPotrosnja>this.skalaPasos[i]){
        console.log("Klasa objekta je:"+i);
        this.klasa = i;
      }
    }
    this.klasaString = "";
    this.klasaString = this.listOfKlasa[this.klasa];
    console.log("Klasa objekta"+ this.klasa);

    // switch(this.klasa){
    //   case 0: {
    //     console.log("A++");
    //     this.klasaString = "A++";
    //     break
    //   }
    //   case 1: {
    //     console.log("A");
    //     this.klasaString = "A";
    //     break
    //   }
    //   case 2: {
    //     console.log("B");
    //     this.klasaString = "B";
    //     break;
    //   }
    //   case 3: {
    //     console.log("C");
    //     this.klasaString = "C";
    //     break;
    //   }
    //   case 4: {
    //     console.log("D");
    //     this.klasaString = "D";
    //     break;
    //   }
    //   case 5: {
    //     console.log("E");
    //     this.klasaString = "E";
    //     break;
    //   }
    //   case 6: {
    //     console.log("F");
    //     this.klasaString = "F";
    //     break;
    //   }
    //   // case isNullOrUndefined(this.klasa): {
    //   //   this.klasaString = "A++";
    //   // }
    //   default:{
    //     this.klasaString = "G";
    //   }
    // }

    }


  }
