-- Enable extension for gen_random_uuid (usually enabled by default in Supabase)
create extension if not exists "pgcrypto";

-- Create feedback table
create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text,
  email text,
  project text,
  rating integer,
  message text
);

-- Enable Row Level Security (RLS)
alter table public.feedback enable row level security;

-- Policy: allow anonymous inserts into feedback
create policy if not exists "Allow anon insert feedback"
  on public.feedback
  for insert
  to anon
  using (true)
  with check (true);
