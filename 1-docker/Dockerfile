# ---- builder stage ----
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci                     # installs dev + prod deps
COPY . .
RUN npm run build

# ---- production stage ----
FROM node:18-alpine

WORKDIR /app

# copies package.json and package-lock.json file to install dependencies.
COPY package*.json ./

# RUN command runs at image build time.
RUN npm ci --only=production   # only prod deps

# This just copies the dist files and skips the source code and build tools etc. and that's why saves the space and reduce image size.
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# CMD runs while running container.
CMD ["node", "dist/index.js"]