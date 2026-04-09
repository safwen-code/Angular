import { Injectable } from '@angular/core';
import { FaceSnapclass } from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnapclass[] = [
    new FaceSnapclass(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ).withLocation('Paris'),
    new FaceSnapclass(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      new Date(),
      6
    ),
    new FaceSnapclass(
      'Un bon repas',
      "Mmmh que c'est bon !",
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      156
    ),
  ];
  getFaceSnaps(): FaceSnapclass[] {
    return [...this.faceSnaps];
  }
}
