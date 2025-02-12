export class User {
  id?:string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  mail:string;
  street: string;
  zipCode: number;
  city: string;
  img: string;
  bgColor: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : 'Empty';
    this.lastName = obj ? obj.lastName : 'Empty';
    this.birthDate = obj ? obj.birthDate : new Date;
    this.mail = obj ? obj.mail : 'Empty';
    this.street = obj ? obj.street : 'Empty';
    this.zipCode = obj ? obj.zipCode : 'Empty';
    this.city = obj ? obj.city : 'Empty';
    this.img = obj ? obj.img : 'male1'
    this.bgColor = obj ? obj.bgColor : '#299ace'
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      mail: this.mail,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      img : this.img,
      bgColor : this.bgColor
    }
  }
}


