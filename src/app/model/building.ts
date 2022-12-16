export interface Building1 {
  id?: number;
  name: string;
  desc: string;
}

export class Building {

  constructor(
    public id: number,
    public name: string,
    public desc: string
  ) {  }

}
