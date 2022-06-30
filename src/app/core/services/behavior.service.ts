import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  private partners_grid_visible_columns = '';
  private _partners_grid_visible_columns$ = new BehaviorSubject('');
  public readonly partners_grid_visible_columns$ =
    this._partners_grid_visible_columns$.asObservable();
  constructor() {
    const dataPartners = localStorage.getItem('partners_grid_visible_columns');
    dataPartners
      ? this._partners_grid_visible_columns$.next(dataPartners)
      : this.setItemPartenrs(this.partners_grid_visible_columns);
  }
  setItemPartenrs(value: string) {
    localStorage.setItem('partners_grid_visible_columns', value);
  }
  changeItemPartenrs(data :string){
    this._partners_grid_visible_columns$.next(data);
    this.setItemPartenrs(data);
  }
}
