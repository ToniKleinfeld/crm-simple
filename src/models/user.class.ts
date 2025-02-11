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

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.mail = obj ? obj.mail : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.img = obj ? obj.img : 'male1'
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
      img : this.img
    }
  }
}


