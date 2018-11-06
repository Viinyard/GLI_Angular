

export class Pokemon {
  id : number;
  name : string;
  type : string;
  image : string;
  description : string;
  zone : string;
  ethymologie : string;

  constructor(id : number, name : string, type : string, image : string, description : string, zone : string, ethymologie : string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.image = image;
    this.description = description;
    this.zone = zone;
    this.ethymologie = ethymologie;
  }
}
