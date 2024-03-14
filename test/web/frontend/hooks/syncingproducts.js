import { useState, useEffect } from 'react';
import { authenticatedFetch } from "@shopify/app-bridge/utilities";
import { useAppBridge } from "@shopify/app-bridge-react";

const useSyncProducts = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState(null);
  const app = useAppBridge(); // Get the app bridge instance

  const handleSyncProducts = async () => {
    console.log("Sync button clicked!");
    setIsSyncing(true); // Set syncing state to true

    try {
      const response = await authenticatedFetch(app)('/api/sync-products');

      if (!response.ok) {
        console.error(`Error in sync request: ${response.statusText}`);
        setSyncError(response.statusText); // Set error state
      } else {
        console.log('Sync request sent successfully!');
      }
    } catch (error) {
      console.error('Error sending sync request:', error);
      setSyncError(error.message); // Set error state
    } finally {
      setIsSyncing(false); // Set syncing state to false regardless of success/failure
    }
  };

  return { handleSyncProducts, isSyncing, syncError };
};

export default useSyncProducts;
