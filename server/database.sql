create TABLE teams (
    id SERIAL PRIMARY KEY,
    team VARCHAR(255) NOT NULL,
    year INTEGER,
    nickname VARCHAR(255),
    stadium VARCHAR(255),
    badge TEXT,
    description VARCHAR(255)
);




create TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    position VARCHAR(255) NOT NULL,
    team_id INTEGER NOT NULL, 
    FOREIGN KEY (team_id) REFERENCES teams (id)
);

create TABLE statistic (
    id SERIAL PRIMARY KEY,
    goals INTEGER NOT NULL,
    assists INTEGER NOT NULL,
    yellow_cards INTEGER NOT NULL,
    red_cards INTEGER NOT NULL,
    average_rating DOUBLE PRECISION NOT NULL,
    player_id INTEGER NOT NULL,
    FOREIGN KEY (player_id) REFERENCES players (id)
);