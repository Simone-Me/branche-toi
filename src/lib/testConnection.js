import { supabase } from "./supabaseClient";

async function testConnection() {
  try {
    // Simple ping test
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Connection test failed:", error.message);
      return false;
    }

    console.log("Connection successful!", {
      connection: "OK",
      timestamp: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error("Connection test failed:", error.message);
    return false;
  }
}

export default testConnection;
