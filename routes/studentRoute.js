import express from "express";
import {createStudent,getStudents,getStudentId,updateStudent,deleteStudent}from "../controllers/studentController.js";
// const createStudent=studentController;
const routerStud = express.Router();

routerStud.post("/create",createStudent);
routerStud.get("/all",getStudents)
routerStud.get("/:id",getStudentId)
routerStud.put("/:id",updateStudent)
routerStud.delete("/:id",deleteStudent)
export default routerStud;