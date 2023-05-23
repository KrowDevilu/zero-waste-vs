import {  AfterViewInit, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {ongs} from '../ongs';

@Component({
  selector: 'app-pagina-ong',
  templateUrl: './pagina-ong.component.html',
  styleUrls: ['./pagina-ong.component.css']
})
export class PaginaOngComponent implements AfterViewInit{
  constructor(private route: ActivatedRoute) { }
  percentage = 12;
  ongs = ongs;
  heart = { outline: "../../assets/heart-outline.png", full: "../../assets/heart-full.png"}
  fav_src = this.heart.outline;
  favved = false
  updateFav(){
    if (this.favved == false){
      this.fav_src = this.heart.full;
      this.favved = true;
    }
    else{
      this.fav_src = this.heart.outline;
      this.favved = false;
    }
  }
  ngAfterViewInit() {
    const myElement = document.getElementById("progress") as HTMLElement;
    myElement.style.width = `${this.percentage}%`;
  }  

  // @ts-ignore: Object is possibly 'null'.
  id: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore: Object is possibly 'null'.
      this.id = +params.get('id');
    });
  }

}
