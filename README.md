# React Demo: Users, Companies, Newsletter & Weather

  A React + TypeScript demo app to manage users and companies, view newsletter posts, and check weather information based on geolocation.
  
## Features
- Manage **Users** and **Companies** with full CRUD using **React Context** (data persisted in localStorage)
- Display **Newsletter** posts and comments from JSONPlaceholder using **props**
- Show **Weather** information via OpenWeatherMap and geolocation using **props**
- Responsive UI with Ant Design components and icons
- Custom styling with Sass (SCSS)
- Page navigation using React Router


## Tech Stack
React | TypeScript | Ant Design | React Router | Axios | Context API | Sass | localStorage | JSONPlaceholder | OpenWeatherMap

## Installation
```bash
git clone https://github.com/npetdev/user-management.git
cd user-management
npm install
```

## Environment
Create `.env`:
```env
REACT_APP_API_KEY=your_openweathermap_api_key_here
```

## Run
```bash
npm start
```

## Project Structure
```
src/
├─ assets/        # images, fonts
├─ components/    # reusable UI components
│  ├─ Users/      # user-related components
│  ├─ Companies/  # company-related components
│  ├─ Newsletter/ # newsletter posts components
│  └─ Weather/    # weather components
├─ context/       # React context & providers
├─ layouts/       # shared layouts (header, footer)
├─ pages/         # pages for routing (welcome, non-existing page)
├─ services/      # API / business logic
├─ styles/        # SCSS / CSS files
├─ types/         # TypeScript types/interfaces
└─ utils/         # helper functions

```

## API
- JSONPlaceholder: https://jsonplaceholder.typicode.com  
- OpenWeatherMap: https://openweathermap.org/api

## Contributing
Fork → Branch → Pull Request

## License
MIT

