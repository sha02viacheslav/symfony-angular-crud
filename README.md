[![Architecture](frontend/src/assets/images/favicon.png)]

# Symfony-Angular-CRUD


## Installation

### 1. Install dependencies

Backend:

```
cd symfony-angular-crud
composer install
```
Frontend:

```
cd frontend
npm install
```

### 2. Run the script

Backend:

```
cd symfony-angular-crud
symfony server:start
php bin/console doctrine:migrations:migrate
php bin/console app:import-orders-data
```
Frontend:

```
cd frontend
npm start
```
You can check in http://localhost:4200
## Licence

Copyright (C) 2022 Rachid Aachich
