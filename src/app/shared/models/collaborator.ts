export class Collaborators {
  key: string;
  firstName: string;
  lastName: string;
  birthdayDate: string;
}

export class CollaboratorsClass {
  public key: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public birthdayDate: string
  ) {}
}
