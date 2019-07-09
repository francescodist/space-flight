import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage: Storage = localStorage;

  constructor() {
  }

  public save(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public read(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  public remove(key: string) {
    this.storage.removeItem(key);
  }

  public clear() {
    this.storage.clear();
  }
}
