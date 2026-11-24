import React, { useEffect, useState } from "react";
import { View } from "react-native";

const BANNER_AD_UNIT_ID = "ca-app-pub-4568292017940942/8797252103";

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
        unitId={BANNER_AD_UNIT_ID}
        size={adsSdk.BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => {
          console.warn("AdMob banner failed to load:", error);
        }}
      />
    </View>
  );
}
