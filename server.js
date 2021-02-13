
const express = require('express');
const path = require('path');
const app = express()
const port = 8006
//1 go into public folder
//app.use('/static', express.static('views'));


//2 add pug
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/views', function(req, res){
res.render('NewText');
});
//3 get day and hour
var d = new Date();
day = d.getDay();
var hour = d.getHours();


//4 choose a file
if((day>0)&&(day<6)&&(hour>8)&&(hour<17))

//Test:if (day>5)
{
app.get('/', (req, res) => {
  res.status(200).render('HomePage');
});
app.get('/OurService', (req, res) => {
  res.status(200).render('OurServices');
});
app.get('/ContactUs', (req, res) => {
  res.status(200).render('ContactUs');
});

}
else{app.get('/', (req, res) => {
  res.status(200).render('NoServices');
});

}



//go to components folder



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})