CREATE TYPE permission_enum AS ENUM ('moderator', 'superadmin', 'admin');

CREATE TABLE users(
    id SERIAL PRIMARY kEY,
    first_name VARCHAR(30),
    second_name VARCHAR(30),
    user_name   VARCHAR(30)  UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    permission permission_enum,
    visibility BOOLEAN DEFAULT TRUE,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


CREATE TYPE status_enum AS ENUM ('visited', 'waiting_for_closure', 'not_visited', 'closed');

CREATE TABLE meet(
    id SERIAL PRIMARY kEY,
    date_of_meet VARCHAR(30),
    place_of_meet VARCHAR(30), 
    remarks VARCHAR(30),
    status status_enum,
    visibility BOOLEAN DEFAULT TRUE,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE point_of_contact(
	id INTEGER REFERENCES meet(id),
	name VARCHAR(30),
	email VARCHAR(30),
	contact_number VARCHAR(30),
	designation VARCHAR(30)
   
);


CREATE TYPE syllabus_enum AS ENUM ('CBSE','ICSE', 'SSLC', 'IGCSE', 'PU', 'DEGREE');
CREATE TABLE client_t(
    id SERIAL PRIMARY kEY,
    client_name VARCHAR(30),
    address VARCHAR(30),
    client_contact_number VARCHAR(30),
    strength_of_students VARCHAR(30),
    status status_enum,
    remarks VARCHAR(30),
    syllabus syllabus_enum,
    email VARCHAR(30),
    website VARCHAR(30),
    date_of_meeting VARCHAR(30),
    message  VARCHAR(30),
    visibility BOOLEAN DEFAULT TRUE,
    time_stamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE follow_up_person(
	id INTEGER REFERENCES client_t(id),
	name VARCHAR(30),
	email VARCHAR(30),
	contact_number VARCHAR(30),
	designation VARCHAR(30)
);