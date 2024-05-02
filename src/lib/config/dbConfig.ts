import { createPool } from 'mysql2';

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306,
});

pool.getConnection((err, connection) => {
  if (err) console.log('Error occured', err);
  else console.log('Connected');
  connection.release();
});

const executeQuery = (query: string, arrParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log('Error in executing the query');
          reject(err);
        }
        console.log('------db.jsx------');
        //console.log(data)
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default executeQuery;
