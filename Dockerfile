# Stage 1: Install dependencies and build React app
FROM node:20-alpine AS builder

WORKDIR /application

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Cloud Run requires your app to listen on port 8080
EXPOSE 8080
ENV PORT=8080

# Replace the default Nginx config to route all paths to index.html (SPA mode)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build output
COPY --from=builder /application/build/client /usr/share/nginx/html

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
