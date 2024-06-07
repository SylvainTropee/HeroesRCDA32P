import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  private readonly BASE_URL: string = "https://akabab.github.io/superhero-api/api"

  constructor(private httpClient: HttpClient) {

  }

  public getAllHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.BASE_URL + "/all.json")
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.BASE_URL}/id/${id}.json`)
  }

}
