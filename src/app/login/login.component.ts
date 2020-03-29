import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";

import POKEMON_IMAGES from '../database/pokemon_images'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("hero", { static: false }) protected hero: ElementRef;

  private intervalID: any

  constructor() {}

  ngOnInit() {
    localStorage.setItem('pokemon_id', '-1')
  }

  ngAfterViewInit(): void {
    this.intervalID = setInterval(() => {
      let hero: string = this.changeHeroImage();

      this.hero.nativeElement.src = `${hero}`;
      this.hero.nativeElement.alt = hero;
    }, 1000);
  }

  private changeHeroImage(): string {
    let hero_id: number = +localStorage.getItem("pokemon_id");
    let next_hero_id: number = hero_id + 1;
    let next_hero: string;

    if (next_hero_id > POKEMON_IMAGES.length - 1) {
      next_hero = POKEMON_IMAGES[0].art_url;
      localStorage.setItem("pokemon_id", "0");
    } else {
      next_hero = POKEMON_IMAGES[next_hero_id].art_url;
      localStorage.setItem("pokemon_id", next_hero_id.toString());
    }

    return next_hero;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID)
  }
}
