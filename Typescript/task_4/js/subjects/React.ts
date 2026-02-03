/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Using declaration merging to add new attribute to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    constructor(teacher?: Teacher) {
      super(teacher);
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (!teacher || !teacher.experienceTeachingReact || teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
