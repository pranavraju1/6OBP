-- create table users (
--     id serial,
--     name varchar(50),
--     email varchar(100),
--     role varchar(25) default 'user',
--     created_at timestamp default now()
-- )

-- insert into users (name, email) values ('gaurav', 'gaurav@gmail.com');

-- insert into users (name, email, role) values ('priya', 'priya@gmail.com', 'admin')
-- returning id, name, created_at;

-- insert into users (email, name, role) values 
-- ('rahul@latest.com', 'rahul', 'manager'),
-- ('sneha@latest.com', 'sneha', 'user')
-- returning id, name, created_at;


-- select * from users where role = 'user';


-- select * from users where id = 1;

-- update users set role = 'admin' where id = 1;

-- update users set role = 'user' where id = 2
-- returning id,name,role;

-- select * from users;

-- select name, email created_at from users;

-- ALTER TABLE table_name DROP COLUMN column_name;




-- A Primary Key is a column  in a  table that uniquely identifies every row in that table
-- this is a table with contstraints, this comes into play when you try to insert things in the table
-- this is so that we can keep the data clean and within the constraints


  
create table users (
    id SERIAL PRIMARY KEY,
    name varchar(50) not null,  --value cannot be null
    email varchar(50) not null unique,  --cannot be null and needs to be unique
    age int check(age>=1 and age <= 80),    --the age should be in between 1 and 80
    role varchar(10) default 'user' check (role in ('user', 'admin', 'manager')),       --roles can either be 'user', 'admin', 'manager' only
    created_at timestamp default now()
);


-- this will make data in the table
insert into users (name, email, age) values ('pranav', 'pranav@gmial.com', 20);
-- this will not make the data in the table
insert into users (name, email, age) values ('raju', 'raju@gmial.com', 100);

-- this will make data as email will not be unique
insert into users (name, email, age) values ('pranav2', 'pranav@gmial.com', 20);

-- this will not create data as name cannot be null
insert into users (email, age) values ('raju2@gmial.com', 50);

-- this will not create the data as role cannot be moderator
insert into users (name, email, age, role) values ('pranav3', 'pranav3@gmial.com', 20, 'moderator');



create table posts(
    id serial primary key,
    title text not null,
    body text,
    -- here user_id we will get from users and if the user is removed the post should also be deleted
    user_id int references users(id) on delete cascade,
    created_at timestamp default now()
)



-- inserting data in to the posts table
insert into posts (title, body, user_id) values
('raju title1', 'raju body1', 4),
('raju title2', 'raju body2', 4),
('raju title3', 'raju body3', 4);


-- this will not create data as the user_id does not exits in users table 
insert into posts (title, body, user_id) values
('raju title1', 'raju body1', 10);



-- A foreign key is a column (or a set of columns) in one SQL table that provides a link to the primary key in another table.


-- this is how we join to different tables 
-- as is alias where we can give a temp name to that column
-- and join them using their primary and foreign keys
-- inner join only shows the common elements in between the 2 tables
-- ie if any userID in NULL in posts table it will not be included inside the join
select posts.title, users.name as auther 
from posts inner join users on posts.user_id = users.id;


-- left join means get me all the records from posts table 
-- even if that data is not available in users table
-- all left rows + matched right rows
select posts.title, users.name as auther
from posts left join users on posts.user_id = users.id;

-- all right rows + matched left rows
select posts.title, users.name as auther
from posts right join users on posts.user_id = users.id;


select count(*) from users;     --records in users
select count(*) from posts;     --records in posts


-- when you use group by it will show only the unique members in the table
-- number of posts interms of user id
select user_id, count(id) from posts
group by user_id;

-- number of users in each role
select count(id), role from users group by role;

-- number of posts made by each user
select users.name, count(posts.id) as post_count
from users left join posts on posts.user_id = users.id
group by users.id, users.name;




