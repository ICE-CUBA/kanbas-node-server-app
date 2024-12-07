import * as assignmentDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const updatedAssignment = await assignmentDao.updateAssignment(assignmentId, req.body);
        res.send(updatedAssignment);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}

