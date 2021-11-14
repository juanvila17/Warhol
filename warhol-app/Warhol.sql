CREATE TABLE products (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	name varchar (100) NOT NULL,
	category varchar(100) NOT NULL,
	price int NOT NULL
);

CREATE TABLE sales (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	date date NOT NULL,
	totalPrice int NOT NULL,
	clientName varchar(100)
);

CREATE TABLE product_sales (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	sale_id BIGINT NOT NULL REFERENCES sales (id),
	product_id BIGINT NOT NULL REFERENCES products(id),
	amount int NOT NULL
);

INSERT INTO products (name, category, price) VALUES
('buzo-akwarhol-blanco', 'buzos', 1199),
('buzo-akwarhol-negro', 'buzos', 1199),
('buzo-gotico-blanco', 'buzos', 1199),
('buzo-gotico-negro', 'buzos', 1199),
('gorra-warhol-amarillo', 'gorras', 550),
('gorra-warhol-azul-y-rojo', 'gorras', 550),
('gorra-warhol-blanco', 'gorras', 550),
('gorra-w-blanca', 'gorras', 550),
('gorra-wrhl-rojo-naranja', 'gorras', 550),
('gorra-wrhl-rosa', 'gorras', 550)