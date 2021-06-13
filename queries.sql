create table sem8(
  fname VARCHAR(255) NOT NULL,
  mname VARCHAR(255) ,
  lname VARCHAR(255) NOT NULL,
  usn VARCHAR(11) UNIQUE,
  mobile BIGINT,
  created_at TIMESTAMP DEFAULT NOW()
);