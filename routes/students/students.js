const express = require("express");
const router = express.Router();
const Student=require("../../db/schemas/dbshema");

router.get("/",async(req,res)=>{
    const queryParams = req.query;
    const filters={};
    if(queryParams.Studentname){
     filters.Studentname={
         $regex:`^${queryParams.Studentname}`,$options:"i",
     };
    }
    if(queryParams.Department){
     filters.Department={
         $gte:parseFloat(queryParams.Department),
     };
    }
     const students = await Student.find(filters);
    res.json(students);
 });
 
 
router.post("/",async(req,res)=>{
    try{
     console.log(req.body);
     const stddata = req.body;
    const newstd = new Student(stddata);
    await newstd.save();
    res.json({
        message:"Student data uploaded successfully",
    });
}
  catch(error){
    console.log(error);
    res.status(500).json({
       message:"Oops!!!!!Error",
    });
}
});

router.put("/",async(req,res)=>{
    try{
    const updatedetail=req.body;
    await Student.find(studends,updatedetail);
    res.json({
        message:"Student data updated successfully",
    });
}
  catch(error){
    console.log(error);
    res.status(500).json({
       message:"OOps!!!!Error",
    });
}
});

router.delete("/:Studentname",async(req,res)=>{
    try{
        const stdname = req.params.Studentname;
        const deletestud=req.body;
        await Student.findOneAndDelete(stdname,deletestud); 
    res.json({
        message:"Details deleted successfully",
    });
}
  catch(error){
     console.log(error);
     res.status(500).json({
      message:"Oops!!!Error",
    });
}
});

module.exports=router;






























module.exports = router;