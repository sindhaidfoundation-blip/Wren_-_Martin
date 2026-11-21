import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import mobileAds, {
  AdsConsent,
  BannerAd,
  BannerAdSize,
  TestIds
} from "react-native-google-mobile-ads";

export default function AdBanner() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function prepareAds() {
      try {
        // Collect consent before requesting ads, as required by AdMob policy.
        const consentInfo = await AdsConsent.gatherConsent();
        if (!active) return;

        if (!consentInfo?.canRequestAds) {
          setStatus("consent");
          return;
        }

        await mobileAds().initialize();
        if (active) setStatus("ready");
      } catch (error) {
        console.warn("AdMob setup failed:", error);
        if (active) setStatus("error");
      }
    }

    prepareAds();
    return () => {
      active = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      {status === "ready" ? (
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.BANNER}
          onAdLoaded={() => console.log("AdMob test banner loaded.")}
          onAdFailedToLoad={(error) => {
            console.warn("AdMob test banner failed to load:", error);
            setStatus("error");
          }}
        />
      ) : (
        <View style={styles.message}>
          {status === "loading" ? <ActivityIndicator size="small" /> : null}
          <Text style={styles.messageText}>
            {status === "loading"
              ? "Ad loading..."
              : status === "consent"
                ? "Ad consent is required before ads can load."
                : "Test ad could not load. Please check internet and try again."}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 4
  },
  message: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 4
  },
  messageText: {
    color: "#7B8499",
    fontSize: 10
  }
});
