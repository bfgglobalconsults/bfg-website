import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export async function GET(request) {
  const payload = await getPayloadHMR({ config: configPromise });
  const { searchParams } = new URL(request.url);

  try {
    const where = {};

    // Build where clause from query params
    const slug = searchParams.get("slug");
    const unit = searchParams.get("unit");
    const region = searchParams.get("region");
    const status = searchParams.get("status") || "published";

    if (slug) {
      where.slug = { equals: slug };
    }

    if (unit) {
      where.unit = { equals: unit };
    }

    // Only filter by region if explicitly on /ng or /uk paths
    // Global site (main) should show all case studies
    if (region && (region === 'uk' || region === 'ng')) {
      where.region = { in: [region === 'ng' ? 'nigeria' : region] };
    }

    where.status = { equals: status };

    const caseStudies = await payload.find({
      collection: "case-studies",
      where,
      sort: "-publishedDate",
      depth: 2,
    });

    return Response.json(caseStudies);
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return Response.json(
      { error: "Failed to fetch case studies" },
      { status: 500 }
    );
  }
}
