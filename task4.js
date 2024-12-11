export class FriendAge {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
    this.age;
  }

  returnAge() {
    const today = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day);

    this.age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      this.age--;
    }

    return `${this.name} is ${this.age} today!`;
  }
}


