/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    constructor(teacher?: Teacher) {
      if (teacher) {
        this._teacher = teacher;
      }
    }

    // Getter for teacher - returns Teacher or undefined
    get teacher(): Teacher | undefined {
      return this._teacher;
    }

    // Setter for teacher - also accepts undefined
    set teacher(teacher: Teacher | undefined) {
      this._teacher = teacher;
    }

    // Method to set teacher
    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
