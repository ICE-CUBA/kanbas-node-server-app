import model from "./model.js";

export function createAssignments(assignments) {
  delete assignments._id;
  return model.create(assignments);
}
  
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}
