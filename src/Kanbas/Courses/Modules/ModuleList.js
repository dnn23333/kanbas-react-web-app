import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
      <ul className="list-group mt-2 me-3">
        <li className="list-group-item">
          <button className="m-lg-2 btn btn-primary" onClick={() => { dispatch(addModule(module))}}>Add</button>
          <button className="m-lg-2 btn btn-primary" onClick={dispatch(updateModule)}>
            Update
          </button>

          <input value={module.name}
                 onChange={(e) => dispatch(setModule({
                   ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({
                      ...module, description: e.target.value }))}
          />
        </li>

        {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li
                key={index}
                className="list-group-item"
                style={{ borderRadius: "0px" }}
            >
              <button
                  onClick={(event) => { dispatch(setModule(module)); }}>
                Edit
              </button>

              <button
                  onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

              <h3>{module.name}</h3>
              <p className="fs-5">{module.description}</p>
              <p>{module._id}</p>

            </li>
        ))}
      </ul>
  );
}
export default ModuleList;