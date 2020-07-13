const express = require('express');

const router = express.Router();

var obj = { 
    name : " nodemy ",
    age : 2,
    height : 1,
    width : 2
};

//a) tạo api hiển thị toàn bộ thuộc tính của obj
router.get('/',(req,res)=>{
    var properties = Object.keys(obj);
    res.json(properties);
});
//tạo api hiển thị giá trị thuộc tính của obj theo key
router.get('/:key',(req,res)=>{
    var key = req.params.key;
    res.json("Gia tri cua key la "+ obj[key]);
});
// Tạo 1 api thêm mới 1 thuộc tính vào obj. 
router.post('/',(req,res)=>{
    var prop = req.body;
    var properties = Object.keys(prop);
    obj[properties[0]] = prop[properties[0]];
    res.json(obj);
});
//Tạo 1 api cập nhật giá trị thuộc của obj theo key
router.put('/',(req,res)=>{
    var prop = req.body;
    var properties = Object.keys(prop);
    if(properties[0] in obj){
        obj[properties[0]] = prop[properties[0]];
        res.json(obj);
    }else{
        res.json("Object don't own the key");
    }
});
//tạo 1 api xóa thuộc tính của obj theo key
router.delete('/:key',(req,res)=>{
    var key = req.params.key;
    if(key in obj){
        delete obj[key];
        res.json(obj);
    }else{
        res.json("Object don't own the key");
    }
});

module.exports = router;