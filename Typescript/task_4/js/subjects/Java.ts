/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Using declaration merging to add new attribute to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    constructor(teacher?: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (!teacher || !teacher.experienceTeachingJava || teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
