/**
 * Image Optimization Script
 * 
 * This script uses sharp to create optimized versions of images in the public/images folder.
 * It creates both WebP and optimized original format images.
 * 
 * To use: 
 * 1. Install dependencies: npm install sharp
 * 2. Run with: node scripts/optimize-images.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Create the output directory if it doesn't exist
async function ensureOutputDirExists() {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  } catch (err) {
    console.error('Error creating output directory:', err);
    throw err;
  }
}

// Get all image files from source directory
async function getImageFiles() {
  try {
    const files = await fs.readdir(SOURCE_DIR);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });
  } catch (err) {
    console.error('Error reading source directory:', err);
    throw err;
  }
}

// Optimize a single image
async function optimizeImage(file) {
  const inputPath = path.join(SOURCE_DIR, file);
  const fileBaseName = path.basename(file, path.extname(file));
  const outputPathOriginal = path.join(OUTPUT_DIR, file);
  const outputPathWebP = path.join(OUTPUT_DIR, `${fileBaseName}.webp`);
  
  try {
    // Check file extension
    const ext = path.extname(file).toLowerCase();
    const sharpInstance = sharp(inputPath).resize({ width: 1200, withoutEnlargement: true });
    
    // Process original format with optimization
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharpInstance.clone().jpeg({ quality: 75, progressive: true, mozjpeg: true }).toFile(outputPathOriginal);
    } else if (ext === '.png') {
      await sharpInstance.clone().png({ quality: 75, progressive: true, compressionLevel: 9 }).toFile(outputPathOriginal);
    } else if (ext === '.gif') {
      // For GIF just copy as Sharp doesn't handle animated GIFs well
      await fs.copyFile(inputPath, outputPathOriginal);
    }
    
    // Create WebP version
    await sharpInstance.webp({ quality: 75 }).toFile(outputPathWebP);
    
    console.log(`Optimized: ${file} → ${path.basename(outputPathOriginal)} and ${path.basename(outputPathWebP)}`);
  } catch (err) {
    console.error(`Error optimizing ${file}:`, err);
  }
}

// Main function
async function main() {
  try {
    await ensureOutputDirExists();
    const imageFiles = await getImageFiles();
    
    if (imageFiles.length === 0) {
      console.log('No image files found in source directory.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} images to optimize.`);
    
    // Process images sequentially to avoid memory issues
    for (const file of imageFiles) {
      await optimizeImage(file);
    }
    
    console.log('Image optimization complete!');
    console.log(`Original images: ${imageFiles.length}`);
    console.log(`Optimized images: ${imageFiles.length * 2} (including WebP versions)`);
    
  } catch (err) {
    console.error('An error occurred during optimization:', err);
    process.exit(1);
  }
}

main();