import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';
import type { Relation } from '../common/relation.type.js';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: Relation<EnrollmentService>,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      student: studentName,
      content: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollments = this.enrollmentService.getEnrollments();
    return {
      message: 'Enrollment checked',
      student: studentName,
      courseId,
      enrollments,
    };
  }
}