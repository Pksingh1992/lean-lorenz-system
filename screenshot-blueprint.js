#!/usr/bin/env node

/**
 * Screenshot capture script for lorenz-lean-blueprint.html
 * Requires: npm install puppeteer
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureBlueprint() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewport({ width: 1600, height: 1200 });

  // Load the HTML file
  const htmlPath = path.join(__dirname, 'ICARM-summer-school-Lorentz-system final/lorenz-lean-blueprint.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle2' });

  // Wait for rendering
  await page.waitForTimeout(2000);

  // Create output directory
  const outputDir = path.join(__dirname, 'blueprint-screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Capture full page screenshot
  const fullPath = path.join(outputDir, 'blueprint-full.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log(`✓ Full page screenshot: ${fullPath}`);

  // Capture current viewport (initial state)
  const vpPath = path.join(outputDir, 'blueprint-initial.png');
  await page.screenshot({ path: vpPath });
  console.log(`✓ Initial view screenshot: ${vpPath}`);

  // Optional: Capture each step by simulating key presses
  console.log('\nCapturing all 30 steps...');
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(800); // Wait for animation
    
    const stepPath = path.join(outputDir, `step-${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({ path: stepPath });
    console.log(`✓ Step ${i + 1}/30: ${stepPath}`);
  }

  await browser.close();
  console.log(`\n✓ All screenshots saved to: ${outputDir}`);
}

captureBlueprint().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
