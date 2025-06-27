import { useEffect, useState } from "react";
import setupDatabase from "../lib/setupDatabase";
import { supabase } from "../lib/supabaseClient";

function DatabaseSetup() {
  const [setupStatus, setSetupStatus] = useState("pending");
  const [message, setMessage] = useState("");
  const [dataCount, setDataCount] = useState(0);

  // Check current data count
  useEffect(() => {
    checkDataCount();
  }, []);

  const checkDataCount = async () => {
    const { data, error } = await supabase.from("temoignages").select("count");

    if (!error && data) {
      setDataCount(data[0]?.count || 0);
    }
  };

  const initializeDatabase = async () => {
    setSetupStatus("loading");
    setMessage("Initializing database and inserting data...");

    try {
      const success = await setupDatabase();
      if (success) {
        await checkDataCount();
        setSetupStatus("success");
        setMessage(`Database setup complete! ${dataCount} records inserted.`);
      } else {
        setSetupStatus("error");
        setMessage("Setup failed");
      }
    } catch (error) {
      console.error("Setup failed:", error);
      setSetupStatus("error");
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div
      className="database-setup"
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "1px solid #ccc",
      }}
    >
      <h3>Database Setup</h3>
      <div className="status" style={{ margin: "1rem 0" }}>
        Status:{" "}
        <span
          style={{
            color:
              setupStatus === "success"
                ? "green"
                : setupStatus === "error"
                ? "red"
                : "orange",
          }}
        >
          {setupStatus}
        </span>
      </div>
      <div className="data-count" style={{ margin: "0.5rem 0" }}>
        Current records: {dataCount}
      </div>
      <div className="message" style={{ margin: "0.5rem 0" }}>
        {message}
      </div>
      <button
        onClick={initializeDatabase}
        disabled={setupStatus === "loading"}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: setupStatus === "loading" ? "#ccc" : "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: setupStatus === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {setupStatus === "loading" ? "Setting up..." : "Initialize Database"}
      </button>
    </div>
  );
}

export default DatabaseSetup;
