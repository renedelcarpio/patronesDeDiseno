// Singleton hace que exista un objeto de nuestra clase

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton2 = new Singleton();

console.log(singleton === singleton2);

class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays('es');
const weekDays2 = new WeekDays();

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
