# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript code
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Copy environment files
COPY .env.production .env

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 