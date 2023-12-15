import React from "react";
import { Link} from "react-router-dom";
import "./index.css";

function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse,
}) {
  return (
      <div className="col ms-4">
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses </h2>
        <hr />
        <h5>Course</h5>
        <input value={course.name} className="form-control"
               onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
               onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
               onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
<br/>
        <button className="m-lg-2 btn btn-primary" onClick={addNewCourse} >
          Add
        </button>

        <button className="m-lg-2 btn btn-primary" onClick={updateCourse} >
          Update
        </button>



        <div className="d-flex flex-row flex-wrap mt-4">
          {courses.map((course) => (
              <div className="card w-25 mb-4 ms-4">
                <img
                    src={`/images/course_bg.jpg`}
                    className="card-img-top"
                    alt="can't find image..."
                />
                <div className="card-body">
                  <h5 className="card-title" >
                    {course.name}
                  </h5>
                  <Link
                      key={course._id}
                      to={`/Kanbas/Courses/${course._id}`}
                      className="btn btn-primary"
                  >
                    {course.name}
                  </Link>
                  <br/>
                  <button className="m-lg-2 btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                    Edit
                  </button>

                  <button className="m-lg-2 btn btn-primary"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                    Delete
                  </button>


                  <p className="card-text">Fall 2023 Semester Full Term</p>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}
export default Dashboard;

