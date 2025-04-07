#!/usr/bin/env node

/**
 * Build Optimized Script
 * 
 * This script runs a sequence of optimizations for the production build:
 * 1. Runs the image optimization script
 * 2. Builds the project with Vite
 * 3. Compresses the build output
 */

import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log function with timestamp
const log = (message) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] ${message}`);
};

// Run a command and return a promise
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    log(`Running: ${command}`);
    const process = exec(command);
    
    process.stdout.on('data', (data) => console.log(data.toString()));
    process.stderr.on('data', (data) => console.error(data.toString()));
    
    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
};

// Main build function
async function buildOptimized() {
  try {
    const startTime = Date.now();
    log('Starting optimized build process...');
    
    // Optimize images first
    log('Step 1: Optimizing images...');
    try {
      await runCommand('node scripts/optimize-images.js');
    } catch (err) {
      log('Warning: Image optimization failed, continuing with build...');
      console.error(err);
    }
    
    // Run the Vite build
    log('Step 2: Building the project...');
    await runCommand('npm run build');
    
    // Log completion
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    log(`Build completed in ${duration.toFixed(2)} seconds!`);
    
    log('Done! Your optimized build is ready in the dist/ directory.');
    log('Run "npm run preview" to test the production build locally.');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Run the build
buildOptimized();