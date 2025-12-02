--
-- PostgreSQL database dump
--


-- Dumped from database version 16.10 (0374078)
-- Dumped by pg_dump version 16.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: drizzle; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA drizzle;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: __drizzle_migrations; Type: TABLE; Schema: drizzle; Owner: -
--

CREATE TABLE drizzle.__drizzle_migrations (
    id integer NOT NULL,
    hash text NOT NULL,
    created_at bigint
);


--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE; Schema: drizzle; Owner: -
--

CREATE SEQUENCE drizzle.__drizzle_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: drizzle; Owner: -
--

ALTER SEQUENCE drizzle.__drizzle_migrations_id_seq OWNED BY drizzle.__drizzle_migrations.id;


--
-- Name: completions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.completions (
    id integer NOT NULL,
    week integer NOT NULL,
    day integer NOT NULL
);


--
-- Name: completions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.completions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: completions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.completions_id_seq OWNED BY public.completions.id;


--
-- Name: exercise_weights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercise_weights (
    id integer NOT NULL,
    week integer NOT NULL,
    day integer NOT NULL,
    exercise_name text NOT NULL,
    weight numeric(5,2) NOT NULL
);


--
-- Name: exercise_weights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exercise_weights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exercise_weights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exercise_weights_id_seq OWNED BY public.exercise_weights.id;


--
-- Name: __drizzle_migrations id; Type: DEFAULT; Schema: drizzle; Owner: -
--

ALTER TABLE ONLY drizzle.__drizzle_migrations ALTER COLUMN id SET DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass);


--
-- Name: completions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.completions ALTER COLUMN id SET DEFAULT nextval('public.completions_id_seq'::regclass);


--
-- Name: exercise_weights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_weights ALTER COLUMN id SET DEFAULT nextval('public.exercise_weights_id_seq'::regclass);


--
-- Data for Name: __drizzle_migrations; Type: TABLE DATA; Schema: drizzle; Owner: -
--

COPY drizzle.__drizzle_migrations (id, hash, created_at) FROM stdin;
1	a194066c8ded8973c645e8bc17896b0424ab4685de591378f4965b9549a3408f	1762439326197
\.


--
-- Data for Name: completions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.completions (id, week, day) FROM stdin;
1	1	2
2	1	1
6	1	3
7	1	4
8	1	5
9	2	3
10	2	2
11	2	1
15	2	4
17	2	5
19	3	1
20	3	2
25	3	3
26	3	4
27	3	5
28	4	1
29	4	2
30	4	3
31	4	4
32	4	5
33	5	1
34	5	2
\.


--
-- Data for Name: exercise_weights; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.exercise_weights (id, week, day, exercise_name, weight) FROM stdin;
20	2	3	Seated Cable Row	30.00
21	2	3	DB Walking Lunge	10.00
23	2	3	DB Bicep Curl	6.00
22	2	3	Cable Upright Row	12.50
25	1	2	Smith Machine Shoulder Press	20.00
26	2	4	Incline DB Press	10.00
27	2	4	Leg Extension	25.00
28	2	4	Smith Machine Calf Raise	22.00
29	2	4	Cable Lateral Raise	5.00
32	2	5	Lat Pulldown	35.00
33	2	5	Alternating DB Shoulder Press	8.00
34	2	5	BB Hip Thrust	40.00
35	2	5	Cable Pushdown	10.00
36	2	5	DB Bicep Curl	6.00
37	3	1	Smith Machine Squat	25.00
38	3	1	Seated Cable Row	35.00
39	3	1	BB Bench Press	7.00
40	3	1	DB Lateral Raise	6.00
41	3	2	Lat Pull-down (close grip)	35.00
42	3	2	BB Overhead Press	15.00
43	3	2	Leg Curl	45.00
44	3	2	Pec Deck	30.00
45	3	2	Cable Pushdown	15.00
46	3	3	Chest Supported Row	12.00
47	3	3	Cable Upright Row	15.00
48	3	3	DB Bicep Curl	8.00
49	3	4	Incline DB Press	10.00
50	3	4	Sumo Deadlift	30.00
51	3	4	Smith Machine Calf Raise	25.00
52	3	4	Cable Lateral Raise	5.00
53	3	5	Lat Pull-down (wide grip)	35.00
54	3	5	Alternating DB Shoulder Press	8.00
55	3	5	BB Hip Thrust	40.00
56	3	5	Standing Cable Chest Flye	5.00
57	3	5	Cable Pushdown	17.50
58	3	5	DB Bicep Curl	8.00
59	4	1	Smith Machine Squat	30.00
60	4	1	BB Bench Press	5.00
61	4	1	Smith Machine Calf Raise	30.00
62	4	1	Seated Cable Row	40.00
63	4	1	DB Lateral Raise	6.00
64	4	2	BB Overhead Press	15.00
65	4	2	Lat Pull-down (close grip)	40.00
66	4	2	Pec Deck	40.00
67	4	3	Chest Supported Row	12.00
68	4	3	DB Bicep Curl	6.00
69	4	3	Cable Upright Row	15.00
70	4	4	Sumo Deadlift	30.00
71	4	4	Smith Machine Calf Raise	30.00
72	4	4	Incline DB Press	10.00
73	4	4	Leg Extension	39.00
74	4	4	Cable Lateral Raise	7.50
75	4	5	Lat Pull-down (wide grip)	40.00
76	4	5	Alternating DB Shoulder Press	8.00
77	4	5	Standing Cable Chest Flye	7.50
78	4	5	Cable Pushdown	20.00
79	4	5	DB Bicep Curl	10.00
80	5	1	Back Squat	35.00
81	5	1	BB Bench Press	10.00
82	5	1	Chest Supported Row	14.00
83	5	1	DB Lateral Raise	5.00
84	5	1	DB Single-Leg Calf Raise	20.00
85	5	2	BB Overhead Press	20.00
86	5	2	Lat Pulldown	40.00
87	5	2	Leg Extension	45.00
88	5	2	Standing Cable Chest Flye	8.00
89	5	2	Cable Pushdown	20.00
90	5	3	Incline DB Press	12.00
91	5	3	Leg Curl	45.00
\.


--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE SET; Schema: drizzle; Owner: -
--

SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 1, true);


--
-- Name: completions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.completions_id_seq', 34, true);


--
-- Name: exercise_weights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exercise_weights_id_seq', 91, true);


--
-- Name: __drizzle_migrations __drizzle_migrations_pkey; Type: CONSTRAINT; Schema: drizzle; Owner: -
--

ALTER TABLE ONLY drizzle.__drizzle_migrations
    ADD CONSTRAINT __drizzle_migrations_pkey PRIMARY KEY (id);


--
-- Name: completions completions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.completions
    ADD CONSTRAINT completions_pkey PRIMARY KEY (id);


--
-- Name: completions completions_week_day_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.completions
    ADD CONSTRAINT completions_week_day_key UNIQUE (week, day);


--
-- Name: exercise_weights exercise_weights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercise_weights
    ADD CONSTRAINT exercise_weights_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


