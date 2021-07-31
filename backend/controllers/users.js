const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const validator = require('validator');
const {isAdmin} = require('../services/isadmin');

class HttpError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "HttpError";
    this.statusCode = code;
  }
}

class EmptyPasswordError extends HttpError {
  constructor() {
    super("Empty Password, provide password", 400);
    this.name = "Empty password";
  }
}

class EmptyEmailError extends HttpError {
  constructor() {
    super("Emptay Mail, provide email", 400);
    this.name = "EmptyEmail";
  }
}

class InvalidCredentialsError extends HttpError {
  constructor() {
    super("Invalid Credentials provided, please provide valid credentials", 401);
    this.name = "InvalidCredentials";
  }
}

/*exports.login = (req, res, next) =>
  Promise.resolve({email, password} = req.body )
    .then((body) => !body.email ? Promise.reject(new EmptyEmailError()) : body)
    .then((body) => !body.password ? Promise.reject(new EmptyPasswordError()) : body)
    .then((body) => userModel.findOneByEmail(body.email))
    .then(
      (user) => bcrypt.compare(password, user.password)
        .then((valid) => valid ? user : Promise.reject(new InvalidCredentialsError())),
        (err) => new InvalidCredentialsError()
    )
    .then((user) => ({
      token: jwt.sign(
        {
          userId: user.id,
          account: user.account,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES
        }
      )
    }))
    .then((result) => res.json(result))
    .catch((err) => err instanceof HttpError ? res.status(statusCode).send(err.message) : next(err));*/

exports.login = (req, res, next) => {

  Promise.resolve({email, password} = req.body )
  .then((email) => !email ? Promise.reject(new EmptyEmailError()) : email)
  .then((password) => !password ? Promise.reject(new EmptyPasswordError()) : password)
  userModel.findOneByEmail(email)
    .then((user) => {
      bcrypt.compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              message: "Identifiant ou mot de passe incorrect",
            });
          }

          res.status(200).json({
            token: jwt.sign(
              {
                userId: user.id,
                account: user.account,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRES,
              }
            ),
          });
        }).catch((err) => {
          return res.status(401).json({
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(401).json({
        message: err,
      });
    });
}

exports.signUp = (req, res, next) => {
  const { email, password } = req.body;
  if(validator.isEmail(email) === false) {
    return res.status(400).json({
      message: "Email non conforme",
    });
  }
  if(validator.isStrongPassword(password,{minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false,}) === false){
    return res.status(400).json({
      message: "Mot de passe non conforme",
    });
  }
  userModel.create(req.body)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    res.send(err);
  })
}

exports.deleteAccount = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  userModel.deleteOne(userId)
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
  })
}

exports.deleteAccountAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt_decode(token);
  const userId = decoded.userId;

  isAdmin(userId)
  .then((isUserAdmin) => {
    if(isUserAdmin === 0) {
      return res.status(400).send("Vous n'êtes pas autorisé à supprimer cet utilisateur");
    }
    userModel.deleteOne(req.params.id)
    .then((rows) => {
      return res.send(rows);
    })
    .catch(() => {
      return res.status(400).send("Vous n'êtes pas autorisé");
    })
  })
  .catch(() => {
    return res.status(400).send("L'utilisateur n'existe pas");
  })
}

exports.getOneUser = (req, res, next) => {
  userModel.getOne(req.params.userId)
    .then((rows) => {
        res.send(rows);
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.getAllUsers = (req, res, next) => {
  userModel.getAll()
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    console.log(err);
  })
}