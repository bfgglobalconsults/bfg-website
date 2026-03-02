import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { CaseStudies } from "./collections/CaseStudies";
import { News } from "./collections/News";
import { Blogs } from "./collections/Blogs";
import { Industries } from "./collections/Industries";
import { LeaveRequests } from "./collections/LeaveRequests";
import { Transactions } from "./collections/Transactions";
import { Team } from "./collections/Team";
import { Complaints } from "./collections/Complaints";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    CaseStudies,
    News,
    Blogs,
    Industries,
    LeaveRequests,
    Transactions,
    Team,
    Complaints,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
