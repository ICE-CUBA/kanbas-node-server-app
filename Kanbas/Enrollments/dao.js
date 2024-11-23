import Database from "../Database/index.js";

export async function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const exists = enrollments.some(enrollment => enrollment.user === userId && enrollment.course === courseId);
    if (!exists) {
        enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
    }
}

export async function unEnrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    if (index !== -1) {
        enrollments.splice(index, 1);
    }
}

export async function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}

export async function findAllCourses() {
    return Database.courses;
}
