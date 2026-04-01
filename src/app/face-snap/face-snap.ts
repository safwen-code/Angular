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
  ngOnInit(): void {
    this.name = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 0;
  }
}
