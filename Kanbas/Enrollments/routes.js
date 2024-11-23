import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", async (req, res) => {
        const { userId, courseId } = req.body;
        await enrollmentDao.enrollUserInCourse(userId, courseId);
        const updatedEnrollments = await enrollmentDao.findEnrollmentsForUser(userId);
        res.status(201).json(updatedEnrollments);
    });

    app.delete("/api/enrollments", async (req, res) => {
        const { userId, courseId } = req.body;
        await enrollmentDao.unEnrollUserInCourse(userId, courseId);
        const updatedEnrollments = await enrollmentDao.findEnrollmentsForUser(userId);
        res.status(200).json(updatedEnrollments);
    });

    app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
        const enrollments = await enrollmentDao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    });

    app.get("/api/courses", async (req, res) => {
        const allCourses = await enrollmentDao.findAllCourses();
        res.json(allCourses);
    });
}
