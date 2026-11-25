import React, { useEffect, useState } from "react";
import { View } from "react-native";

const PRODUCTION_BANNER_ID = "ca-app-pub-4568292017940942/7370840974";
const GOOGLE_TEST_BANNER_ID = "ca-app-pub-3940256099942544/6300978111";

let sdkInitialization;

async function initializeAdsOnce(mobileAds) {
  if (!sdkInitialization) {
    sdkInitialization = mobileAds().initialize().catch((error) => {
      // Allow a later mount to retry if native SDK initialization failed.
      sdkInitialization = null;
      throw error;
    });
  }
  return sdkInitialization;
}

export default function AdBanner() {
  const [adsSdk, setAdsSdk] = useState(null);

  useEffect(() => {
    let active = true;

    async function prepareAds() {
      let ads;

      try {
        ads = require("react-native-google-mobile-ads");
      } catch (error) {
        console.error("AdMob SDK could not be loaded. Rebuild the native APK after checking the config plugin.", error);
        return;
      }

      let canRequestAds = false;

      try {
        // gatherConsent refreshes UMP information and displays any required form.
        const consentInfo = await ads.AdsConsent.gatherConsent();
        canRequestAds = consentInfo?.canRequestAds === true;
      } catch (consentError) {
        console.warn("AdMob consent gathering failed; checking the previously stored UMP consent status.", consentError);

        // Google recommends checking the previous session's consent status if
        // the current consent update/form flow fails. Never bypass UMP consent.
        try {
          const previousConsentInfo = await ads.AdsConsent.getConsentInfo();
          canRequestAds = previousConsentInfo?.canRequestAds === true;
        } catch (statusError) {
          console.warn("Could not read the previous AdMob consent status.", statusError);
        }
      }

      if (!active || !canRequestAds) {
        if (__DEV__) {
          console.info("AdMob banner is waiting: UMP has not permitted ad requests.");
        }
        return;
      }

      try {
        await initializeAdsOnce(ads.default);
        if (active) setAdsSdk(ads);
      } catch (initializationError) {
        console.error("Google Mobile Ads SDK initialization failed.", initializationError);
      }
    }

    prepareAds();

    return () => {
      active = false;
    };
  }, []);

  if (!adsSdk) return null;

  const BannerAd = adsSdk.BannerAd;
  const adUnitId = __DEV__ ? GOOGLE_TEST_BANNER_ID : PRODUCTION_BANNER_ID;

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        minHeight: 50,
        backgroundColor: "#FFFFFF",
      }}
    >
      <BannerAd
        unitId={adUnitId}
        size={adsSdk.BannerAdSize.BANNER}
        onAdLoaded={() => {
          console.info("AdMob banner loaded successfully.");
        }}
        onAdFailedToLoad={(error) => {
          console.warn("AdMob banner failed to load:", {
            code: error?.code,
            message: error?.message,
          });
        }}
      />
    </View>
  );
}
