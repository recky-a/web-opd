# 1. Base layer
FROM node:22-slim AS base
RUN npm install -g pnpm@10
WORKDIR /app

# 2. Dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

ARG NODE_ENV
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_SITE_NAME
ARG NEXT_PUBLIC_SITE_SHORTNAME
ARG NEXT_PUBLIC_DEV_NAME
ARG NEXT_PUBLIC_DEV_URL

ENV NODE_ENV=$NODE_ENV \
    NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME \
    NEXT_PUBLIC_SITE_SHORTNAME=$NEXT_PUBLIC_SITE_SHORTNAME \
    NEXT_PUBLIC_DEV_NAME=$NEXT_PUBLIC_DEV_NAME \
    NEXT_PUBLIC_DEV_URL=$NEXT_PUBLIC_DEV_URL


# 3. Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# 4. Runner
FROM node:22-slim AS runner
WORKDIR /app
RUN useradd -m nextjs
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
