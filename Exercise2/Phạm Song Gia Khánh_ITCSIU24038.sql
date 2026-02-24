CREATE DATABASE IF NOT EXISTS random_db;
USE random_db;

-- 1. Table: customers
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: products
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: employees
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    salary DECIMAL(12,2),
    hire_date DATE,
    is_active BOOLEAN DEFAULT TRUE
);

-- 4. Table: orders
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_code VARCHAR(50) UNIQUE,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(12,2),
    status VARCHAR(30)
);

-- 5. Table: reviews
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    reviewer_name VARCHAR(100),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    review_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ================================================================

INSERT INTO customers (full_name, email, phone, birth_date) VALUES
('Nguyen Van An', 'an1@gmail.com', '0901234567', '1999-05-12'),
('Tran Thi Binh', 'binh2@gmail.com', '0912345678', '2000-07-21'),
('Le Hoang Nam', 'nam3@gmail.com', '0923456789', '1998-03-15'),
('Pham Minh Chau', 'chau4@gmail.com', '0934567890', '2001-11-02'),
('Do Thi Lan', 'lan5@gmail.com', '0945678901', '1997-09-09'),
('Vo Thanh Tung', 'tung6@gmail.com', '0956789012', '1996-01-30'),
('Bui Quoc Dat', 'dat7@gmail.com', '0967890123', '1995-12-25'),
('Dang My Linh', 'linh8@gmail.com', '0978901234', '2002-04-17'),
('Hoang Gia Huy', 'huy9@gmail.com', '0989012345', '1994-06-06'),
('Ly Kim Oanh', 'oanh10@gmail.com', '0990123456', '2003-08-19');

INSERT INTO products (product_name, price, stock, description) VALUES
('Laptop Dell XPS', 25000000, 10, 'High performance laptop'),
('iPhone 15', 23000000, 15, 'Latest Apple smartphone'),
('Samsung TV 55"', 12000000, 8, '4K Smart TV'),
('Gaming Mouse', 750000, 50, 'RGB gaming mouse'),
('Mechanical Keyboard', 1500000, 30, 'Blue switch keyboard'),
('AirPods Pro', 5500000, 20, 'Wireless earbuds'),
('Office Chair', 3000000, 12, 'Ergonomic chair'),
('Monitor 27"', 5000000, 18, 'IPS display monitor'),
('External SSD 1TB', 2800000, 25, 'Portable storage'),
('Webcam HD', 900000, 40, '1080p webcam');

INSERT INTO employees (full_name, position, salary, hire_date, is_active) VALUES
('Nguyen Van A', 'Manager', 30000000, '2020-01-15', TRUE),
('Tran Thi B', 'Sales', 15000000, '2021-03-10', TRUE),
('Le Van C', 'Developer', 25000000, '2019-06-01', TRUE),
('Pham Thi D', 'HR', 18000000, '2022-02-20', TRUE),
('Vo Van E', 'Support', 12000000, '2023-05-12', TRUE),
('Bui Thi F', 'Marketing', 17000000, '2020-11-11', TRUE),
('Dang Van G', 'Accountant', 20000000, '2018-09-09', TRUE),
('Hoang Thi H', 'Designer', 22000000, '2021-07-07', FALSE),
('Ly Van I', 'Intern', 8000000, '2024-01-01', TRUE),
('Do Thi K', 'Team Lead', 28000000, '2017-12-12', TRUE);

INSERT INTO orders (order_code, total_amount, status) VALUES
('ORD001', 5000000, 'Pending'),
('ORD002', 12000000, 'Completed'),
('ORD003', 7500000, 'Shipped'),
('ORD004', 2000000, 'Cancelled'),
('ORD005', 15000000, 'Completed'),
('ORD006', 9500000, 'Pending'),
('ORD007', 3000000, 'Shipped'),
('ORD008', 6700000, 'Completed'),
('ORD009', 11000000, 'Pending'),
('ORD010', 4200000, 'Completed');

INSERT INTO reviews (reviewer_name, rating, comment) VALUES
('An', 5, 'Excellent product!'),
('Binh', 4, 'Very good'),
('Nam', 3, 'Average quality'),
('Chau', 5, 'Highly recommend'),
('Lan', 2, 'Not satisfied'),
('Tung', 4, 'Good value'),
('Dat', 5, 'Perfect!'),
('Linh', 3, 'Okay experience'),
('Huy', 4, 'Fast delivery'),
('Oanh', 5, 'Amazing service');
