import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dsbwmndnmgpltuzlbhuo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzYndtbmRubWdwbHR1emxiaHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMTU3NDYsImV4cCI6MjA2NjU5MTc0Nn0.49XtJ41nspCIjDdPtiUZGDOgNiytziVWYIhTLmbtrx0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
