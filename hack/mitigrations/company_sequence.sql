-- Get sequence name
SELECT pg_get_serial_sequence('"company"', 'company_id');
-- reset sequence to a given number
ALTER SEQUENCE public.company_company_id_seq RESTART WITH 35;
