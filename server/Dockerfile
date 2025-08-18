# Use Node.js 22 Alpine for smaller image size
FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install dependencies using npm
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Change ownership to nodejs user
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Start the application using PM2
CMD ["npm", "start"]
