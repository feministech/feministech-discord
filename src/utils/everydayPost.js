const fs = require('fs');
const { postYuri } = require('./postYuri');

exports.everydayPost = (client) => {

setInterval(() => {
  let date = new Date()
  const day = date.getDay().toString()

  fs.readFile('./daily.txt', 'utf8', async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
      console.log(data)
      console.log(day)
    if (data != day){
      await postYuri(client)
      saveFile(day)
    }
  })
  }, 50000)
}

function saveFile(day){
      fs.writeFile("./daily.txt", day, function(err) {
        if(err) {
          return console.log(err);
        }
      }); 
}
