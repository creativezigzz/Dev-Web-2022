create table brewery
(
    idBrewery       int auto_increment
        primary key,
    breweryDescript varchar(255) default 'Pas encore de description' null,
    breweryName     varchar(200)                                     not null,
    urlImage        varchar(255)                                     null,
    constraint breweryName_UNIQUE
        unique (breweryName),
    constraint idBrewery_UNIQUE
        unique (idBrewery)
);

create table type
(
    idType int auto_increment
        primary key,
    name   varchar(45) default 'Beer' not null
);

create table beer
(
    idBeer    int auto_increment
        primary key,
    idBrewery int                        not null,
    idType    int                        not null,
    beerName  varchar(255)               null,
    degree    float                      null,
    isNew     tinyint default 0          null,
    price     int     default 0          not null,
    quantite  int     default 1          not null,
    imageUrl  varchar(510) charset ascii null,
    constraint idBrewzery
        foreign key (idBrewery) references brewery (idBrewery)
            on update cascade on delete cascade,
    constraint idType
        foreign key (idType) references type (idType)
            on update cascade on delete cascade
);

create index idBrewery_idx
    on beer (idBrewery);

create index idType_idx
    on beer (idType);

create table user
(
    pseudo   varchar(45)                not null,
    email    varchar(255)               not null,
    password varchar(255)               not null,
    idUser   int auto_increment
        primary key,
    token    tinytext                   null,
    roles    varchar(25) default 'user' not null
);

create table avis
(
    avis   varchar(45) not null,
    favori tinyint     null,
    idBeer int         not null,
    idUser int         not null,
    note   int         null,
    primary key (idUser, idBeer),
    constraint idBeer
        foreign key (idBeer) references beer (idBeer),
    constraint idUser
        foreign key (idUser) references user (idUser)
            on update cascade on delete cascade
);

create index idBeer_idx
    on avis (idBeer);

create table mdsEvent(
    idEvent       int          auto_increment    primary key,
    eventDescript varchar(255) default 'Pas encore de description' null,
    idBrewery     int                                              not null,
    eventDate     int                                              not null,
    constraint idBrewzery2
        foreign key (idBrewery) references brewery (idBrewery)
            on update cascade on delete cascade,
    constraint idEvent_UNIQUE
        unique (idEvent)
);