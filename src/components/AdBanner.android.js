import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import mobileAds, { AdsConsent, BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

export default function AdBanner() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    async function prepareAds() {
      try {
        const consentInfo = await AdsConsent.gatherConsent();
        if (!active || !consentInfo.canRequestAds) return;
        await mobileAds().initialize();
        if (active) setReady(true);
      } catch (error) {
        console.warn("AdMob consent or initialization failed.", error);
      }
    }
    prepareAds();
    return () => { active = false; };
  }, []);

  if (!ready) return null;
  return (
    <View style={styles.container}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.BANNER}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  }
});
