const express = require('express');
const router = express.Router();

var array = [{
    id: 1,
    name: "Phong",
    password: "1",
    address: "HN"
}, {
    id: 2,
    name: "Sang",
    password: "1",
    address: "HP"
},
{
    id: 3,
    name: "Tan",
    password: "1",
    address: "Bắc Ninh"
},
{
    id: 4,
    name: "Dũng",
    password: "1",
    address: "TQ"
},
{
    id: 5,
    name: "Phong",
    password: "1",
    address: "HN"
}, {
    id: 6,
    name: "Sang",
    password: "1",
    address: "HP"
},
{
    id: 7,
    name: "Tan",
    password: "1",
    address: "Bắc Ninh"
},
{
    id: 8,
    name: "Dũng",
    password: "1",
    address: "TQ"
},
{
    id: 9,
    name: "Phong",
    password: "1",
    address: "HN"
},
{
    id: 10,
    name: "Dũng",
    password: "1",
    address: "TQ"
},
{
    id: 11,
    name: "Phong",
    password: "1",
    address: "HN"
}, {
    id: 12,
    name: "Sang",
    password: "1",
    address: "HP"
},
{
    id: 13,
    name: "Tan",
    password: "1",
    address: "Bắc Ninh"
},
{
    id: 14,
    name: "Dũng",
    password: "1",
    address: "TQ"
}
]

// a) Tạo api hiển thị toàn bộ giá trị của mảng
router.get('/', (req, res) => {
    res.json(array);
});
// b) Tạo api hiển thị giá trị của mảng theo id
router.get('/:id', (req, res) => {
    var id = parseInt(req.params.id);
    var element = array.find(x=>{
        return x.id === id;
    }) 
    res.json(element);
});
//c) Tạo api thêm mới giá trị vào array theo dạng
// router.post('/',(req,res)=>{
//     var id = parseInt(req.body.id);
//     req.body.id = id;
//     var element = req.body;
//     array.push(element);
//     res.json(array);
// });
//d) Tạo api cập nhật giá trị của mảng theo id = 2, với giá trị theo dạng
// dung postman khong cap nhat 2 lan lien tiep duoc phai chay lai server
router.put('/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var index = array.findIndex(x=>{
        return x.id === id;
    });
    array[index] = req.body;
    res.json(array);
});
//e) Tạo api xóa giá trị của mảng theo id
router.delete('/:id',(req,res)=>{
    var id = parseInt(req.params.id);
    var index = array.findIndex(x=>{
        return x.id === id;
    });
    array.splice(index,1);
    res.json(array);
});
//Tạo api đăng nhập theo tài khoản gồm name,password của array
router.post('/',(req,res)=>{
    var name = req.body.name;
    var password = req.body.password;
    var notify = array.findIndex(x=>{
        return x.name===name&&x.password===password;
    });
    if(notify!==-1){
        res.json("Log in successfully");
    }else{
        res.json("Wrong name or password");
    }
});
//hãy phân trang bằng cách tạo api
router.get('/page/:pageNumber',(req,res)=>{
    var pageNumber = parseInt(req.params.pageNumber);
    var elementNumber = 5;
    var arrNumber = array.length;
    var pageNumbers = Math.ceil(arrNumber/elementNumber);
    if(pageNumber<=pageNumbers&&pageNumber>0){
        var newArr = array.slice((pageNumber-1)*elementNumber,pageNumber*elementNumber);
        res.json(newArr);
    }else{
        res.json("Page not found");
    }
});
module.exports = router;