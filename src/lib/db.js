import { createClient } from "@supabase/auth-helpers-sveltekit";

let SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
let SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);