#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build and deploy backend
echo "📦 Building backend..."
cd backend
npm install
npm run prod:build

# Build and deploy frontend
echo "🎨 Building frontend..."
cd ../frontend
npm install
npm run build

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed successfully!" 