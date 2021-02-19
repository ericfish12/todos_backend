const Sequelize = require('sequelize')

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
  