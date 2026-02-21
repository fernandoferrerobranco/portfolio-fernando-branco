// Teste simples SEM Hono
Deno.serve((req) => {
  console.log('🔥 Request received:', req.url);
  
  return new Response(
    JSON.stringify({ 
      status: 'ok', 
      message: 'Simple test works!',
      timestamp: new Date().toISOString() 
    }),
    { 
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      } 
    }
  );
});
