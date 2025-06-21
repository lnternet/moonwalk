# Stage 1: Install all dependencies including dev for build
FROM node:20-alpine AS development-dependencies-env

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

# Stage 2: Install only production dependencies
FROM node:20-alpine AS production-dependencies-env

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Stage 3: Build the application
FROM node:20-alpine AS build-env

WORKDIR /app
COPY . .
COPY --from=development-dependencies-env /app/node_modules ./node_modules
RUN yarn build

# Stage 4: Final image with production dependencies and build output
FROM node:20-alpine

WORKDIR /app
COPY package.json yarn.lock ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build

CMD ["yarn", "start"]
