# Flight Booking System

A full-stack web application with a Spring Boot backend and a React (Vite) frontend, built around customer record management with CRUD functionality.

## Overview

The backend exposes a REST API for managing customer records, backed by Spring Data JPA and Hibernate for ORM mapping to the database. The frontend is a single-page application using `react-router-dom` for client-side routing, with views for listing customers, adding a new customer, updating an existing customer's details, and a per-customer dashboard.

> Note: this README reflects the customer management functionality currently implemented. Flight and booking-specific features are part of the planned scope.

## Tech stack

**Backend**
- Java
- Spring Boot
- Spring Data JPA + Hibernate
- Maven

**Frontend**
- React
- Vite
- React Router (`react-router-dom`)
- CSS

## Project structure
FlightBookingSystem/
├── backend/         # Spring Boot REST API
└── FullStack/
└── frontend/    # React + Vite SPA


## Frontend routes

- `/` — homepage
- `/customers` — list all customers
- `/add-customer` — create a new customer
- `/update-customer/:customerId` — edit an existing customer
- `/dashboard/:customerId` — customer dashboard view

## Running it

**Backend**
```bash
cd backend
mvn spring-boot:run
```

**Frontend**
```bash
cd FullStack/frontend
npm install
npm run dev
```

> Update the database connection details in `application.properties` before running the backend.

## Background

Built as a full-stack practice project to work through a typical Spring Boot + React architecture: entity/repository/service/controller layering on the backend, paired with a routed SPA on the frontend.
