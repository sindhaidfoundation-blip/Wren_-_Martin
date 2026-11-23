import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";

const adsDisabledForBuild = process.env.EXPO_PUBLIC_ADS_ENABLED === "false";
const manufacturer = String(Platform.constants?.Manufacturer || "").toLowerCase();
const isHuaweiDevice = manufacturer.includes("huawei");

export default function AdBanner() {
  const [adsSdk, setAdsSdk] = useState(null);

  useEffect(() => {
    // Huawei devices commonly ship without Google Play services. Keep the
    // learning app fully usable without attempting to initialize Google Ads.
    if (adsDisabledForBuild || isHuaweiDevice) return undefined;

    let active = true;

    async function prepareAds() {
      try {
        // Ads are optional: load the native SDK only after the app has mounted.
        const ads = require("react-native-google-mobile-ads");
        const consentInfo = await ads.AdsConsent.gatherConsent();
        if (!active || !consentInfo?.canRequestAds) return;

        await ads.default().initialize();
        if (active) setAdsSdk(ads);
      } catch (error) {
        // Missing Google Play services, denied consent, or an SDK issue must
        // never prevent lessons, quizzes, progress, or certificates from working.
        console.warn("Google Mobile Ads unavailable; continuing without ads.", error);
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
        unitId="ca-app-pub-4568292017940942/7370840974"
        size={adsSdk.BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => {
          console.warn("Google Mobile Ads banner failed to load:", error);
        }}
      />
    </View>
  );
}
