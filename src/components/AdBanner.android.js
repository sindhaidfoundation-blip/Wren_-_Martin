import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function AdBanner() {
  const [adsSdk, setAdsSdk] = useState(null);

  useEffect(() => {
    let active = true;

    async function prepareAds() {
      try {
        // Load the native SDK lazily so an unavailable/unlinked AdMob module
        // cannot prevent the learning app itself from opening.
        const ads = require("react-native-google-mobile-ads");
        const consentInfo = await ads.AdsConsent.gatherConsent();
        if (!active || !consentInfo?.canRequestAds) return;

        await ads.default().initialize();
        if (active) setAdsSdk(ads);
      } catch (error) {
        // Ads are optional: keep the app usable if consent or AdMob setup fails.
        console.warn("AdMob is unavailable; continuing without ads.", error);
      }
    }

    prepareAds();
    return () => {
      active = false;
    };
  }, []);

  if (!adsSdk) return null;

  const BannerAd = adsSdk.BannerAd;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
      <BannerAd
        unitId={adsSdk.TestIds.BANNER}
        size={adsSdk.BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => {
          console.warn("AdMob test banner failed to load:", error);
        }}
      />
    </View>
  );
}
