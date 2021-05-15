import express from 'express';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();


let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Azam-Tabriz!64',
  database: 'hw3'
});


router.get('/', (req, res)=>{

  res.header("Content-Type",'application/json');
  console.log(req.get('user-agent'));
  let getdata = `select * from activity1`;
  connection.query(getdata, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    res.send(results);
  });
});


router.post('/',(req, res) =>{
  let cookielist = req.headers["cookie"]
  let cookie_enabled;

  let list;
  if(cookielist.length >0) {
    list = cookielist.split("; ");
  }

  //send cookies:
  let flag = 0;
  list.forEach(c => {
      if(c.includes('test')){
        flag = 1;
        let s = c.split('=');
        cookie = s[1];
      }
    })
  if (flag==0){
    cookie = uuidv4();
    res.cookie('test', cookie)
      }

  cookie_enabled = req.body.cookie_enabled;

  if(cookie_enabled == 0){
    cookie = req.body.cookie;
  }

  let mouse_x = req.body.mouse_x;
  let mouse_y = req.body.mouse_y;
  let scroll = req.body.scroll;
  let key_press = req.body.key_press;
  let page = req.body.page;

 let postdata = `replace into activity1 (cookie, page, mouse_x, mouse_y, scroll, key_press) values ("${cookie}", "${page}", "${mouse_x}", "${mouse_y}", "${scroll}", "${key_press}")`;
 console.log(postdata);
 connection.query(postdata, function(err, results, fields) {
   if (err) {console.log(err.message)};
   res.send("the data is recieved!"); 
  });
});


router.delete('/:id', (req, res)=>{
  const {cookie} = req.params  // req.params.id
  let deletedata = `delete from activity1 where id="${id}"`;
  connection.query(deletedata, function(err, results, fields) {
    if (err) {console.log(err.message)};
    res.send("delete was successful"); 
  });
});


// users/2 => req.params {id: 2}
router.get('/:id', (req, res)=>{
  const {cookie} = req.params  // req.params.id
  let getdata = `select * from activity1 where id="${id}"`;
  connection.query(getdata, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    res.send(results);
  });
});

export default router;


