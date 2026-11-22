import React from "react";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

// Test ad unit is intentional until the publisher supplies their production ID.
// Google serves test inventory only; never click test ads in a production release.
export default function AdBanner() {
  return (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.BANNER}
      requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      onAdFailedToLoad={(error) => console.warn("AdMob banner failed to load:", error)}
    />
  );
}
