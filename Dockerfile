# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies and build
COPY package*.json tsconfig.json ./
COPY src ./src
RUN npm ci --ignore-scripts && npm run build

FROM node:22-alpine
WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm ci --production --ignore-scripts

# Copy built files and entrypoint
COPY lib ./lib
COPY cli.js .

# Default command
ENTRYPOINT ["node", "cli.js"]
