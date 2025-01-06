-- Get sequence name
SELECT pg_get_serial_sequence('"company"', 'company_id');
-- get current sequence number
SELECT last_value FROM public.company_company_id_seq;
-- reset sequence to a given number
ALTER SEQUENCE public.company_company_id_seq RESTART WITH 35;
