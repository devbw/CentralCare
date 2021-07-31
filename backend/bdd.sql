CREATE TABLE Users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    phone VARCHAR(10),
    job VARCHAR(40),
    city VARCHAR (80),
    password VARCHAR(100) NOT NULL,
    user_admin TINYINT(1) NOT NULL,
    subscription TINYINT(1) NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

ALTER TABLE Users ADD UNIQUE (email);

CREATE TABLE Professional (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    groupname VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    phone VARCHAR(10),
    city VARCHAR (80),
    password VARCHAR(100) NOT NULL,
    user_admin TINYINT(1) NOT NULL,
    subscription TINYINT(1) NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

ALTER TABLE Professional ADD UNIQUE (email);

CREATE TABLE Posts (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id SMALLINT UNSIGNED NOT NULL,
    search VARCHAR(40) NOT NULL,
    price VARCHAR(4) NOT NULL,
    city VARCHAR(80) NOT NULL,
    job VARCHAR(80) NOT NULL,
    post_content VARCHAR(2000) NOT NULL,
    created DATETIME,
    updated DATETIME,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE INDEX IDX_USER_ID ON Posts (user_id);


ALTER TABLE Posts ADD FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE;
