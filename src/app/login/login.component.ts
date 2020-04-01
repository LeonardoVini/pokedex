import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from "@angular/core";

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

  }

  ngAfterViewInit(): void {
    this.intervalID = setInterval(() => {
      let pokemon_id: string = this.changeHeroImage();

      this.hero.nativeElement.src = `http://assets22.pokemon.com/assets/cms2/img/pokedex/full/${pokemon_id}.png`;
      this.hero.nativeElement.alt = `Pokemon_${pokemon_id}`;
    }, 1500);
  }

  private changeHeroImage(): string {
    let pokemon_id: number = Math.floor(Math.random() * 807) + 1
    let pokemon_id_str: string = ''

    if (pokemon_id < 10) pokemon_id_str = `00${pokemon_id}`
    if (pokemon_id >= 10 && pokemon_id < 100) pokemon_id_str = `0${pokemon_id}`
    if (pokemon_id >= 100) pokemon_id_str = `${pokemon_id}`

    return pokemon_id_str;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID)
  }
}
