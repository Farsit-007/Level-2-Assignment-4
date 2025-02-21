## Assignment - 4

## Student Id - WEB9-1722

## Project Name - SpeedGear Hub (Set - 2 : Bike Store)

## [Frontend Live Link](https://bike-shop-nine.vercel.app/)

## [Backend Repo Link](https://github.com/Farsit-007/level-2-Assignment-2) (Updated As Assignment - 4)

## 🚀 Project Features :

A secure, responsive e-commerce platform for bike sales with authentication, product management, and SurjoPay integration.

**🔹 Core Features** </br>

• Auth: Secure registration (default: Customer), JWT login/logout </br>
• Public Pages: Home, All Products (search, filters), Product Details, About </br>
• Private Routes: </br>
• Checkout: Order placement, stock validation, SurjoPay payment </br>
• Dashboard: </br>
• Admin: User, product, order management (CRUD) </br>
• User: Order history, profile updates </br>

## 🛠️ Technology Stack

• Backend: Node.js, Express.js</br>
• Language: TypeScript</br>
• Database: MongoDB with Mongoose</br>
• Validation: Mongoose schema & Zod Validation</br>
• Utilities: Dotenv, Cors</br>
• Development Tools: Nodemon, TypeScript</br>
• Frontend : - TypeScript - React - Redux - Node / Express</br>

### 🧰 Setup Instructions

```js
git clone <repository-url>
cd level-2-Assignment-4
```

### .env file (For Backend only)

```js
PORT =
DATABASE_URI =
NODE_ENV = Development
JWT_ACCESS_SECRET =
JWT_REFRESH_SECRET =
SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=sp_sandbox
SP_PASSWORD=pyyk97hu&6u6
SP_PREFIX=SP
SP_RETURN_URL=https://sandbox.shurjopayment.com/response
```

### Install NPM

```shell
npm i
```

### Run the Project

```shell
npm run dev
```
