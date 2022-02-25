const db = require("../db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
const {validationResult} = require("express-validator")
const secret = process.env.SECRET_KEY






const generateAccessToken = (id, login) => {
    const payload = {
        id, login
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

/*



if (existed.rows !== []) {
            console.log(existed)
            return res.status(400).json({message: "User with this login already exists"})
        }

if (existed.rowCount === 1) {
            console.log(existed)
            return res.status(400).json({message: "User with this login already exists"})
        }

*/ 


class authController {
  
  async createUser(req, res) {
      try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({message: errors.errors[0].msg})
        }
        const { nickname, login, password } = req.body;
        const existed = await db.query("Select * FROM users WHERE login = $1  ", [login])
        if (existed.rowCount !== 0) {
            return res.status(400).json({message: "User with this login already exists"}); 
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const newUser = await db.query(
          "INSERT INTO users (nickname, login, password ) values ($1, $2, $3) RETURNING *",
          [nickname, login, hashPassword]
        );
        //const newPerson = await db.query("select * from information_schema.tables" )
        res.json(newUser.rows[0]);
      } catch(e) {
          console.log(e)
          res.status(400).json({message: e})
      }
  }


















  async loginUser(req, res) {
    try {
        const {login, password} = req.body;
        let user = await db.query("Select * FROM users WHERE login = $1 ", [login])
        if (user.rowCount !== 1) {
            res.status(400).json({message: `User ${login} doesn't exist`})
        }
        user = user.rows[0]
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message: "password is not valid"})
        }
        const token = generateAccessToken(user._id, user.login)
        return res.json({token})
      } catch(e) {
          console.log(e)
          res.status(400).json({message: e})
      }
  }



  async getUsers(req, res) {
    try {
        const users = await db.query("SELECT * FROM users")
        res.json(users.rows);
      } catch(e) {
          console.log(e)
          res.status(400).json({message: "Get users error"})
      }
  }
}

module.exports = new authController();