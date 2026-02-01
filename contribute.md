## Manual Installation Steps:-

- Install nodejs locally
- Clone the repo
- Install dependencies (npm install)
- Start the DB locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new DB
- Change the `.env` file and update your DB Credentials
- npx prisma migrate dev
- npx prisma generate
- npm run start



## Docker installation

## Steps  
