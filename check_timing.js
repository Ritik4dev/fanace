const { execSync } = require('child_process');

// Sample frames from 1s to 7s at 0.5s intervals
for (let t = 1.0; t <= 7.0; t += 0.5) {
  try {
    const buf = execSync(`ffmpeg -v error -ss ${t.toFixed(1)} -i public/hero-card-video.mp4 -vframes 1 -vf scale=192:108 -f rawvideo -pix_fmt rgb24 -`);
    // Check right half (x = 100 to 192) vs left half (x = 0 to 100)
    let leftCount = 0, rightCount = 0;
    for (let y = 0; y < 108; y++) {
      for (let x = 0; x < 192; x++) {
        const idx = (y * 192 + x) * 3;
        if (buf[idx] < 240 || buf[idx+1] < 240 || buf[idx+2] < 240) {
          if (x < 100) leftCount++; else rightCount++;
        }
      }
    }
    console.log(`t=${t.toFixed(1)}s -> Left pixels: ${leftCount}, Right pixels: ${rightCount}`);
  } catch (e) {
    console.log(`t=${t} err`);
  }
}

