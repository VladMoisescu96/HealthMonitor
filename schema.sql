-- create table BODY_HEIGHT (
    
--     height_id serial,
--     height real,
--     date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (height_id)
-- );

-- create table SLEEP_ANALYSIS (
    
--     sleep_id serial,
--     sleep boolean,
--     start_date date,
--     end_date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (sleep_id)
-- );

-- create table HEART_RATE_VALUES (
    
--     heart_rate_id serial,
--     heart_rate integer,
--     date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (heart_rate_id)
-- );

-- create table RESTING_HEART_RATE_VALUES (
    
--     resting_heart_rate_id serial,
--     resting_heart_rate integer,
--     date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (resting_heart_rate_id)
-- );

-- create table WALKING_HEART_RATE_VALUES (
    
--     walking_heart_rate_id serial,
--     walking_heart_rate integer,
--     date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (walking_heart_rate_id)
-- );

-- create table STEPS_VALUES (
    
--     steps_id serial,
--     steps integer,
--     start_date date,
--     end_date date,
--     user_id integer NOT NULL references USERS(user_id),
--     PRIMARY KEY (steps_id)
-- );

ALTER TABLE USERS ADD CONSTRAINT unique_email UNIQUE (email);
