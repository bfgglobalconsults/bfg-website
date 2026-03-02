import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export async function GET(request) {
  const payload = await getPayloadHMR({ config: configPromise });
  const { searchParams } = new URL(request.url);

  try {
    const where = {};

    const slug = searchParams.get("slug");
    const region = searchParams.get("region");
    const department = searchParams.get("department");
    const status = searchParams.get("status") || "active";

    if (slug) {
      where.slug = { equals: slug };
    }

    if (region) {
      where.region = { contains: region };
    }

    if (department) {
      where.department = { equals: department };
    }

    where.status = { equals: status };

    const team = await payload.find({
      collection: "team",
      where,
      sort: "order",
      depth: 2,
    });

    return Response.json(team);
  } catch (error) {
    console.error("Error fetching team:", error);
    return Response.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}
