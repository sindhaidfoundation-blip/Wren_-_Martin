import mobileAds from "react-native-google-mobile-ads";

// This platform-specific module is selected only for native Android builds.
export default function initializeAds() {
  mobileAds().initialize().catch((error) => {
    console.warn("AdMob initialization failed:", error);
  });
}
