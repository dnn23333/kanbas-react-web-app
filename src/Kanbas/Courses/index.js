import db from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams,useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {Link} from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./index.css";



function Courses() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [root, kanbas, courseName, id, screen] = pathname.split("/");

  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
      <div className="ms-4">
        <h1 className="breadCrumb fw-light">
          <IoReorderThreeOutline
              className="me-2 fs-2"
              style={{ color: "rgb(221, 24, 24)" }}
          />
          <Link to={`/Kanbas/Courses/${courseId}/Home`}>
            Courses.{course.name}
          </Link>
          {"  >"} {screen}
        </h1>
        <hr />
        <div className="row">
          <div className="col-2 d-none d-md-block" style={{ width: "200px" }}>
            <CourseNavigation />
          </div>

          <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades/>} />
            </Routes>
          </div>
        </div>

      </div>
  );
}
export default Courses;

