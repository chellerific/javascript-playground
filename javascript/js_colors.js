// setColors(occupations: string[]) {
//   let darkestHue = 100;
//   let darkestSaturation = 22;
//   let darkestLightness = 24;
//   let brightestHue = 360;
//   let brightestSaturation = 80;
//   let brightestLightness = 83;

//   this.HSLcolors.push(new HSL(darkestHue, darkestSaturation, darkestLightness));

//   const hueMultiplier = darkestHue / brightestHue / occupations.length;
//   const saturationMultiplier = darkestSaturation / brightestSaturation / occupations.length;
//   const lightnessMultiplier = darkestLightness / brightestLightness / occupations.length;

//   console.log('HUE MULTIPLIER: ', hueMultiplier);
//   console.log('SATURATION MULTIPLIER: ', saturationMultiplier);
//   console.log('LIGHTNESS MULTIPLIER: ', lightnessMultiplier);

//   for (const job of occupations) {
//     darkestHue = darkestHue * hueMultiplier + darkestHue;
//     darkestSaturation = darkestSaturation * saturationMultiplier + darkestSaturation;
//     darkestLightness = darkestLightness * lightnessMultiplier + darkestLightness;

//     this.HSLcolors.push(new HSL(darkestHue, darkestSaturation, darkestLightness));
//   }

//   let scaledColors: HSL[] = [];
//   let hueArr = [];
//   let saturationArr = [];
//   let lightnessArr = [];

//   console.log('UNSCALED HSL COLORS', this.HSLcolors);

//   this.HSLcolors.forEach((hsl: HSL) => {
//     hueArr.push(hsl.hue);
//     saturationArr.push(hsl.saturation);
//     lightnessArr.push(hsl.lightness);
//   });

//   let maxHue = Math.max.apply(Math, hueArr);
//   let maxSaturation = Math.max.apply(Math, saturationArr);
//   let maxLightness = Math.max.apply(Math, lightnessArr);

//   let minHue = Math.min.apply(Math, hueArr);
//   let minSaturation = Math.min.apply(Math, saturationArr);
//   let minLightness = Math.min.apply(Math, lightnessArr);

//   console.log('MAX HUE', maxHue);
//   console.log('MAX SATURATION', maxSaturation);
//   console.log('MAX LIGHTNESS', maxLightness);

//   console.log('MIN HUE', minHue);
//   console.log('MIN SATURATION', minSaturation);
//   console.log('MIN LIGHTNESS', minLightness);

//   this.HSLcolors.forEach((hsl: HSL) => {
//     let hue = this.scaleColors(hsl.hue, 140, 300, minHue, maxHue);
//     let saturation = this.scaleColors(hsl.saturation, 22, 80, minSaturation, maxSaturation);
//     let lightness = this.scaleColors(hsl.lightness, 24, 83, minLightness, maxLightness);
//     scaledColors.push(new HSL(Math.round(hue), Math.round(saturation), Math.round(lightness)));
//   });

//   console.log('SCALED HSL COLORS', scaledColors);

//   scaledColors.forEach((hslColor: HSL) => {
//     this.hexColors.push(this.hslToHex(hslColor.hue, hslColor.saturation, hslColor.lightness));
//   });

//   console.log(this.hexColors);
// }

// scaleColors(unscaledNum, minAllowed, maxAllowed, min, max) {
//   return ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed;
// }

// hslToHex(h, s, l) {
//   h /= 360;
//   s /= 100;
//   l /= 100;
//   let r, g, b;
//   if (s === 0) {
//     r = g = b = l; // achromatic
//   } else {
//     const hue2rgb = (p, q, t) => {
//       if (t < 0) t += 1;
//       if (t > 1) t -= 1;
//       if (t < 1 / 6) return p + (q - p) * 6 * t;
//       if (t < 1 / 2) return q;
//       if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//       return p;
//     };
//     const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     const p = 2 * l - q;
//     r = hue2rgb(p, q, h + 1 / 3);
//     g = hue2rgb(p, q, h);
//     b = hue2rgb(p, q, h - 1 / 3);
//   }
//   const toHex = x => {
//     const hex = Math.round(x * 255).toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   };
//   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// }
