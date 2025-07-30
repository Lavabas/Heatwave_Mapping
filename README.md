# Heatwave Frequency Mapping in Sri Lanka (2005 - 2010)
## Overview
This project maps the frequency of heatwaves across Sri Lanka between 2005 and 2010 using ECMWF ERA5-Land monthly temperature data. A heatwave is defined here as a month in which the 2-meter air temperature exceeds the 90th percentile baseline (2000–2025). The resulting map shows the number of heatwave months during the target period and helps identify regions with higher heat stress.

This analysis provides insights into climate extremes, supports climate risk assessment, and can inform agriculture, water resource management, and urban resilience planning in Sri Lanka.

## Data
Source: ECMWF ERA5-Land Monthly Aggregates

## Spatial Interpretation
<img width="1920" height="552" alt="Screenshot (315)" src="https://github.com/user-attachments/assets/1f8e23f0-bf38-47c9-beeb-1fbf386e16c5" />

- Northern, North-Central, and Eastern regions (e.g., near Trincomalee and Batticaloa) show higher frequency (red to dark red), up to 6–7 extreme heat months.
- Southern and Central parts show lower values (white to light yellow), meaning these areas were relatively less affected.
- Coastal western regions show minimal events.

## Notes
1. The definition of a heatwave here is relative (based on local historical percentile), not based on absolute thresholds.
2. Some months during 2005–2010 may have experienced temperatures above the threshold but may not correspond to real-world meteorological heatwave events (which often require multi-day events).
3. You can refine the AOI by using a GEE FeatureCollection of Sri Lanka’s districts or country boundary.



