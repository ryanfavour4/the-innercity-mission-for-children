import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gwhqrvpleobpxtqnwkuv.supabase.co'
const supabaseAnonKey = 'sb_publishable_7HmB2Ncmi3cU38p8GNddHA_KUlTNecw'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
