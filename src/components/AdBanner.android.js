import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function AdBanner() {
  const [adsSdk, setAdsSdk] = useState(null);

  useEffect(() => {
    let active = true;

    async function prepareAds() {
      try {
        // Load AdMob after the learning app has mounted so native SDK setup
        // cannot block the initial app launch.
        const ads = require("react-native-google-mobile-ads");
        const consentInfo = await ads.AdsConsent.gatherConsent();
        if (!active || !consentInfo?.canRequestAds) return;

        await ads.default().initialize();
        if (active) setAdsSdk(ads);
      } catch (error) {
        // Ads are optional. Keep lessons and practice usable if ads fail.
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
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
        onAdFailedToLoad={(error) => {
          console.warn("AdMob test banner failed to load:", error);
        }}
      />
    </View>
  );
}
