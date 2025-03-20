FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Fix OpenSSL error
ENV NODE_OPTIONS="--openssl-legacy-provider"

# Copy the rest of the project files
COPY . .

# Build the React application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
