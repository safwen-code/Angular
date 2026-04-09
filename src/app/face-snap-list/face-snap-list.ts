import { Component, OnInit } from '@angular/core';

import { FaceSnapclass } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
  FaceSnaps!: FaceSnapclass[];
  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit(): void {
    this.FaceSnaps = this.faceSnapsService.getFaceSnaps();
    this.FaceSnaps[1].setLocation('à la montagne');
  }
}
