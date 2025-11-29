-- Create a table for story submissions
CREATE TABLE public.story_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  region TEXT NOT NULL,
  category TEXT NOT NULL,
  story TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.story_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert stories (public submission form)
CREATE POLICY "Anyone can submit stories"
ON public.story_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow reading stories (for future admin review)
CREATE POLICY "Anyone can view approved stories"
ON public.story_submissions
FOR SELECT
TO anon, authenticated
USING (status = 'approved');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_story_submissions_updated_at
BEFORE UPDATE ON public.story_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add index for efficient queries
CREATE INDEX idx_story_submissions_status ON public.story_submissions(status);
CREATE INDEX idx_story_submissions_created_at ON public.story_submissions(created_at DESC);