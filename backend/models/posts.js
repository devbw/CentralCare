const connectionDb = require('../services/database/connection-bdd');

exports.create = (userId, search, price, city, job, post_content) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    const sql = "INSERT INTO Posts (user_id, search, price, city, job, post_content, reported, created, updated) VALUES (?, ?, ?, ?, ?, ?, 0, NOW(), NOW())";
    db.query(sql, [userId, search, price, city, job, post_content], (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Added successfully');
    });
  });
};

exports.report = (id) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();
    const sql = "UPDATE Posts SET reported = 1, updated = NOW() WHERE id = ?";
    db.query(sql, [id], (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Post reported');
    })
  })
}

exports.getOne = (id) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    db.query(`SELECT P.*, CONCAT(U.firstname, ' ',  U.lastname) AS username
    FROM Posts AS P
    LEFT JOIN Users AS U ON P.user_id = U.id
    WHERE P.id = ?`, [id] , (err, rows, fields) => {
      if(err || rows.length === 0)
        reject(err);

      resolve(rows[0]);
    });
  });
};

exports.getAll = (user_id) => {
  return new Promise((resolve, reject) => {
    const db = connectionDb.getDbConnection();
    db.query(`SELECT P.*, CONCAT(U.firstname, ' ',  U.lastname) AS username
    FROM Posts AS P
    LEFT JOIN Users AS U ON P.user_id = U.id
    GROUP BY P.id
    ORDER BY P.created DESC`, [user_id],
    (err, rows, fields) => {
      if(err)
        reject(err);

      resolve(rows);
    });
  });
};

exports.deleteOne = (id, userId) => {
  return new Promise((resolve, reject) => {

    const db = connectionDb.getDbConnection();
    db.query(`DELETE
    FROM Posts AS P
    WHERE P.id = ?
    AND (
    P.user_id = ?
    OR ( SELECT U.id FROM Users as U WHERE U.id = ? AND U.user_admin = 1 ) IS NOT NULL
    )`, [id, userId, userId] , (err, rows, fields) => {
      if(err)
        reject(err);

      resolve('Deleted Successfully');
    });
  });
};