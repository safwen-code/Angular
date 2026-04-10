import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapclass } from '../models/face-snap';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, NgClass, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, NgClass, DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  @Input() faceSnap!: FaceSnapclass;
  textsnap!: string;
  hassnaped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.textsnap = 'Oh Snap !';
    this.hassnaped = false;
  }
  Snap() {
    return this.hassnaped ? this.removeSnap() : this.onSnap();
  }
  removeSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.hassnaped = false;
    this.textsnap = 'Oh Snap !';
  }
  onSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.hassnaped = true;
    this.textsnap = 'Oops, un snap en moins !';
  }
}
