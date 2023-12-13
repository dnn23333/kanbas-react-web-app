
  import { AiOutlineCheckCircle } from "react-icons/ai";
  import "./index.css";

  function AssignmentBar() {
    return (
        <>
          <input
              className="form-control w-25"
              style={{ display: "inline" }}
              type="text"
              placeholder="Search for Assignments"
          />
          <div className="d-flex flex-nowrap float-end align-items-center">
            <AiOutlineCheckCircle className="published" />
            <span className="fw-semibold me-4 published">Published</span>

          </div>
        </>
    );
  }

  export default AssignmentBar;