# AWS Serverless Boba Tea Ordering System

A full-stack serverless web application that allows customers to place boba tea orders online while employees manage incoming orders through a secure dashboard. The project is built using AWS cloud services and demonstrates a modern serverless architecture.

---

## Features

- Customer online ordering
- Employee login system
- Admin dashboard
- Create employee accounts
- View all customer orders
- Update order status
- Delete completed orders
- Automatic price calculation
- Responsive web interface

---

## AWS Services Used

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS IAM
- AWS Amplify Hosting

---

## Technologies

- HTML5
- CSS3
- JavaScript
- AWS Lambda (Node.js)
- Amazon DynamoDB
- Git
- GitHub

---

## Application Workflow

1. Customer places an order through the website.
2. The frontend sends the order to Amazon API Gateway.
3. API Gateway invokes AWS Lambda.
4. Lambda validates and stores the order in DynamoDB.
5. Employees log in to view and manage orders.
6. Employees can update the order status or delete completed orders.

---

## Current Features

### Customer

- Select drink
- Select size
- Select sugar level
- Select ice level
- Choose toppings
- Enter customer information
- View calculated order total
- Submit order

### Employee

- Secure employee login
- View all orders
- Update order status
- Delete completed orders

### Administrator

- Create employee accounts
- Manage employee access

---

## Project Structure

```
bobaProject/
│
├── adminDashboard.html
├── index.html
├── login.html
├── viewOrders.html
├── script.js
├── style.css
└── README.md
```

---

## Future Improvements

- Amazon Cognito authentication
- Customer accounts
- Order history
- Email notifications
- Payment integration
- Mobile responsive enhancements
- Inventory management

---

## What I Learned

Through this project I gained experience with:

- Serverless application development
- REST APIs
- AWS Lambda
- API Gateway
- Amazon DynamoDB
- IAM permissions
- Front-end development
- Git and GitHub
- Cloud application deployment

---

## Author

**Christian Zarate**

Bachelor of Science in Information Technology (Software Development)

Georgia Gwinnett College