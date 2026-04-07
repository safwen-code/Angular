import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapclass } from '../models/face-snap';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, NgClass, DatePipe } from '@angular/common';
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

  ngOnInit(): void {
    this.textsnap = 'Oh Snap !';
    this.hassnaped = false;
  }
  Snap() {
    return this.hassnaped ? this.removeSnap() : this.onSnap();
  }
  removeSnap() {
    this.faceSnap.removeSnap();
    this.hassnaped = false;
    this.textsnap = 'Oh Snap !';
  }
  onSnap() {
    this.faceSnap.addSnap();
    this.hassnaped = true;
    this.textsnap = 'Oops, un snap en moins !';
  }
}
