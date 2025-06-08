# Stage 1: Instalasi Dependensi
FROM node:22-alpine AS deps
WORKDIR /app

# Instal pnpm
RUN npm install -g pnpm

# Salin file package management
COPY package.json pnpm-lock.yaml ./

# Instal dependensi produksi saja
RUN pnpm install --prod --frozen-lockfile

# ---

# Stage 2: Builder
FROM node:22-alpine AS builder
WORKDIR /app

# Salin dependensi dari stage sebelumnya
COPY --from=deps /app/node_modules ./node_modules

# Salin sisa kode sumber
COPY . .

# Jalankan build dengan output standalone
RUN pnpm build

# ---

# Stage 3: Runner (Final Image)
FROM node:22-alpine AS runner
WORKDIR /app

# Set environment ke produksi
ENV NODE_ENV=production

# Buat user non-root untuk keamanan
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Salin output standalone dari stage builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Salin folder public
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Port yang diekspos oleh Next.js
EXPOSE 3000
ENV PORT 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]