/**
 * Cloudinary Storage Service Utility
 * 
 * Provides handles for the Cloudinary Upload Widget.
 */

export const storageService = {
  getUploadWidget(onSuccess: (url: string) => void) {
    if (typeof window === 'undefined') return null;

    // @ts-ignore
    return window.cloudinary?.createUploadWidget(
      {
        cloudName: 'YOUR_CLOUD_NAME', // Will be injected via env/props
        uploadPreset: 'boutique_uploads',
        cropping: true,
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#E5C1CD",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#E5C1CD",
            action: "#1C1C1C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
          }
        }
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          onSuccess(result.info.secure_url);
        }
      }
    );
  }
};
