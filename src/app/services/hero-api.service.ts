import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Biography} from "../models/biography";

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
    // return this.httpClient.get<{ biography: Biography }>(`${this.BASE_URL}/id/${id}.json`)
    //   .pipe(
    //     map(response => response.biography)
    //   )
    return this.httpClient.get<Hero>(`${this.BASE_URL}/id/${id}.json`)

  }

}
