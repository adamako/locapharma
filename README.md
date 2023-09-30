This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

# Locapharma

**Locapharma** is an application that allows users to find pharmacies in Burkina Faso.

**View the live demo:** [https://locapharma.vercel.app/map](https://locapharma.vercel.app/map/)

## Features

- View available pharmacies in Burkina Faso
- Filter pharmacies by city
- View detailed information about a specific pharmacy
- View the location of a pharmacy on a map
- Get directions to a pharmacy from your current location
- View pharmacies on a map

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- Angular CLI
- Google Maps API key

## Installation

To install and run this application, follow these steps:

1. **Clone** this repository to your local machine:

   ```bash
   git clone https://github.com/adamako/locapharma.git
   ```

2. **Navigate** to the project directory:

   ```bash
   cd localpharma
   ```

3. **Install** the required dependencies:

   ```bash
   npm install
   ```
4. Set up your **Google Maps API key** in src/environment.ts: 
   ```typescript 
   export const environment = {
       production: false,
       apiUrl: 'https://locapharma-api.onrender.com/api', // you can use your own service
       apiKey: '<your-api-key>',
   };

## Screenshots
