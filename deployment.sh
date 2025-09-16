#!/bin/bash

# Check if node_modules directory exists
if [ -d "node_modules" ]; then
  echo "Deleting node_modules directory..."
  rm -rf node_modules
else
  echo "node_modules directory not found. Proceeding further..."
fi

# Install specific Node.js version
NODE_VERSION=20.0.0  # Specify the desired Node.js version
echo "Installing Node.js version $NODE_VERSION..."
nvm install $NODE_VERSION
nvm use $NODE_VERSION

# Install dependencies
echo "Installing dependencies..."
npm install

# Build Firebase project
echo "Building Firebase project..."
npm run build  # Or the appropriate build command for your project
