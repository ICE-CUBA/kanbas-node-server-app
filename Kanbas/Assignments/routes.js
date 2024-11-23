import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const updatedAssignment = assignmentDao.updateAssignment(assignmentId, req.body);
        res.send(updatedAssignment);
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}

