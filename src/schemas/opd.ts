/**
 * TODO: Consider below upgrade later on if needed necessary
 * export interface OPDHead {
  name: string;
  title: string;             // e.g., "Kepala Dinas"
  photoUrl?: string;         // official portrait
  nip?: string;              // Nomor Induk Pegawai (civil ID)
  email?: string;            // official contact
  phone?: string;            // optional, civil line
  bio?: string;              // profile background
  quote?: string;            // inspirational quote or vision statement
  tenureStart?: string;      // ISO date string
  tenureEnd?: string;        // ISO or undefined if still active
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export interface OPDDivision {
  name: string;              // e.g., "E-Government"
  abbreviation: string;      // e.g., "E-Gov"
  description?: string;
  function?: string;         // core responsibility / tugas pokok
  head?: string;             // kepala bidang or responsible person
  contactEmail?: string;     // optional public contact
  employeeCount?: number;
  officeLocation?: string;   // optional office/unit location
}

export interface OPD {
  id: string;                          // unique ID or slug
  name: string;                        // e.g., "Dinas Komunikasi dan Informatika"
  abbreviation?: string;              // e.g., "Diskominfo"
  description?: string;               // profile or tugas dan fungsi
  type?: 'dinas' | 'badan' | 'bagian' | 'sekretariat';
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  mapLocationUrl?: string;            // optional Google Maps
  logoUrl?: string;
  head: OPDHead;
  divisions?: OPDDivision[];
  establishedDate?: string;           // ISO date
  workingHours?: string;              // e.g., "Senin–Jumat, 08.00–16.00 WIB"
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}


 */
import { z } from 'zod';

export const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export const opdContactSchema = z.object({
  phone: z.string().optional(),
  fax: z.string().optional(),
  email: z.string().optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  coordinates: coordinatesSchema.optional(),
});

export const opdHeadSchema = z.object({
  name: z.string(),
  title: z.string(),
  photoUrl: z.string().url().optional(),
  bio: z.string().optional(),
  quote: z.string().optional(),
});

export const opdDivisionSchema = z.object({
  name: z.string(),
  abbreviation: z.string(),
  description: z.string().optional(),
  employeeCount: z.number().optional(),
});

// 🆕 Services Schema
export const opdServiceSchema = z.object({
  id: z.string().optional(), // optional slug or uuid
  title: z.string(),
  type: z.enum(['online', 'offline', 'hybrid']),
  description: z.string().optional(),
  category: z.string().optional(), // e.g., "Perizinan", "Informasi Publik"
  isFeatured: z.boolean(),
  imageUrl: z.string().url().optional(),
  requirements: z.array(z.string()).optional(), // syarat layanan
  procedure: z.string().optional(), // optional description of the procedure
  estimatedTime: z.string().optional(), // e.g., "2 Hari Kerja"
  fee: z.string().optional(), // e.g., "Gratis", "Rp 10.000"
  contactPerson: z.string().optional(), // nama petugas/contact
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  location: z.string().optional(), // lokasi layanan offline
  link: z.string().url().optional(), // link ke layanan online
});

export const operationalHoursSchema = z.object({
  day: z.number().min(1).max(7), // 1 = Monday
  open: z.string(),
  close: z.string(),
});

export const opdSchema = z.object({
  name: z.string(),
  head: opdHeadSchema,
  divisions: z.array(opdDivisionSchema).optional(),
  workingHours: z.array(operationalHoursSchema),
  contact: opdContactSchema,

  // 🆕 Add services to main schema
  services: z.array(opdServiceSchema).optional(),
});

export type OPD = z.infer<typeof opdSchema>;
export type OPDService = z.infer<typeof opdServiceSchema>;
