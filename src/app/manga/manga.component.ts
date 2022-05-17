import { Component, OnInit } from '@angular/core';
import { Manga } from '../manga';

import { MANGA } from '../manga-list';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  manga: Manga[] = MANGA;
  
  selectedManga?: Manga;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect (manga: Manga): void {
    this.selectedManga = manga;
  }
}
