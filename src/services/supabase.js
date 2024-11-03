import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://osjjfcojyznewacebbog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zampmY29qeXpuZXdhY2ViYm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNjk3NzAsImV4cCI6MjAzNzg0NTc3MH0.pek7ybv1TM4vOENjwi5nCzC3KdbVIOHElI9VoxqdvCA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
