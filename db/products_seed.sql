CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    user_id INT,
    item VARCHAR(50),
    price INT,
    quantity INT
)