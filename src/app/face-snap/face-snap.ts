import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
  name!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  image!: string;
  textsnap!: string;
  hassnaped!: boolean;

  ngOnInit(): void {
    this.name = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 0;
    this.image = 'assets/camera.jpg';
    this.textsnap = 'Oh Snap !';
    this.hassnaped = false;
  }
  Snap() {
    return this.hassnaped ? this.removeSnap() : this.onSnap();
  }
  removeSnap() {
    this.snaps--;
    this.hassnaped = false;
    this.textsnap = 'Oh Snap !';
  }
  onSnap() {
    this.snaps++;
    this.hassnaped = true;
    this.textsnap = 'Oops, un snap en moins !';
  }
}
