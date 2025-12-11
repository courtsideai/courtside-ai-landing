-- Enable RLS on the table
ALTER TABLE public.courtside_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public/anonymous inserts
CREATE POLICY "Allow public waitlist signups"
ON public.courtside_waitlist
FOR INSERT
TO anon
WITH CHECK (true);