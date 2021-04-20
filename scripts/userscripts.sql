create table users (
    id int not null auto_increment,
    login varchar (30) not null,
    password varchar (30) not null,
    primary key (id)
);

select name, password from users inner join users_info on users_info.id = users.id where users_info.id = 2;
