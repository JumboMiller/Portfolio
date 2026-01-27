import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const ENABLE_RATE_LIMIT = process.env.ENABLE_RATE_LIMIT === "true";
const RATE_LIMIT_REQUESTS = 20;
const RATE_LIMIT_WINDOW = "1 m";

let ratelimit: Ratelimit | null = null;

if (ENABLE_RATE_LIMIT) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_REQUESTS, RATE_LIMIT_WINDOW),
    analytics: true,
    prefix: "ratelimit",
  });
}

export async function checkRateLimit(request: NextRequest): Promise<NextResponse | null> {
  if (!ENABLE_RATE_LIMIT || !ratelimit) {
    return null;
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? 
             request.headers.get("x-real-ip") ?? 
             "unknown";

  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
        "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
      },
    });
  }

  return null;
}

export function isRateLimitEnabled(): boolean {
  return ENABLE_RATE_LIMIT;
}
