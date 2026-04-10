import { SnapType } from './snap-type.type';

export class FaceSnapclass {
  location!: string;
  id: string;
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
    console.log(this);
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    }
    if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }
  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }
  withLocation(location: string): FaceSnapclass {
    this.setLocation(location);
    return this;
  }
}
