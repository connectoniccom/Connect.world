
-- This is a sample schema for a basic task management application.
--
-- You can edit this file to define the data models for your own application.
--
-- For more information, see the Firebase Data Connect documentation:
-- https://firebase.google.com/docs/dataconnect

CREATE TABLE Users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  "owner" VARCHAR(255) NOT NULL REFERENCES Users(id)
);
