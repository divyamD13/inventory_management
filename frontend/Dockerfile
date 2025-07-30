# Stage 1: Build the React application
FROM node:20 as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# NEW: Manually install the specific rollup native dependency to fix the npm bug
RUN npm install --save-dev @rollup/rollup-linux-x64-gnu

# Use npm ci for a more reliable installation
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80