## Next.js CRUD Application

## Overview
This project is a simple CRUD (Create, Read, Update, Delete) application built with Next.js and Prisma. It demonstrates how to perform basic CRUD operations using Next.js for the front end and Prisma as an ORM for database interactions.

## Features
* Create: Add new records to the database.
* Read: View a list of all records and detailed information for each record.
* Update: Modify existing records.
* Delete: Remove records from the database.
* Responsive Design: Ensures the application looks great on all devices, including desktops, tablets, and mobile phones.
  
## Technologies Used
* Next.js: A React framework for server-side rendering and static site generation.
* React: A JavaScript library for building user interfaces.
* Prisma: A next-generation ORM for Node.js and TypeScript.
* Tailwind CSS: A utility-first CSS framework for styling.
* Node.js: For running the backend server.
* SQLite: Used as the development database.
  
## Getting Started
To get a local copy of the project up and running, follow these simple steps.

## Prerequisites
* Node.js (v14 or higher)
* npm (v6 or higher)
  
## Installation
1. Clone the repository:
git clone https://github.com/tobiasSantellan/nextjs-crud.git

2. Navigate to the project directory:
cd nextjs-crud

3. Install the dependencies:
npm install

4. Set up the database with Prisma:
npx prisma migrate dev --name init

5. Start the development server:
npm run dev

6. Open your browser and go to http://localhost:3000 to view the application.
   
## Usage
* Home Page: View a list of all records.
* Add Record: Use the form to create a new record.
* Edit Record: Click on a record to edit its details.
* Delete Record: Remove a record from the list.
  
## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
Create your feature branch:
git checkout -b feature/YourFeature

2. Commit your changes:
git commit -m 'Add some feature'

3. Push to the branch:
git push origin feature/YourFeature

4. Open a pull request.
