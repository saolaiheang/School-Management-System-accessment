import Student from "../models/studentModel.js";
 const createStudent= async(req,res)=>{
    const{IDCard,username,email,phone,classId}=req.body;
    try{
        const newStudent=new Student({
            IDCard,
            username,
            email,
            phone,
            classId,
            new:true
        })
        await newStudent.save();
        return res.status(201).json({message:'create new student successful',newStudent });

    }catch(error){
        console.log(error);
    }
 }
 const getStudents=async(req,res)=>{
    try {
        const students = await Student.find();
        // await students.save();
        console.log("All Blogs:", students);
        return res.status(200).json(students)
    } catch (err) {
        console.error("Error reading blogs:", err);
    }
 }

const getStudentId=async(req,res)=>{
    const { id } = req.params;
  try {
    const studentDetail = await Student.findById(id);
    if (!studentDetail) {
      return res.status(404).json({ message: "student not found" });
    }
    return res.status(200).json({ studentDetail });
  } catch (error) {
    console.log(error.message);
  }
}

const updateStudent=async(req,res)=>{
    try {
        const studentsUpdate = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        console.log(studentsUpdate);
        if (!studentsUpdate)
          return res.status(404).json({ message: "id not found." });
        res.status(200).json({studentsUpdate});
      } catch (err) {
        console.log(err, "error");
        res.status(500).json({ message: "interal server not found." });
      }
}

const deleteStudent=async(req,res)=>{
    try {
        const studentsDelete = await Student.findByIdAndDelete(req.params.id,req.body,{new:true});
        console.log(studentsDelete);
        if (!studentsDelete)
          return res.status(404).json({ message: "id not found." });
        res.status(200).json({message:'successful delete',studentsDelete});
      } catch (err) {
        console.log(err, "error");
        res.status(500).json({ message: "interal server not found." });
      }
}


 export  {createStudent,getStudents,getStudentId,updateStudent,deleteStudent};