#!/bin/bash

# Build script for Cloudflare Workers deployment
# This script handles the migration from Pages Functions to Workers

set -e  # Exit on any error

echo "🔄 Starting Cloudflare Workers build process..."

# Ensure we're in the correct directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "📁 Working directory: $(pwd)"

# Backup existing functions if they exist
if [ -d "./dist/functions" ]; then
    echo "💾 Backing up existing functions..."
    cp -r ./dist/functions ./functions-backup
    echo "✅ Functions backed up"
else
    echo "ℹ️ No existing functions to backup"
fi

# Build the frontend with Cloudflare target
echo "🏗️ Building frontend..."
BUILD_TARGET=cloudflare npx vite build

# Restore functions after build
if [ -d "./functions-backup" ]; then
    echo "🔄 Restoring functions..."
    cp -r ./functions-backup ./dist/functions
    rm -rf ./functions-backup
    echo "✅ Functions restored"
fi

# Verify functions exist
if [ ! -d "./dist/functions" ]; then
    echo "❌ Error: Functions directory not found at ./dist/functions"
    echo "📁 Current dist structure:"
    ls -la ./dist/ || echo "dist directory not found"
    exit 1
fi

if [ ! -d "./dist/functions/api" ]; then
    echo "❌ Error: API functions not found at ./dist/functions/api"
    echo "📁 Functions directory structure:"
    ls -la ./dist/functions/ || echo "functions directory empty"
    exit 1
fi

echo "📋 Functions found:"
ls -la ./dist/functions/api/

# Build Pages Functions into Worker
echo "⚙️ Compiling Pages Functions to Worker..."
npx wrangler pages functions build \
    --directory=./dist/functions \
    --outdir=./dist/worker/ \
    --build-output-directory=./dist

# Verify worker was created
if [ ! -f "./dist/worker/index.js" ]; then
    echo "❌ Error: Worker script not created at ./dist/worker/index.js"
    exit 1
fi

echo "✅ Worker compiled successfully!"
echo "📊 Worker size:"
ls -lh ./dist/worker/index.js

echo "🎉 Build completed successfully!"
echo ""
echo "Next steps:"
echo "  - Deploy: npx wrangler deploy"
echo "  - Test locally: npx wrangler dev"
