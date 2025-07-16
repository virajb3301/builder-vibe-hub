export async function onRequest(context) {
  return new Response(
    JSON.stringify({ message: "Pong from Cloudflare Workers!" }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
