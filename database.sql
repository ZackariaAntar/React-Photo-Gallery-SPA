-- DB named "react-gallery"

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(25000),
	description VARCHAR(250) NOT NULL,
    likes INT DEFAULT 0
);

INSERT INTO gallery (path, description,likes)
VALUES ('https://images.pexels.com/photos/86594/goat-animal-horns-black-and-white-86594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Is goat', 0),
('https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Is dog', 0),
('https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Is cat', 0);
('https://st4.depositphotos.com/21607914/24445/i/600/depositphotos_244458222-stock-photo-former-secretary-state-henry-kissinger.jpg', 'Is evil', 0);


