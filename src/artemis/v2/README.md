# Artemis V2 API

## Code Structure
code structure is inspired by supabase.
```
const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)
```
we want to do simply process which you just need to define .env and everything will works

## V2 Workflow

### Authentication

### Workflow

#### Individual
1. Indiv Customer POST
2. Indiv Screening POST
3. Indiv Doc POST
4. Indiv Report POST
5. Indiv Customer GET
6. Compliance Team Review PENDING profile

#### Corporate

