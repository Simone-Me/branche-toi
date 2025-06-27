import { useEffect, useState } from "react";
import testConnection from "../lib/testConnection";

function ConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState("checking");

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const isConnected = await testConnection();
      setConnectionStatus(isConnected ? "connected" : "failed");
    } catch (error) {
      setConnectionStatus("failed");
      console.error("Connection check failed:", error);
    }
  };

  return (
    <div className="connection-status">
      <h3>Supabase Connection Status:</h3>
      <div className={`status-indicator ${connectionStatus}`}>
        {connectionStatus === "checking" && "Checking connection..."}
        {connectionStatus === "connected" && "✅ Connected to Supabase"}
        {connectionStatus === "failed" && "❌ Connection failed"}
      </div>
      <button onClick={checkConnection}>Test Connection Again</button>
    </div>
  );
}

export default ConnectionTest;
