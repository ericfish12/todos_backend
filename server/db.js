const Sequelize = require('sequelize')


var pg = require('pg');
const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

var client = new pg.Client({
  user: "ericfish",
  password: "guest",
  database: "antra_todoList",
  port: 5432,
  host: "localhost",
  ssl: false
}); 
client.connect();


const db = new Sequelize (
    process.env.DATABASE_URL||`postgres://localhost:5432/antra_todoList`,  {
        logging: false
      }
)



const TodoLists = db.define('todolists',{
    userId:{
        type:Sequelize.INTEGER,
        
        defaultValue:1
    },
    completed:{
        type:Sequelize.BOOLEAN,
       
        defaultValue:false
      
    },
    title:{
        type:Sequelize.TEXT,
        allowNull:false,
    }
})


async function seed() {
    await db.sync({force: true})
    console.log('db synced!')
}

//  seed()
module.exports = {
    db,
    TodoLists,
  };
  

