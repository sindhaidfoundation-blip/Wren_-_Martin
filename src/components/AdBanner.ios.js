import React, { useEffect, useState } from "react";
import { View } from "react-native";

// The iOS app is still configured with Google's sample test App ID.
const IOS_TEST_BANNER_AD_UNIT_ID = "ca-app-pub-3940256099942544/2934735716";

export default function AdBanner() {
  const [adsSdk, setAdsSdk] = useState(null);

  useEffect(() => {
    let active = true;

    async function prepareAds() {
      try {
        const ads = require("react-native-google-mobile-ads");
        const consentInfo = await ads.AdsConsent.gatherConsent();
        if (!active || !consentInfo?.canRequestAds) return;

        await ads.default().initialize();
        if (active) setAdsSdk(ads);
      } catch (error) {
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
        unitId={IOS_TEST_BANNER_AD_UNIT_ID}
        size={adsSdk.BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => {
          console.warn("iOS test banner failed to load:", error);
        }}
      />
    </View>
  );
}
