export class User {
  uid: string;
  photoUrl: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public birthdayDate: string
  ) {}
}
