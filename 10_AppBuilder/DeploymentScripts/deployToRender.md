# 🌍 Deploying ZorTal to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repo
3. Set build command: `npm run build`
4. Set start command: `node server.js`
5. Add environment variables:
   - `MONGO_URI`: your MongoDB connection string
   - `JWT_SECRET`: your auth token secret
6. Enable auto-deploy on push
7. Celebrate 🎉
