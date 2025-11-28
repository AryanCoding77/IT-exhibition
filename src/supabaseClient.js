import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://chnkyhknvslensxjmswq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNobmt5aGtudnNsZW5zeGptc3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMDM0MDMsImV4cCI6MjA3OTg3OTQwM30.hsXTlNtJJ84amZwIkrl70JlRaaSIlI4XcnluvLcXHbc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
