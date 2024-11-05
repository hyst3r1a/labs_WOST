# Use a Node image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

RUN pwd

# Copy package.json and package-lock.json files
COPY package*.json /app

RUN ls -la /app

RUN echo "Current directory contents:" && ls -la

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app (for production)
RUN npm run build

# Install `serve` to serve the static files in production
RUN npm install -g serve

# Use `serve` to serve static files from the build directory
CMD ["serve", "-s", "build", "-l", "3000"]
