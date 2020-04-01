import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TypeColorService {

  public getColor(type: string): string {
    if (type === 'grass') return '#77CC55'
    if (type === 'poison') return '#AA5599'
    if (type === 'fire') return '#FF4422'
    if (type === 'bug') return '#AABB22'
    if (type === 'flying') return '#8899FF'
    if (type === 'water') return '#3399FF'
    if (type === 'electric') return '#FFFF00'
    if (type === 'normal') return '#AAAA99'
    if (type === 'ground') return '#DDBB55'
    if (type === 'fairy') return '#EE99FF'
    if (type === 'fighting') return '#BB5544'
    if (type === 'psychic') return '#FF5599'
    if (type === 'ice') return '#66CCFF'
    if (type === 'rock') return '#BBAA66'
    if (type === 'dragon') return '#7766EE'
    if (type === 'ghost') return '#6666BB'
    if (type === 'dark') return '#775544'
    if (type === 'steel') return '#AAAABB'
    if (type === 'unknown') return '#68A090'
    if (type === 'shadow') return '#635D8A'
  }
}
